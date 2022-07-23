<template>
    <Cursor />

    <div class="container"
         :class="{ 'container-dark-theme': themeStore.value == 'dark',
                   'container-light-theme': themeStore.value == 'light' }">

        <Navbar />

        <div
            class="elements-to-blurr-while-nav-menu-is-opened"
            :class="{ 'blurr': navMenuStore.opened }"
        >

            <LandingPage />

            <Education />

            <Experience />

            <Skills />

            <Projects />

            <Footer />

        </div>
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

import useLanguageSwitcher from '@/composables/useLanguageSwitcher';

import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorStore } from '@/stores/cursor';

import { useCursorHover } from '@/directives/useCursorHover';

import addEventOnCursor from '@/functions/addEventOnCursor';
import setLangAttribute from '@/functions/setLangAttribute';
import setBackgroundColorOnScrollbar from '@/functions/setBackgroundColorOnScrollbar';

import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    addEventOnCursor();
    setLangAttribute();
    setBackgroundColorOnScrollbar();
});

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

const navMenuStore = useNavMenuStore();

const { t, changeLanguage } = useLanguageSwitcher();

const vCursorHover = useCursorHover();

</script>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';
@import '@/styles/scrollbar.less';

#app {
    .container {
        font-family: 'LatoFontRegular';
        min-height: 200vh;

        transition: background-color ease 1s,
                    color ease 1s;

        .elements-to-blurr-while-nav-menu-is-opened {
            transition: filter ease 0.3s;
        }
    }

    .container-dark-theme {
        background-color: #dark[background-color];
        color: #dark[text-color];
    }

    .container-light-theme {
        background-color: #light[background-color];
        color: #light[text-color];
    }

    /* Every element which is above z-index: 9; shouldn't be blurred */
    .blurr {
        filter: blur(2px);
    }
}
</style>
