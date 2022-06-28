/**
 * Returns currently selected theme if there is one
 */
const getTheme = () => {
    let theme = localStorage.getItem('theme');

    if (theme != null) return theme;
    return 'dark';
};

export default getTheme;
