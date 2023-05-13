<template>
    <a
        class="link"
        target="_blank"
        :href="props.url"
        v-cursor-hover
    >
        <div
            class="education-item"
            :class="{ 'education-item-dark-theme': themeStore.value == 'dark',
                      'education-item-light-theme': themeStore.value == 'light' }"
        >
            <h3 class="title">{{ props.title }}</h3>

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

            <p class="below">
                <span>{{ props.major }}</span>
                <span>{{ props.period }}</span>
            </p>
        </div>
    </a>

</template>

<script setup>
import TechnologyElement from '@/components/TechnologyElement.vue';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    content: String,
    major: String,
    period: String,
    url: String,
    technologies: Array
});

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}
.education-item {
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
        font-family: 'LatoFontLight';
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
        font-family: 'LatoFontLight';
    }
}

@media (min-width: @first-breakpoint) {
    .education-item {
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

.education-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.education-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
