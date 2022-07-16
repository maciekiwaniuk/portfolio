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
            <div class="title">{{ props.title }}</div>

            <div class="content">
                {{ props.content }}
            </div>

            <div class="down">
                <span>{{ props.major }}</span>
                <span>{{ props.period }}</span>
            </div>
        </div>
    </a>

</template>

<script setup>
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const { t } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    title: String,
    content: String,
    major: String,
    period: String,
    url: String
});
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.link {
    text-decoration: none;
    color: inherit;
}
.education-item {
    display: grid;
    grid-template-rows: 1fr 1.2fr 0.5fr;
    min-height: 10rem;
    width: 100%;
    border: solid @blue-color 0.2rem;
    border-radius: 1rem;
    padding: 0.6rem 0.9rem 0.6rem 0.9rem;
    text-align: center;
    cursor: pointer;

    transition: background-color ease 1s;

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
        font-family: 'LatoFontLight';
        font-style: italic;
    }
    .down {
        font-family: 'LatoFontLight';
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;
    }
}

@media (min-width: @first-breakpoint) {
    .title {
        max-width: 25rem;
    }
}

.education-item-dark-theme {
    background-color: #dark[background-color-on-element];
}

.education-item-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
