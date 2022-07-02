
const setBackgroundColorOnScrollbar = () => {
    // user is on mobile, so background color on scrollbar is useless
    if (navigator.userAgentData.mobile) return;

    let selectedTheme = localStorage.getItem('theme');

    let backgroundColor = getComputedStyle(document.body)
        .getPropertyValue(`--scrollbar-${selectedTheme}-theme-background-color`);

    document.styleSheets[0].addRule(
        '::-webkit-scrollbar-track',
        `background-color: ${backgroundColor};`
    );
}

export default setBackgroundColorOnScrollbar;
