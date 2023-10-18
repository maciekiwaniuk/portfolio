import { setActivePinia, createPinia } from 'pinia';
import { useThemeStore } from '@/stores/theme';
import { DarkTheme, LightTheme } from '@/constants/app';

describe('Theme store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('has proper default value', () => {
        const themeStore = useThemeStore();
        expect(themeStore.theme).toBe(DarkTheme);
    });

    it('toggles theme', () => {
        const themeStore = useThemeStore();

        themeStore.toggle();
        expect(themeStore.theme).toBe(LightTheme);

        themeStore.toggle();
        expect(themeStore.theme).toBe(DarkTheme);
    });
})
