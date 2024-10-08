import { useCursorStore } from '~/stores/cursor';

export function useCursorHover() {
    const cursorStore = useCursorStore();

    return {
        mounted: (element: HTMLElement): void => {
            element.addEventListener('mouseenter', (): void => {
                cursorStore.toggle();
            });
            element.addEventListener('mouseleave', (): void => {
                cursorStore.toggle();
            });
        },
    };
}
