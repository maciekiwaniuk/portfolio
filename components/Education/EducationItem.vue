<script setup lang="ts">
import TechnologyElement from '~/components/TechnologyElement.vue';
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';
import type { TechnologyType } from '~/types/TechnologyType';

const props = defineProps<{
    title: string;
    content: string;
    major: string;
    period: string;
    url: string;
    technologies: TechnologyType[];
}>();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<template>
    <div>
        <a
            v-cursor-hover
            :class="$style.link"
            target="_blank"
            :href="props.url"
        >
            <div
                :class="[
                    $style.educationItem,
                    { [$style.educationItemDarkTheme]: themeStore.isDark,
                      [$style.educationItemLightTheme]: themeStore.isLight }
                ]"
            >
                <h3 :class="$style.title">{{ props.title }}</h3>

                <p :class="$style.content">
                    {{ props.content }}
                </p>

                <div :class="$style.technologies">
                    <TechnologyElement
                        v-for="(technology, index) in props.technologies"
                        :key="index"
                        :element="technology"
                    />
                </div>

                <p :class="$style.below">
                    <span>{{ props.major }}</span>
                    <span>{{ props.period }}</span>
                </p>
            </div>
        </a>
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}
.educationItem {
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
        font-size: 1.2rem;
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
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;
        font-family: 'LatoFontLight', serif;
    }
}

@media (min-width: @first-breakpoint) {
    .educationItem {
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

.educationItemDarkTheme {
    background-color: #dark[background-color-on-element];
}

.educationItemLightTheme {
    background-color: #light[background-color-on-element];
}
</style>
