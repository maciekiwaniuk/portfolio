import { defineStore } from 'pinia';
import { getTheme } from '@/functions/getTheme';
import { updateBackgroundColorOnScrollbar } from '@/functions/updateBackgroundColorOnScrollbar';
import { ThemeType } from '@/types/ThemeType';

/**
 * Handles themes - dark/light
 */
export const useThemeStore = defineStore('theme', {
    state: (): { theme: ThemeType } => ({
        theme: getTheme()
    }),
    actions: {
        toggle(): void {
            this.theme === 'dark' ? this.theme = 'light' : this.theme = 'dark';

            localStorage.setItem('theme', this.theme);

            updateBackgroundColorOnScrollbar();
        }
    }
});
