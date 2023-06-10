import { setActivePinia, createPinia } from 'pinia'
import { useCursorStore } from '@/stores/cursor';

describe('Theme store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('has proper default values', () => {
        const cursorStore = useCursorStore();
        expect(cursorStore.hover).toBe(false);
        expect(cursorStore.visibility).toBe('visible');
    });

    it('toggles hover', () => {
        const cursorStore = useCursorStore();

        cursorStore.toggle();
        expect(cursorStore.hover).toBe(true);

        cursorStore.toggle();
        expect(cursorStore.hover).toBe(false);
    });

    it('toggles visibility', () => {
        const cursorStore = useCursorStore();

        cursorStore.toggleVisibility();
        expect(cursorStore.visibility).toBe('hidden');

        cursorStore.toggleVisibility();
        expect(cursorStore.visibility).toBe('visible');
    });
})
