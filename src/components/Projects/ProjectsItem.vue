<script setup lang="ts">
import { Icon } from '@iconify/vue';
import TechnologyElement from '@/components/TechnologyElement.vue';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';
import { TechnologyType } from '@/types/TechnologyType';
import { AnimationType } from '@/types/AnimationType';
import { DarkTheme, LightTheme } from '@/constants/app';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps<{
    title: string,
    content: string,
    technologies: TechnologyType[],
    github: string,
    online?: string,
    animation: AnimationType
}>()

</script>

<template>
    <div :data-aos="props.animation">
        <div
            class="projects-item"
            :class="{ 'projects-item-dark-theme': themeStore.theme === DarkTheme,
                      'projects-item-light-theme': themeStore.theme === LightTheme }"
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

            <p class="below" v-if="props.github || props.online">
                <a
                    class="link"
                    target="_blank"
                    aria-label="GitHub"
                    v-cursor-hover
                    v-if="props.github"
                    :href="props.github"
                >
                    <span class="text">GitHub</span>
                    <Icon icon="icon-park-outline:github" width="38" />
                </a>


                <a
                    class="link"
                    target="_blank"
                    v-cursor-hover
                    v-if="props.online"
                    :href="props.online"

                >
                    <span class="text">Online</span>
                    <Icon icon="ci:external-link" width="38" />
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
