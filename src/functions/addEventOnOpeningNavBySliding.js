import { useNavMenuStore } from '@/stores/navMenu';

/**
 * Adds possibility of toggling navigation by sliding
 */
export const addEventOnOpeningNavBySliding = () => {
    const navMenuStore = useNavMenuStore();

    let touchStartPosition = 0,
        touchEndPosition = 0;

    document.addEventListener('touchstart', e => {
        touchStartPosition = e.changedTouches[0].screenX;
    })

    document.addEventListener('touchend', e => {
        touchEndPosition = e.changedTouches[0].screenX;

        if (touchEndPosition < touchStartPosition) {
            navMenuStore.open();
        }
        if (touchEndPosition > touchStartPosition) {
            navMenuStore.close();
        }
    })
}
