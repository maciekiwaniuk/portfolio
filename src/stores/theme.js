import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            value: localStorage.getItem('theme')
        }
    },
    actions: {
        toggle() {
            this.value == 'dark' ? this.value = 'light' : this.value = 'dark';

            localStorage.setItem('theme', this.value);
        }
    }
});
