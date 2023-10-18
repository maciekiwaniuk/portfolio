import { setActivePinia, createPinia } from 'pinia';
import { useCursorStore } from '@/stores/cursor';
import { CursorHidden, CursorVisible } from '@/constants/app';

describe('Theme store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('has proper default values', () => {
        const cursorStore = useCursorStore();
        expect(cursorStore.hover).toBe(false);
        expect(cursorStore.visibility).toBe(CursorVisible);
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
        expect(cursorStore.visibility).toBe(CursorHidden);

        cursorStore.toggleVisibility();
        expect(cursorStore.visibility).toBe(CursorVisible);
    });
})
