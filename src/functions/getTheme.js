/**
 * Returns currently selected theme if there is one
 */
export const getTheme = () => {
    let theme = localStorage.getItem('theme') ?? 'dark';

    return theme;
};
