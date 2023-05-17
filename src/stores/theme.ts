import { defineStore } from 'pinia';
import { getTheme } from '@/functions/getTheme';
import { setBackgroundColorOnScrollbar } from '@/functions/setBackgroundColorOnScrollbar';
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

            setBackgroundColorOnScrollbar();
        }
    }
});
