import { useNavMenuStore } from '~/stores/navMenu';

export function addEventOnOpeningNavBySliding(): void {
    const navMenuStore = useNavMenuStore();

    const sizeOfSlideToTargetEvent: number = 140;

    let touchStartPosition: number = 0;
    let touchEndPosition: number = 0;
    let difference: number = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartPosition = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndPosition = e.changedTouches[0].screenX;
        difference = Math.abs(touchStartPosition - touchEndPosition);

        if (touchEndPosition < touchStartPosition && difference > sizeOfSlideToTargetEvent) {
            navMenuStore.open();
        }
        if (touchEndPosition > touchStartPosition && difference > sizeOfSlideToTargetEvent) {
            navMenuStore.close();
        }
    });
}
