import { defineStore } from 'pinia';

/**
 * Handles nav menu
 */
export const useNavMenuStore = defineStore('navMenu', {
    state: () => ({
        opened: false
    }),
    actions: {
        open() {
            document.body.style = 'overflow: hidden;';
            this.opened = true;
        },
        close() {
            document.body.style = 'overflow: visible;';
            this.opened = false;
        }
    }
});
