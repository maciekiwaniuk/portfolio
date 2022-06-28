<template>
    <button
        class="change-theme-button"
        v-cursor-hover
        @click="themeStore.toggle();"
    >
        <img
            class="sun-icon"
            src="@/assets/icons/sun.svg"
            v-show="themeStore.value == 'dark'"
        >
        <img
            class="moon-icon"
            src="@/assets/icons/moon.svg"
            v-show="themeStore.value == 'light'"
        >
    </button>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import { useCursorHover } from '@/directives/useCursorHover';

const themeStore = useThemeStore();

const vCursorHover = useCursorHover();
</script>

<style lang="less" scoped>
/* change theme button */
        /* icons */
.sun-icon {
    width: 2.5rem;
    // change black svg into white
    filter: invert(100%);
}
.moon-icon {
    width: 2.5rem;
}

/* change theme button */
.change-theme-button {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
</style>
