import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavMenuStore = defineStore('navMenu', () => {
    const opened = ref(false);

    const open = () => {
        opened.value = true;
    };

    const close = () => {
        opened.value = false;
    };

    return {
        opened,
        open,
        close,
    };
});
