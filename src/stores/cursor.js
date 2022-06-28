import { defineStore } from 'pinia';

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
