<script setup lang="ts">
import TechnologyElement from '~/components/TechnologyElement.vue';
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';
import type { TechnologyType } from '~/types/TechnologyType';

const props = defineProps<{
    title: string;
    content: string;
    technologies: TechnologyType[];
    github?: string;
    online?: string;
}>();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<template>
    <div>
        <div
            class="projects-item"
            :class="{ 'projects-item-dark-theme': themeStore.isDark,
                      'projects-item-light-theme': themeStore.isLight }"
        >
            <h3 class="title">
                {{ props.title }}
            </h3>

            <p class="content">
                {{ props.content }}
            </p>

            <div class="technologies">
                <TechnologyElement
                    v-for="(technology, index) in props.technologies"
                    :key="index"
                    :element="technology"
                />
            </div>

            <p
                v-if="props.github || props.online"
                class="below"
            >
                <a
                    v-if="props.github"
                    v-cursor-hover
                    class="link"
                    target="_blank"
                    aria-label="GitHub"
                    :href="props.github"
                >
                    <span class="text">GitHub</span>
                    <Icon
                        name="icon-park-outline:github"
                        size="33"
                    />
                </a>

                <a
                    v-if="props.online"
                    v-cursor-hover
                    class="link"
                    target="_blank"
                    :href="props.online"
                >
                    <span class="text">Online</span>
                    <Icon
                        name="ci:external-link"
                        size="32"
                    />
                </a>
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.projects-item {
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

    transition: background-color ease @theme-switch-time;

    .title {
        display: flex;
        align-items: center;
        margin: auto;
        font-size: 1.4rem;
    }
    .content {
        display: flex;
        align-items: center;
        text-align: left;
        line-height: 1.3rem;
        font-family: 'LatoFontLight', serif;
        font-style: italic;
        font-size: 1.05rem;
    }
    .technologies {
        display: flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding-top: 0.5rem;
    }
    .below {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.4rem 0.2rem 0.1rem 0.2rem;

        .link {
            display: flex;
            padding-right: 1rem;
            text-decoration: none;
            color: inherit;

            cursor: pointer;

            .text {
                display: flex;
                align-items: center;
                padding-right: 0.3rem;
            }
        }
    }
}

@media (min-width: @first-breakpoint) {
    .projects-item {
        .title {
            max-width: 25rem;
        }
        .content {
            line-height: 1.4rem;
        }
        .technologies {
            justify-content: flex-start;
        }
    }
}

.projects-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.projects-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
