<template>
    <Cursor />

    <div class="container"
         :class="{ 'container-dark-theme': themeStore.value == 'dark',
                   'container-light-theme': themeStore.value == 'light' }">
        <Navbar />

        <LandingPage />

        <Education />

        <Experience />

        <Skills />

        <Projects />

        <Footer />
    </div>
</template>

<script setup>
import Cursor from '@/components/Cursor.vue';
import Navbar from '@/components/Navbar/Navbar.vue';
import LandingPage from '@/components/LandingPage.vue';
import Education from '@/components/Education/Education.vue';
import Experience from '@/components/Experience/Experience.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects/Projects.vue';
import Footer from '@/components/Footer.vue';

import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';

import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

import { addEventOnCursor } from '@/functions/addEventOnCursor';
import { setLangAttribute } from '@/functions/setLangAttribute';
import { setBackgroundColorOnScrollbar } from '@/functions/setBackgroundColorOnScrollbar';

import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    addEventOnCursor();
    setLangAttribute();
    setBackgroundColorOnScrollbar();
});

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

const { t, changeLanguage } = useLanguageSwitcher();

</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';
@import '@/styles/scrollbar.less';

#app {
    .container {
        min-height: 200vh;
        font-family: 'LatoFontRegular';

        transition: background-color ease @theme-switch-time,
                    color ease @theme-switch-time;

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
