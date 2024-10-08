import { defineStore } from 'pinia';

export const useNavMenuStore = defineStore('navMenu', {
    state: (): { opened: boolean } => ({
        opened: false,
    }),
    actions: {
        open(): void {
            this.opened = true;
        },
        close(): void {
            this.opened = false;
        },
    },
});
