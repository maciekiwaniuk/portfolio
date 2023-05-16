import { defineStore, StoreDefinition } from 'pinia';
import { getTheme } from '@/functions/getTheme';
import { setBackgroundColorOnScrollbar } from '@/functions/setBackgroundColorOnScrollbar';
import { ThemeType } from '@/types/ThemeType';

/**
 * Handles themes - dark/light
 */
export const useThemeStore = defineStore('theme', {
    state: (): { value: ThemeType } => ({
        value: getTheme() as ThemeType
    }),
    actions: {
        toggle(): void {
            this.value == 'dark' ? this.value = 'light' : this.value = 'dark';

            localStorage.setItem('theme', this.value);

            setBackgroundColorOnScrollbar();
        }
    }
});
