import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ThemeKey } from '~/constants/localStorage';
import { DarkTheme, LightTheme } from '~/constants/theme';
import { updateBackgroundColorOnScrollbar } from '~/functions/updateBackgroundColorOnScrollbar';
import type { ThemeType } from '~/types/ThemeType';

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<ThemeType>(DarkTheme);

    const initTheme = () => {
        if (!import.meta.client) {
            return;
        }

        theme.value = (localStorage.getItem(ThemeKey) as ThemeType) ?? DarkTheme;
    };

    const toggle = () => {
        if (!import.meta.client) {
            return;
        }

        theme.value = theme.value === DarkTheme ? LightTheme : DarkTheme;
        localStorage.setItem(ThemeKey, theme.value);
        updateBackgroundColorOnScrollbar();
    };

    const isDark = computed(() => theme.value === DarkTheme);
    const isLight = computed(() => theme.value === LightTheme);

    return {
        theme,
        initTheme,
        toggle,
        isDark,
        isLight,
    };
});
