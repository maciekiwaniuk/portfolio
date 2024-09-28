import { defineStore } from 'pinia';
import { getTheme } from '~/functions/getTheme';
import { updateBackgroundColorOnScrollbar } from '~/functions/updateBackgroundColorOnScrollbar';
import type { ThemeType } from '~/types/ThemeType';
import { DarkTheme, LightTheme } from '~/constants/app';
import { ThemeKey } from '~/constants/localStorage';

export const useThemeStore = defineStore('theme', {
    state: (): { theme: ThemeType } => ({
        theme: getTheme(),
    }),
    actions: {
        initTheme(): void {
            if (!import.meta.client) {
                return;
            }

            this.theme = getTheme();
        },
        toggle(): void {
            if (!import.meta.client) {
                return;
            }

            this.theme = (this.theme === DarkTheme) ? LightTheme : DarkTheme;

            localStorage.setItem(ThemeKey, this.theme);

            updateBackgroundColorOnScrollbar();
        },
    },
    getters: {
        isDark: (state) => state.theme === DarkTheme,
        isLight: (state) => state.theme === LightTheme,
    },
});
