<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useCursorHover } from '@/directives/useCursorHover';
import { useThemeStore } from '@/stores/theme';
import { useCursorStore } from '@/stores/cursor';
import { CursorVisible, DarkTheme, LightTheme } from '@/constants/app';

const vCursorHover = useCursorHover();

const themeStore = useThemeStore();

const cursorStore = useCursorStore();

</script>

<template>
    <div
        aria-hidden="true"
        class="cursor"
        v-show="cursorStore.visibility === CursorVisible"
        :class="{ 'cursor-dark-theme': themeStore.theme === DarkTheme,
                  'cursor-light-theme': themeStore.theme === LightTheme,
                  'hover': cursorStore.hover }"
    ></div>

    <button
        class="toggle-visibility-of-cursor-button"
        v-cursor-hover
        @click="cursorStore.toggleVisibility();"
        aria-label="Cursor switch"
    >
        <Icon
            icon="clarity:cursor-hand-click-line"
            width="30"
        />
    </button>
</template>

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

.toggle-visibility-of-cursor-button {
    display: none;
    position: fixed;
    bottom: 0.6rem;
    right: 0.7rem;
    width: 3rem;
    height: 3rem;
    padding-left: 0.1rem;
    border-radius: 50%;
    border: solid @blue-color 0.2rem;

    cursor: pointer;
}

@media (min-width: @footer-icons-breakpoint) {
    .cursor {
        display: block;
    }
    .toggle-visibility-of-cursor-button {
        display: block;
    }
}

.cursor-dark-theme {
    border-color: #dark[cursor-color];
}

.cursor-light-theme {
    border-color: #light[cursor-color];
}

</style>
