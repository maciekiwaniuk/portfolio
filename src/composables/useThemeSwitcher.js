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

        if (theme.value == 'dark') {
            // container
            container.value.classList.remove('dark-theme');
            container.value.classList.add('light-theme');

            // cursor
            cursor.value.classList.remove('cursor-dark-theme');
            cursor.value.classList.add('cursor-light-theme');

            theme.value = 'light';
        } else {
            // container
            container.value.classList.remove('light-theme');
            container.value.classList.add('dark-theme');

            // cursor
            cursor.value.classList.remove('cursor-light-theme');
            cursor.value.classList.add('cursor-dark-theme');

            theme.value = 'dark';
        }
        localStorage.setItem('theme', theme.value);
    }

    return { container, cursor, theme, changeTheme };
};

export default useThemeSwitcher;
