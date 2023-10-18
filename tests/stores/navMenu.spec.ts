import { setActivePinia, createPinia } from 'pinia';
import { useNavMenuStore } from '@/stores/navMenu';

describe('Nav menu store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('has proper default value', () => {
        const navMenuStore = useNavMenuStore();
        expect(navMenuStore.opened).toBe(false);
    });

    it('opens', () => {
        const navMenuStore = useNavMenuStore();
        navMenuStore.open();
        expect(navMenuStore.opened).toBe(true);
    });

    it('closes', () => {
        const navMenuStore = useNavMenuStore();
        navMenuStore.open();
        navMenuStore.close();
        expect(navMenuStore.opened).toBe(false);
    });
})
