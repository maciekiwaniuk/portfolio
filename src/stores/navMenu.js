import { defineStore } from 'pinia';

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
        }
    }
});
