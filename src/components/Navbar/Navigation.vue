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
            <span class="bar bar-short"></span>
            <span class="bar"></span>
            <span class="bar bar-medium"></span>
        </button>

        <div class="nav-links">
            <NavigationLinks alignment="horizontal"/>
        </div>

        <div class="blurred-background" :class="{ 'blurred-background-visible': navMenuStore.opened }"></div>

        <div class="nav-links-mobile-menu" :class="{ 'active': navMenuStore.opened }">
            <NavigationLinks alignment="vertical"/>
        </div>

    </div>
</template>

<script setup>
import NavigationLinks from '@/components/Navbar/NavigationLinks.vue';
import useNavMenuToggler from '@/composables/useNavMenuToggler';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';

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
        width: 2.6rem;
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
            transition: background-color ease 0.3s;
        }
        .bar-short {
            width: 50%;
        }
        .bar-medium {
            width: 80%;
        }
    }
    .nav-links {
        display: none;
        @media (min-width: 600px) {
            display: flex;
        }
    }

    .blurred-background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        opacity: 0.7;

        transition: width ease-in-out 0.2s;
    }
    .blurred-background-visible {
        width: calc(100vw - 12rem);
    }

    .nav-links-mobile-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        width: 0rem;
        min-height: 100vh;
        border: none;

        transition: width ease-in-out 0.2s,
                    border ease-in-out 0.2s;
    }
    .active {
        width: 12rem;
        background-color: orange;
        border-left: solid @blue-color 0.2rem;
    }
}

.navigation-dark-theme {
    .bar {
        background-color: #dark[text-color];
    }
    .nav-hamburger-toggler:hover .bar {
        background-color: #dark[text-color-hover];
    }

    .blurred-background {
        background-color: #dark[background-color];
    }
    .nav-links-mobile-menu {
        background-color: #dark[background-color];
    }
}
.navigation-light-theme {
    .bar {
        background-color: #light[text-color];
    }
    .nav-hamburger-toggler:hover .bar {
        background-color: #light[text-color-hover];
    }
    .blurred-background {
        background-color: #light[background-color];
    }
    .nav-links-mobile-menu {
        background-color: #light[background-color];
    }
}
</style>
