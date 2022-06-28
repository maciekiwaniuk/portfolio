<template>
    <div
        class="cursor"
        :class="{ 'cursor-dark-theme' : themeStore.value == 'dark',
                  'cursor-light-theme' : themeStore.value == 'light',
                  'cursor-hover-dark-theme' : (themeStore.value == 'dark' && cursorStore.hover),
                  'cursor-hover-light-theme' : (themeStore.value == 'light' && cursorStore.hover) }"
    ></div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

const themeStore = useThemeStore();

const cursorStore = useCursorStore();
</script>

<style lang="less" scoped>
.cursor {
    z-index: 1000;
}
</style>
