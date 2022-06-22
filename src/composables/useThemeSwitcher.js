import { ref } from 'vue';

/**
 * @returns container => main div which contains application content
 * @returns theme => currently selected theme
 * @returns changeTheme() => changes currently selected theme
 */
const useThemeSwitcher = () => {
    const container = ref(null);

    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'dark');

    let theme = ref(localStorage.getItem('theme'));

    const changeTheme = () => {
        if (theme.value == 'dark') {
            container.value.classList.remove('dark-theme');
            container.value.classList.add('light-theme');
            theme.value = 'light';
        } else {
            container.value.classList.remove('light-theme');
            container.value.classList.add('dark-theme');
            theme.value = 'dark';
        }
        localStorage.setItem('theme', theme.value);
    }

    return { container, theme, changeTheme };
};

export default useThemeSwitcher;
