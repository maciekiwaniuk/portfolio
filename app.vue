<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Contact from '~/components/Contact.vue';
import Cursor from '~/components/Cursor.vue';
import Education from '~/components/Education/Education.vue';
import Experience from '~/components/Experience/Experience.vue';
import Footer from '~/components/Footer.vue';
import LandingPage from '~/components/LandingPage/LandingPage.vue';
import Navbar from '~/components/Navbar/Navbar.vue';
import Projects from '~/components/Projects/Projects.vue';
import Skills from '~/components/Skills.vue';

import { DarkTheme, LightTheme } from '~/constants/app';
import { addEventOnCursor } from '~/functions/addEventOnCursor';

import { addEventOnOpeningNavBySliding } from '~/functions/addEventOnOpeningNavBySliding';
import { updateBackgroundColorOnScrollbar } from '~/functions/updateBackgroundColorOnScrollbar';
import { updateLangAttribute } from '~/functions/updateLangAttribute';
import { useNavMenuStore } from '~/stores/navMenu';

import { useThemeStore } from '~/stores/theme';

onMounted(() => {
    addEventOnCursor();
    addEventOnOpeningNavBySliding();
    updateLangAttribute();
    updateBackgroundColorOnScrollbar();
});

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();
watch(
    () => navMenuStore.opened,
    (opened) => {
        document.body.setAttribute('overflow', opened ? 'hidden' : 'visible');
    },
);
</script>

<template>
    <Cursor />

    <main
        class="container"
        :class="{ 'container-dark-theme': themeStore.theme === DarkTheme,
                  'container-light-theme': themeStore.theme === LightTheme }"
    >
        <Navbar />

        <LandingPage />

        <Experience />

        <Education />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
    </main>
</template>

<style lang="less">
@import './styles/variables.less';
@import './styles/main.less';
@import './styles/scrollbar.less';

#app {
    user-select: none;

    .container {
        min-height: 200vh;
        font-family: 'LatoFontRegular', serif;
        background-image: url('./assets/images/background.avif');

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
