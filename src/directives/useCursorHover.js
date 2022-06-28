import { useCursorStore } from '@/stores/cursor';

export const useCursorHover = () => {
    const cursorStore = useCursorStore();
    return (el, binding) => {
        el.addEventListener('mouseenter', () => {
            console.log('test')
            cursorStore.toggle();
        });
        el.addEventListener('mouseleave', () => {
            cursorStore.toggle();
        });
    }
}
