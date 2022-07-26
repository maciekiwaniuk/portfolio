import { defineStore } from 'pinia';

/**
 * Handles animation on cursor
 */
export const useCursorStore = defineStore('cursor', {
    state: () => ({
        hover: false
    }),
    actions: {
        toggle() {
            this.hover = !this.hover;
        },
        setCursorToHover() {
            this.hover = true;
        }
    }
});
