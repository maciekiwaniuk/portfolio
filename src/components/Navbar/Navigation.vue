<template>
    <div
        class="navigation"
        :class="{ 'navigation-dark-theme' : themeStore.value == 'dark',
                  'navigation-light-theme' : themeStore.value == 'light'}"
    >
        <button
            class="nav-hamburger-toggler"
            v-cursor-hover
            @click="navMenuStore.toggle();"
        >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <div class="nav-links">
            <NavigationLinks alignment="horizontal"/>
        </div>

        <div class="nav-links-right-menu" :class="{ 'active': navMenuStore.opened }">
            <NavigationLinks alignment="vertical"/>
        </div>

    </div>
</template>

<script setup>
import NavigationLinks from '@/components/Navbar/NavigationLinks.vue';
import useLanguageSwitcher from '@/composables/useLanguageSwitcher';
import useNavMenuToggler from '@/composables/useNavMenuToggler';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';
import { ref } from '@vue/reactivity';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navigation {
    .nav-hamburger-toggler {
        flex-direction: column;
        justify-content: space-evenly;
        width: 3rem;
        height: 1.8rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: background-color ease 1s;

        display: flex;
        @media (min-width: 600px) {
            display: none;
        }

        .bar {
            height: 0.25rem;
            width: 100%;
            border-radius: 10px;
            transition: background-color ease 0.1s;
        }
    }
    .nav-links {
        text-transform: uppercase;

        display: none;
        @media (min-width: 600px) {
            display: flex;
        }
    }

    .nav-links-right-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 0rem;
        min-height: 100vh;

        transition: width ease-in-out 0.2s;
    }
    .active {
        width: 12rem;
        background-color: orange;

    }
}

.navigation-dark-theme {
    .bar {
        background-color: #dark[text-color];
    }
    .nav-hamburger-toggler:hover .bar {
        background-color: #dark[text-color-hover];
    }

    li:hover {
        color: #dark[text-color-hover];
    }

    .nav-links-right-menu {
        background-color: #dark[background-color];
        background-color: red;
    }
}
.navigation-light-theme {
    .bar {
        background-color: #light[text-color];
    }
    .nav-hamburger-toggler:hover .bar {
        background-color: #light[text-color-hover];
    }
    li:hover {
        color: #light[text-color-hover];
    }

    .nav-links-right-menu {
        background-color: #light[background-color];
        background-color: yellow;;
    }
}
</style>
