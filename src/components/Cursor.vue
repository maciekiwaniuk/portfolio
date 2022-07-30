<template>
    <div
        aria-hidden="true"
        class="cursor"
        :class="{ 'cursor-dark-theme': themeStore.value == 'dark',
                  'cursor-light-theme': themeStore.value == 'light',
                  'hover': cursorStore.hover }"
    ></div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.cursor {
    display: none;
    position: fixed;
    width: 2rem;
    height: 2rem;
    border-width: 0.15rem;
    border-style: solid;
    border-radius: 50%;
    pointer-events: none;
    user-select: none;
    z-index: 1000;
    transform: translate(-50%, -50%);
    transform-origin: 100% 100%;

    transition: border-color ease @theme-switch-time,
                transform ease @hover-time;
}
.hover {
    transform: scale(2);
}

@media (min-width: @first-breakpoint) {
    .cursor {
        display: block;
    }
}

/* colors */
.cursor-dark-theme {
    border-color: #dark[cursor-color];
}

.cursor-light-theme {
    border-color: #light[cursor-color];
}

</style>
