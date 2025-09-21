<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
    queryCollection('content')
        .path(`/blog/${slug}`)
        .first()
);

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

useHead({
    title: `${post.value.title} - Maciek Iwaniuk`,
    meta: [
        { name: 'description', content: post.value.description },
        { property: 'og:title', content: post.value.title },
        { property: 'og:description', content: post.value.description },
    ],
});

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>

<template>
    <main :class="$style.blogPost">
        <div :class="$style.container">
            <NuxtLink to="/blog" :class="$style.backLink">
                {{ $t('blog.backToBlog') }}
            </NuxtLink>

            <article :class="$style.article">
                <header :class="$style.header">
                    <h1 :class="$style.title">{{ post.title }}</h1>
                    <div :class="$style.meta">
                        <span>{{ formatDate(post.meta.date) }}</span>
                    </div>
                    <div v-if="post.meta.tags" :class="$style.tags">
                        <span
                            v-for="tag in post.meta.tags"
                            :key="tag"
                            :class="$style.tag"
                        >
                          #{{ tag }}
                        </span>
                    </div>
                </header>

                <div :class="$style.content">
                    <ContentRenderer :value="post" />
                </div>
            </article>
        </div>
    </main>
</template>

<style module lang="less">
@import '/styles/variables.less';

.blogPost {
    min-height: 100vh;
    padding: 2rem 1rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.backLink {
    display: inline-block;
    margin-bottom: 2rem;
    color: @blue-color;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
}

.article {
    .header {
        margin-bottom: 3rem;
        text-align: center;

        .title {
            font-size: 2.5rem;
            font-family: 'Lato', serif;
            font-weight: 700;
            color: @blue-color;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .meta {
            margin-bottom: 1rem;
            color: #666;
            font-family: 'Lato', serif;
            font-weight: 300;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;

            .tag {
                background-color: @blue-color;
                color: white;
                padding: 0.3rem 0.7rem;
                border-radius: 0.5rem;
                font-size: 0.9rem;
            }
        }
    }

    .content {
        line-height: 1.8;
        font-family: 'Lato', serif;
        font-weight: 400;

        :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
            color: @blue-color;
            font-family: 'Lato', serif;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        :global(p) {
            margin-bottom: 1.5rem;
        }

        :global(code) {
            background-color: #f5f5f5;
            padding: 0.2rem 0.4rem;
            border-radius: 0.3rem;
            font-size: 0.9em;
        }

        :global(pre) {
            background-color: #f5f5f5;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
        }

        :global(blockquote) {
            border-left: 4px solid @blue-color;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
        }
    }
}

@media (min-width: @first-breakpoint) {
    .blogPost {
        padding: 3rem 2rem;
    }

    .article .header .title {
        font-size: 3rem;
    }
}
</style>
