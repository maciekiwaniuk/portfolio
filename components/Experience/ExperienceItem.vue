<script setup lang="ts">
import TechnologyElement from '~/components/TechnologyElement.vue';
import ExperienceTimeline from '~/components/Experience/ExperienceTimeline.vue';
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
    <div class="experience-item-container">
        <div
            v-if="index % 2 === 1"
            class="visible-on-big-screen"
        />
        <ExperienceTimeline
            v-if="index % 2 === 1"
            class="visible-on-big-screen"
        />
        <a
            v-cursor-hover
            class="link"
            target="_blank"
            :href="props.url"
        >
            <div
                class="experience-item"
                :class="{ 'experience-item-dark-theme': themeStore.isDark,
                          'experience-item-light-theme': themeStore.isLight }"
            >
                <h3 class="companyName">{{ props.companyName }}</h3>

                <p class="content">
                    {{ props.content }}
                </p>

                <div class="technologies">
                    <TechnologyElement
                        v-for="(technology, indexKey) in props.technologies"
                        :key="indexKey"
                        :element="technology"
                    />
                </div>

                <p class="below">
                    <span>{{ props.profession }}</span>
                    <span class="job-time">
                        <span class="date-range">{{ dateRange }}</span>
                        <span>{{ period }}</span>
                    </span>
                </p>
            </div>
        </a>
        <ExperienceTimeline
            v-if="index % 2 === 0"
            class="visible-on-big-screen"
        />
        <div
            v-if="index % 2 === 0"
            class="visible-on-big-screen"
        />
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.visible-on-big-screen {
    display: none;
}
.link {
    text-decoration: none;
    color: inherit;
}
.experience-item {
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

        .job-time {
            span {
                display: block;
            }
            .date-range::after {
                content: ' ';
            }
        }
    }
}

@media (min-width: @first-breakpoint) {
    .experience-item {
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
    .experience-item-container {
        display: grid;
        grid-template-columns: 4fr 1fr 4fr;

        .visible-on-big-screen {
            display: block;
        }
    }
}

.experience-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.experience-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
