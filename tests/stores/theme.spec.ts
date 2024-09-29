import { DarkTheme, LightTheme } from '~/../constants/app';
import { useThemeStore } from '~/../stores/theme';
import { createPinia, setActivePinia } from 'pinia';

describe('theme store', () => {
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
});
