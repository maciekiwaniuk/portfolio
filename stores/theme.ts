import { defineStore } from 'pinia';
import { ThemeKey } from '~/constants/localStorage';
import { DarkTheme, LightTheme } from '~/constants/theme';
import { updateBackgroundColorOnScrollbar } from '~/functions/updateBackgroundColorOnScrollbar';
import type { ThemeType } from '~/types/ThemeType';

export const useThemeStore = defineStore('theme', {
    state: (): { theme: ThemeType } => ({
        theme: DarkTheme,
    }),
    actions: {
        initTheme(): void {
            if (!import.meta.client) {
                return;
            }

            this.theme = localStorage.getItem(ThemeKey) as ThemeType
            ?? DarkTheme;
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
        isDark: state => state.theme === DarkTheme,
        isLight: state => state.theme === LightTheme,
    },
});
