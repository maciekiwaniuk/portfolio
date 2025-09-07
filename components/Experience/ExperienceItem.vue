<script setup lang="ts">
import ExperienceTimeline from '~/components/Experience/ExperienceTimeline.vue';
import TechnologyElement from '~/components/TechnologyElement.vue';
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';
import type { TechnologyType } from '~/types/TechnologyType';

const props = defineProps<{
    index: number;
    companyName: string;
    content: string;
    profession: string;
    dateRange: string;
    period: string;
    url: string;
    technologies: TechnologyType[];
}>();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();
</script>

<template>
    <div :class="$style.experienceItemContainer">
        <div
            v-if="index % 2 === 1"
            :class="$style.visibleOnBigScreen"
        />
        <ExperienceTimeline
            v-if="index % 2 === 1"
            :class="$style.visibleOnBigScreen"
        />
        <a
            v-cursor-hover
            :class="$style.link"
            target="_blank"
            :href="props.url"
        >
            <div
                :class="[
                    $style.experienceItem,
                    { [$style.experienceItemDarkTheme]: themeStore.isDark,
                      [$style.experienceItemLightTheme]: themeStore.isLight }
                ]"
            >
                <h3 :class="$style.companyName">{{ props.companyName }}</h3>

                <p :class="$style.content">
                    {{ props.content }}
                </p>

                <div :class="$style.technologies">
                    <TechnologyElement
                        v-for="(technology, indexKey) in props.technologies"
                        :key="indexKey"
                        :element="technology"
                    />
                </div>

                <p :class="$style.below">
                    <span>{{ props.profession }}</span>
                    <span :class="$style.jobTime">
                        <span :class="$style.dateRange">{{ dateRange }}</span>
                        <span>{{ period }}</span>
                    </span>
                </p>
            </div>
        </a>
        <ExperienceTimeline
            v-if="index % 2 === 0"
            :class="$style.visibleOnBigScreen"
        />
        <div
            v-if="index % 2 === 0"
            :class="$style.visibleOnBigScreen"
        />
    </div>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.visibleOnBigScreen {
    display: none;
}
.link {
    text-decoration: none;
    color: inherit;
}
.experienceItem {
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

    .companyName {
        display: flex;
        align-items: center;
        margin: auto;
        font-size: 1.4rem;
    }
    .content {
        display: flex;
        align-items: center;
        text-align: left;
        font-family: 'LatoFontLight', serif;
        font-style: italic;
        line-height: 1.3rem;
        font-size: 1.05rem;
    }
    .technologies {
        display: flex;
        align-content: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 0.5rem;
        gap: 0.5rem;
    }
    .below {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'LatoFontLight', serif;
        padding-top: 0.5rem;

        .jobTime {
            span {
                display: block;
            }
            .dateRange::after {
                content: ' ';
            }
        }
    }
}

@media (min-width: @first-breakpoint) {
    .experienceItem {
        .companyName {
            max-width: 25rem;
        }
        .content {
            line-height: 1.4rem;
        }
        .technologies {
            justify-content: flex-start;
        }

        .below {
            .job-time span {
                display: inline;
            }
        }
    }
}

@media (min-width: @second-breakpoint) {
    .experienceItemContainer {
        display: grid;
        grid-template-columns: 4fr 1fr 4fr;

        .visibleOnBigScreen {
            display: block;
        }
    }
}

.experienceItemDarkTheme {
    background-color: #dark[background-color-on-element];
}

.experienceItemLightTheme {
    background-color: #light[background-color-on-element];
}
</style>
