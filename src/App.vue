<template>
    <TheCursor />

    <div class="container"
         :class="{ 'container-dark-theme' : themeStore.value == 'dark',
                  'container-light-theme' : themeStore.value == 'light' }">

        <TheHeader />

        <TheLandingPage />

    </div>
</template>

<script setup>
import TheCursor from '@/components/TheCursor.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheLandingPage from './components/TheLandingPage.vue';

import useLanguageSwitcher from '@/composables/useLanguageSwitcher';

import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

import { useCursorHover } from '@/directives/useCursorHover';

import addEventOnCursor from '@/functions/addEventOnCursor';
import setLangAttribute from '@/functions/setLangAttribute';

import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    addEventOnCursor();
    setLangAttribute();
});

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

const { t, changeLanguage } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';

#app {
    .container {
        font-family: 'LatoFont';
        min-height: 200vh;

        transition: background-color ease 1s,
                    color ease 1s;
    }

    .container-dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];
    }

    .container-light-theme {
        background-color: #light[background-color];
        color: #light[text-color];
    }

}
</style>
