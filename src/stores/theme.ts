import { defineStore } from 'pinia';
import { getTheme } from '@/functions/getTheme';
import { updateBackgroundColorOnScrollbar } from '@/functions/updateBackgroundColorOnScrollbar';
import { ThemeType } from '@/types/ThemeType';
import { DarkTheme, LightTheme } from '@/constants/app';
import { ThemeKey } from '@/constants/localStorage';

export const useThemeStore = defineStore('theme', {
    state: (): { theme: ThemeType } => ({
        theme: getTheme()
    }),
    actions: {
        toggle(): void {
            this.theme === DarkTheme
                ? this.theme = LightTheme
                : this.theme = DarkTheme;

            localStorage.setItem(ThemeKey, this.theme);

            updateBackgroundColorOnScrollbar();
        }
    }
});
