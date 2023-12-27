<script setup lang="ts">
import NavigationLinks from '@/components/Navbar/NavigationLinks.vue';
import { useThemeStore } from '@/stores/theme';
import { useNavMenuStore } from '@/stores/navMenu';
import { useCursorHover } from '@/directives/useCursorHover';
import { DarkTheme, LightTheme } from '@/constants/app';

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();

</script>

<template>
    <header
        class="navigation"
        :class="{ 'navigation-dark-theme': themeStore.theme === DarkTheme,
                  'navigation-light-theme': themeStore.theme === LightTheme }"
    >
        <button
            class="nav-hamburger-toggler"
            v-cursor-hover
            @click="navMenuStore.open();"
            aria-label="Hamburger"
        >
            <span class="bar bar-short"></span>
            <span class="bar"></span>
            <span class="bar bar-medium"></span>
        </button>

        <div class="nav-links">
            <NavigationLinks alignment="horizontal" />
        </div>

        <div
            class="background-blocking-content"
            :class="{ 'background-blocking-content-visible': navMenuStore.opened }"
            @click="navMenuStore.close();">
        </div>

        <div class="nav-links-mobile-menu" :class="{ 'active': navMenuStore.opened }">
            <NavigationLinks alignment="vertical" />
        </div>
    </header>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navigation {
    font-family: 'LatoFontBold', serif;

    .nav-hamburger-toggler {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 2.6rem;
        height: 1.8rem;
        border: none;
        background-color: transparent;
        cursor: pointer;

        transition: background-color ease @theme-switch-time;

        .bar {
            height: 0.25rem;
            width: 100%;
            border-radius: 10px;
            transition: background-color ease @hover-time;
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
    }

    .background-blocking-content {
        position: absolute;
        top: 0;
        left: 0;
        height: 367rem;
        width: 0;
    }
    .background-blocking-content-visible {
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
        width: 0;
        min-height: 100vh;
        border: none;

        transition: width ease-in-out @mobile-menu-time,
                    border ease-in-out @mobile-menu-time;
    }
    .active {
        width: 12rem;
        background-color: orange;
        border-left: solid @blue-color 0.2rem;
    }
}

@media (min-width: @first-breakpoint) {
    .navigation {
        .nav-hamburger-toggler {
            display: none;
        }

        .nav-links {
            display: flex;
        }
    }
}

.navigation-dark-theme {
    .bar {
        background-color: #dark[text-color];
    }
    .nav-hamburger-toggler:hover .bar {
        background-color: #dark[text-color-hover];
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
    .nav-links-mobile-menu {
        background-color: #light[background-color];
    }
}

</style>
