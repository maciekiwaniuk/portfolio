import { defineStore } from 'pinia';

export const useCursorStore = defineStore('cursor', {
    state: () => {
        return {
            hover: false
        }
    },
    actions: {
        toggle() {
            this.hover = !this.hover;
        }
    }
});
