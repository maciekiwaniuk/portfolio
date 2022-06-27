import { ref } from 'vue';

/**
 * @returns container => main div which contains application content
 * @returns theme => currently selected theme
 * @returns changeTheme() => changes currently selected theme
 */
const useThemeSwitcher = () => {
    const container = ref(null),
          cursor = ref(null);

    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'dark');

    let theme = ref(localStorage.getItem('theme'));

    const changeTheme = () => {
        theme.value == 'dark' ? theme.value = 'light' : theme.value = 'dark';

        localStorage.setItem('theme', theme.value);
    }

    return { container, cursor, theme, changeTheme };
};

export default useThemeSwitcher;
