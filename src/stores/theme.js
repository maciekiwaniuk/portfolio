import { defineStore } from 'pinia';
import { getTheme } from '@/functions/getTheme';
import { setBackgroundColorOnScrollbar } from '@/functions/setBackgroundColorOnScrollbar';

/**
 * Handles themes - dark/light
 */
export const useThemeStore = defineStore('theme', {
    state: () => ({
        value: getTheme()
    }),
    actions: {
        toggle() {
            this.value == 'dark' ? this.value = 'light' : this.value = 'dark';

            localStorage.setItem('theme', this.value);

            setBackgroundColorOnScrollbar();
        }
    }
});
