<script setup lang="ts">
import BlogItem from '~/components/blog/BlogItem.vue';

const { data: posts } = await useAsyncData(() =>
    queryCollection('content').all()
);
</script>

<template>
    <section :class="$style.blog">
        <h1 :class="$style.title">
            {{ $t('blog.title') }}
        </h1>

        <div :class="$style.items">
            <BlogItem
                v-for="(post, index) in posts"
                :key="index"
                :path="post.path"
                :title="post.title"
                :description="post.description"
                :date="post.meta.date"
                :tags="post.meta.tags"
                :reading-time="post.meta.readingTime"
            />
        </div>
    </section>
</template>

<style module lang="less">
@import '/styles/variables.less';

.blog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    min-height: 50vh;
    margin: auto;
    padding-bottom: 1rem;

    .title {
        float: left;
        width: 100%;
        min-height: 3rem;
        text-align: center;
        font-family: 'Lato', serif;
        font-weight: 700;
        font-size: 3rem;
        color: @blue-color;
    }
    .items {
        float: left;
        width: 100%;
        padding: 0.5rem;
    }
}

@media (min-width: @first-breakpoint) {
    .blog {
        min-width: 40rem;
        max-width: 42rem;
        padding-bottom: 7rem;

        .title {
            min-height: 4rem;
        }
    }
}
</style>
