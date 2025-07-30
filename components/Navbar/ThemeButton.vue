<script setup lang="ts">
import { useCursorHover } from '~/directives/useCursorHover';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();
</script>

<template>
    <button
        v-cursor-hover
        class="change-theme-button"
        @click="themeStore.toggle();"
    >
        <img
            v-show="themeStore.isDark"
            src="/images/togglers/sun.svg"
            class="icon sun-icon"
            width="1000"
            height="1000"
            :alt="$t('navbar.images.sun')"
        >
        <img
            v-show="themeStore.isLight"
            src="/images/togglers/moon.svg"
            class="icon"
            width="1000"
            height="1000"
            :alt="$t('navbar.images.moon')"
        >
    </button>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.change-theme-button {
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
    .sun-icon {
        // change black svg into white
        filter: invert(100%);
    }
}

@media (min-width: @first-breakpoint) {
    .change-theme-button {
        .icon {
            width: 2.5rem;
        }
    }
}
</style>
