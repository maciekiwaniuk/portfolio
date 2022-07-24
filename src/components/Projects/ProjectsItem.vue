<template>
    <div :data-aos="props.animation">
        <div
            class="projects-item"
            :class="{ 'projects-item-dark-theme': themeStore.value == 'dark',
                      'projects-item-light-theme': themeStore.value == 'light' }"
        >
            <div class="title">
                {{ props.title }}
            </div>

            <div class="content">
                {{ props.content }}
            </div>

            <div class="technologies">
                <TechnologyElement
                    v-for="(technology, index) in props.technologies"
                    :key="index"
                    :element="technology"
                />
            </div>

            <div class="below" v-if="props.github || props.online">
                <a
                    class="link"
                    target="_blank"
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import TechnologyElement from '@/components/TechnologyElement.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    content: String,
    technologies: Array,
    github: String,
    online: String,
    animation: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.projects-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-height: 10rem;
    width: 100%;
    border: solid @blue-color 0.2rem;
    border-radius: 1rem;
    padding: 0.6rem 0.9rem 0.6rem 0.9rem;
    margin-bottom: 1.5rem;
    text-align: center;

    transition: background-color ease 1s;

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
        font-family: 'LatoFontLight';
        font-style: italic;
        line-height: 1.3rem;
        font-size: 1.05rem;
    }

    .technologies {
        padding-top: 0.5rem;
        display: flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .below {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.4rem 0.2rem 0.1rem 0.2rem;

        .link {
            display: flex;
            text-decoration: none;
            color: inherit;
            padding-right: 1rem;

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
        .below {
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
