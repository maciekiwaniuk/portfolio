import { defineStore } from 'pinia';

/**
 * Handles nav menu
 */
export const useNavMenuStore = defineStore('navMenu', {
    state: () => ({
        opened: false
    }),
    actions: {
        toggle() {
            if (this.opened) {
                document.body.style = 'overflow: visible;';
            } else {
                document.body.style = 'overflow: hidden;';
            }

            this.opened = !this.opened;
        },
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
