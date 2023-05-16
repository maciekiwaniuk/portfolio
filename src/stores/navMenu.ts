import { defineStore } from 'pinia';

/**
 * Handles nav menu
 */
export const useNavMenuStore = defineStore('navMenu', {
    state: (): { opened: boolean } => ({
        opened: false
    }),
    actions: {
        open(): void {
            document.body.setAttribute('overflow', 'hidden');
            this.opened = true;
        },
        close(): void {
            document.body.setAttribute('overflow', 'visible');
            this.opened = false;
        }
    }
});
