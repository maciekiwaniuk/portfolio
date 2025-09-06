<script setup lang="ts">
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();
</script>

<template>
    <button
        v-cursor-hover
        :class="$style.changeThemeButton"
        @click="themeStore.toggle();"
    >
        <img
            v-show="themeStore.isDark"
            src="/images/togglers/sun.svg"
            :class="[$style.icon, $style.sunIcon]"
            width="1000"
            height="1000"
            :alt="$t('navbar.images.sun')"
        >
        <img
            v-show="themeStore.isLight"
            src="/images/togglers/moon.svg"
            :class="$style.icon"
            width="1000"
            height="1000"
            :alt="$t('navbar.images.moon')"
        >
    </button>
</template>

<style module lang="less">
@import '@/styles/variables.less';

.changeThemeButton {
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    .icon {
        width: 2.2rem;
        height: auto;
    }
    .sunIcon {
        // change black svg into white
        filter: invert(100%);
    }
}

@media (min-width: @first-breakpoint) {
    .changeThemeButton {
        .icon {
            width: 2.5rem;
        }
    }
}
</style>
