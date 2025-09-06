<script setup lang="ts">
import NavigationLinks from '~/components/Navbar/NavigationLinks.vue';
import { useCursorHover } from '~/directives/useCursorHover';
import { useNavMenuStore } from '~/stores/navMenu';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();

const navMenuStore = useNavMenuStore();

const vCursorHover = useCursorHover();
</script>

<template>
    <header
        :class="[
            $style.navigation,
            { [$style.navigationDarkTheme]: themeStore.isDark,
              [$style.navigationLightTheme]: themeStore.isLight }
        ]"
    >
        <button
            v-cursor-hover
            :class="$style.navHamburgerToggler"
            aria-label="Hamburger"
            @click="navMenuStore.open();"
        >
            <span :class="[$style.bar, $style.barShort]" />
            <span :class="$style.bar" />
            <span :class="[$style.bar, $style.barMedium]" />
        </button>

        <div :class="$style.navLinks">
            <NavigationLinks alignment="horizontal" />
        </div>

        <div
            :class="[
                $style.backgroundBlockingContent,
                { [$style.backgroundBlockingContentVisible]: navMenuStore.opened }
            ]"
            @click="navMenuStore.close();"
        />

        <div :class="[$style.navLinksMobileMenu, { [$style.active]: navMenuStore.opened }]">
            <NavigationLinks alignment="vertical" />
        </div>
    </header>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.navigation {
    font-family: 'LatoFontBold', serif;
    z-index: 10;

    .navHamburgerToggler {
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
        .barShort {
            width: 50%;
        }
        .barMedium {
            width: 80%;
        }
    }
    .navLinks {
        display: none;
    }

    .backgroundBlockingContent {
        position: absolute;
        top: 0;
        left: 0;
        height: 367rem;
        width: 0;
    }
    .backgroundBlockingContentVisible {
        width: calc(100vw - 12rem);
    }

    .navLinksMobileMenu {
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
        .navHamburgerToggler {
            display: none;
        }

        .navLinks {
            display: flex;
        }
    }
}

.navigationDarkTheme {
    .bar {
        background-color: #dark[text-color];
    }
    .navHamburgerToggler:hover .bar {
        background-color: #dark[text-color-hover];
    }

    .navLinksMobileMenu {
        background-color: #dark[background-color];
    }
}
.navigationLightTheme {
    .bar {
        background-color: #light[text-color];
    }
    .navHamburgerToggler:hover .bar {
        background-color: #light[text-color-hover];
    }
    .navLinksMobileMenu {
        background-color: #light[background-color];
    }
}
</style>
