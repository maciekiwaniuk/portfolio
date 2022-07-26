import { useCursorStore } from '@/stores/cursor';

/**
 * Handles animation on cursor
 */
export const useCursorHover = () => {
    const cursorStore = useCursorStore();

    return {
        mounted: (el, binding) => {
            el.addEventListener('mouseenter', () => {
                cursorStore.toggle();
            });
            el.addEventListener('mouseleave', () => {
                cursorStore.toggle();
            });
        }
    }
}
