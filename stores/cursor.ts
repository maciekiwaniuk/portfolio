import { defineStore } from 'pinia';
import { ref } from 'vue';
import { CursorHidden, CursorVisible } from '~/constants/cursor';
import { CursorVisibilityKey } from '~/constants/localStorage';
import type { CursorVisibilityType } from '~/types/CursorVisibilityType';

export const useCursorStore = defineStore('cursor', () => {
    const hover = ref(false);
    const visibility = ref<CursorVisibilityType>(CursorHidden);

    const initCursor = () => {
        if (!import.meta.client) {
            return;
        }

        visibility.value = (localStorage.getItem(CursorVisibilityKey) as CursorVisibilityType) ?? CursorVisible;
    };

    const toggle = () => {
        hover.value = !hover.value;
    };

    const toggleVisibility = () => {
        if (!import.meta.client) {
            return;
        }

        visibility.value = visibility.value === CursorVisible ? CursorHidden : CursorVisible;
        localStorage.setItem(CursorVisibilityKey, visibility.value);
    };

    return {
        hover,
        visibility,
        initCursor,
        toggle,
        toggleVisibility,
    };
});
