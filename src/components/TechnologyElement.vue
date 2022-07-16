<template>
    <div
        v-cursor-hover
        class="technology-element"
        :class="{ 'technology-element-dark-theme': themeStore.value == 'dark',
                  'technology-element-light-theme': themeStore.value == 'light' }"
    >

        <div class="icon">
            <Icon
                :icon="technologies[props.element].icon"
                :width="technologies[props.element].width"
            />
        </div>

        <div class="title">{{ technologies[props.element].title }}</div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const props = defineProps({
    element: String
});

const technologies = {
    php: {
        title: 'PHP',
        icon: 'logos:php',
        width: 48
    },
    laravel: {
        title: 'Laravel',
        icon: 'logos:laravel',
        width: 40
    },
    javascript: {
        title: 'JavaScript',
        icon: 'vscode-icons:file-type-js-official',
        width: 42
    },
    jquery: {
        title: 'jQuery',
        icon: 'mdi:jquery',
        width: 42
    },
    sass: {
        title: 'Sass',
        icon: 'vscode-icons:file-type-sass',
        width: 42
    },
    bootstrap: {
        title: 'Bootstrap',
        icon: 'akar-icons:bootstrap-fill',
        width: 42
    },
    mysql: {
        title: 'MySQL',
        icon: 'logos:mysql',
        width: 48
    },
    postgresql: {
        title: 'PostgreSQL',
        icon: 'logos:postgresql',
        width: 42
    },
    git: {
        title: 'Git',
        icon: 'bi:git',
        width: 38
    },
    github: {
        title: 'GitHub',
        icon: 'akar-icons:github-fill',
        width: 38
    },
    python: {
        title: 'Python',
        icon: 'logos:python',
        width: 40
    },
    csharp: {
        title: 'C#',
        icon: 'vscode-icons:file-type-csharp2',
        width: 44
    },
    vue: {
        title: 'Vue',
        icon: 'logos:vue',
        width: 38
    }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.technology-element {
    display: flex;
    align-items: center;
    padding: 0.2rem;
    border: solid @blue-color 0.1rem;
    border-radius: 1rem;
    cursor: pointer;

    .icon {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
    }
    .title {
        padding: 0.5rem;
    }
}

.technology-element-dark-theme {
    background-color: #dark[background-color-on-element];
}
.technology-element-light-theme {
    background-color: #light[background-color-on-element];
}
</style>
