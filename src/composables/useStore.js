import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => {
        return {
            cursorHover: false
        }
    },
    actions: {
        toggleCursorHover() {
            this.cursorHover = !this.cursorHover;
        }
    }
});
