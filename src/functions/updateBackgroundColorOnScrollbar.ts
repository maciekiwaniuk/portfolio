import { ThemeType } from '@/types/ThemeType';

/**
 * Updates background color on scrollbar based on theme value from localStorage
 */
export const updateBackgroundColorOnScrollbar = (): void => {
    const selectedTheme: ThemeType = localStorage.getItem('theme') as ThemeType ?? 'dark';

    const backgroundColor: string = getComputedStyle(document.body)
        .getPropertyValue(`--scrollbar-${selectedTheme}-theme-background-color`);

    if (document && document.styleSheets[0]) {
        document.styleSheets[0].addRule(
            '::-webkit-scrollbar-track',
            `background-color: ${backgroundColor};`
        );
    }
};
