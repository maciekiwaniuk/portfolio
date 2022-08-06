import { defineStore } from 'pinia';

/**
 * Handles animation on cursor
 */
export const useCursorStore = defineStore('cursor', {
    state: () => ({
        hover: false,
        visibility: localStorage.getItem('cursor-visibility') ?? 'visible'
    }),
    actions: {
        toggle() {
            this.hover = !this.hover;
        },
        setCursorToHover() {
            this.hover = true;
        },
        toggleVisibility() {
            if (this.visibility == 'visible') {
                this.visibility = 'hidden';
                localStorage.setItem('cursor-visibility', 'hidden');

            } else {
                this.visibility = 'visible';
                localStorage.setItem('cursor-visibility', 'visible');
            }
        }
    }
});
