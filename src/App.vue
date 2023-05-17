<template>
    <Cursor />

    <main
        role="main"
        class="container"
        :class="{ 'container-dark-theme': themeStore.theme === 'dark',
                  'container-light-theme': themeStore.theme === 'light' }">
        <Navbar />

        <LandingPage />

        <Education />

        <Experience />

        <Skills />

        <Projects />

        <Footer />
    </main>
</template>

<script setup lang="ts">
import Cursor from '@/components/Cursor.vue';
import Navbar from '@/components/Navbar/Navbar.vue';
import LandingPage from '@/components/LandingPage/LandingPage.vue';
import Education from '@/components/Education/Education.vue';
import Experience from '@/components/Experience/Experience.vue';
import Skills from '@/components/Skills.vue';
import Projects from '@/components/Projects/Projects.vue';
import Footer from '@/components/Footer.vue';

import { useThemeStore } from '@/stores/theme';

import { addEventOnCursor } from '@/functions/addEventOnCursor';
import { addEventOnOpeningNavBySliding } from '@/functions/addEventOnOpeningNavBySliding';
import { setLangAttribute } from '@/functions/setLangAttribute';
import { setBackgroundColorOnScrollbar } from '@/functions/setBackgroundColorOnScrollbar';

import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    addEventOnCursor();
    addEventOnOpeningNavBySliding();
    setLangAttribute();
    setBackgroundColorOnScrollbar();
});

const themeStore = useThemeStore();

</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';
@import '@/styles/scrollbar.less';

#app {
    .container {
        min-height: 200vh;
        font-family: 'LatoFontRegular', serif;

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
