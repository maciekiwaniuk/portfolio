/**
 * Returns currently selected theme if there is one
 */
const getTheme = () => {
    let theme = localStorage.getItem('theme') ?? 'dark';

    return theme;
};

export default getTheme;
