/**
 * Sets background color on scrollbar
 */
export const setBackgroundColorOnScrollbar = () => {
    let selectedTheme = localStorage.getItem('theme') ?? 'dark';

    let backgroundColor = getComputedStyle(document.body)
        .getPropertyValue(`--scrollbar-${selectedTheme}-theme-background-color`);

    document.styleSheets[0].addRule(
        '::-webkit-scrollbar-track',
        `background-color: ${backgroundColor};`
    );
}
