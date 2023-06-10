import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme';

describe('Theme store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('has proper default value', () => {
        const themeStore = useThemeStore();
        expect(themeStore.theme).toBe('dark');
    });

    it('toggles theme', () => {
        const themeStore = useThemeStore();

        themeStore.toggle();
        expect(themeStore.theme).toBe('light');

        themeStore.toggle();
        expect(themeStore.theme).toBe('dark');
    });
})
