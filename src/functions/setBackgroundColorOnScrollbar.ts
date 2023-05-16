import { ThemeType } from '@/types/ThemeType';

/**
 * Sets background color on scrollbar
 */
export const setBackgroundColorOnScrollbar = (): void => {
    let selectedTheme: ThemeType = localStorage.getItem('theme') as ThemeType ?? 'dark';

    let backgroundColor: string = getComputedStyle(document.body)
        .getPropertyValue(`--scrollbar-${selectedTheme}-theme-background-color`);

    document.styleSheets[0].addRule(
        '::-webkit-scrollbar-track',
        `background-color: ${backgroundColor};`
    );
}
