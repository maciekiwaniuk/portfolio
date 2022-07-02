import { ref } from 'vue';

/**
 * @returns navbarShow => flag which indicates if nav menu is opened
 * @returns toggleNavMenu() => toggles navbarShow
 */
const useNavMenuToggler = () => {
    let navbarShow = ref(false);

    const toggleNavMenu = () => {
        if (navbarShow.value) {
            document.body.style = 'overflow: visible;';
        } else {
            document.body.style = 'overflow: hidden;';
        }
        navbarShow.value = !navbarShow.value;
    };

    return { navbarShow, toggleNavMenu };
};

export default useNavMenuToggler;
