<script setup lang="ts">
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';

const props = defineProps<{
    path: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readingTime: string;
}>();

const vCursorHover = useCursorHover();
const themeStore = useThemeStore();

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
    <article>
        <NuxtLink
            v-cursor-hover
            :to="path"
            :class="$style.link"
        >
            <div
                :class="[
                    $style.blogItem,
                    { [$style.blogItemDarkTheme]: themeStore.isDark,
                      [$style.blogItemLightTheme]: themeStore.isLight }
                ]"
            >
                <h3 :class="$style.title">
                    {{ props.title }}
                </h3>

                <p :class="$style.description">
                    {{ props.description }}
                </p>

                <div :class="$style.tags" v-if="tags.length > 0">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        :class="$style.tag"
                    >
                        #{{ tag }}
                    </span>
                </div>

                <div :class="$style.meta">
                    <div :class="$style.metaLeft">
                        <time :class="$style.date" :datetime="props.date">
                            {{ formatDate(props.date) }}
                        </time>
                        <span :class="$style.readingTime" v-if="props.readingTime">
                            {{ props.readingTime }}
                        </span>
                    </div>
                    <span :class="$style.readMore">
                        {{ $t('blog.readMore') }}
                    </span>
                </div>
            </div>
        </NuxtLink>
    </article>
</template>

<style module lang="less">
@import '/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}

.blogItem {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    min-height: 10rem;
    width: 100%;
    border: solid @blue-color 0.2rem;
    border-radius: 1rem;
    padding: 0.6rem 0.9rem 0.6rem 0.9rem;
    margin-bottom: 1.5rem;
    cursor: pointer;

    transition: background-color ease @theme-switch-time;

    .title {
        display: flex;
        align-items: center;
        margin: auto;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }
    .description {
        display: flex;
        align-items: center;
        text-align: left;
        line-height: 1.3rem;
        font-family: 'Lato', serif;
        font-weight: 300;
        font-style: italic;
        font-size: 1.05rem;
        margin-bottom: 0.5rem;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        margin-bottom: 0.5rem;
        justify-content: center;

        .tag {
            background-color: @blue-color;
            color: white;
            padding: 0.2rem 0.5rem;
            border-radius: 0.3rem;
            font-size: 0.8rem;
        }
    }
    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Lato', serif;
        font-weight: 300;
        font-size: 0.9rem;

        .metaLeft {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .date {
            opacity: 0.8;
        }

        .readingTime {
            color: @blue-color;
            font-weight: 400;
            font-size: 0.8rem;
        }

        .readMore {
            color: @blue-color;
            font-weight: 400;
        }
    }
}

@media (min-width: @first-breakpoint) {
    .blogItem {
        .title {
            max-width: 25rem;
        }
        .description {
            line-height: 1.4rem;
        }
        .tags {
            justify-content: flex-start;
        }
        .meta {
            .metaLeft {
                flex-direction: row;
                gap: 1rem;
            }
        }
    }
}

.blogItemDarkTheme {
    background-color: #dark[background-color-on-element];
}

.blogItemLightTheme {
    background-color: #light[background-color-on-element];
}
</style>
