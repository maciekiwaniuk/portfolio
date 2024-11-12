import { ThemeKey } from '~/constants/localStorage';
import { DarkTheme } from '~/constants/theme';
import type { ThemeType } from '~/types/ThemeType';

export function updateBackgroundColorOnScrollbar(): void {
    const selectedTheme: ThemeType = localStorage.getItem(ThemeKey) as ThemeType ?? DarkTheme;

    const backgroundColor: string = getComputedStyle(document.body)
        .getPropertyValue(`--scrollbar-${selectedTheme}-theme-background-color`);

    if (document && document.styleSheets[0]) {
        document.styleSheets[0].addRule(
            '::-webkit-scrollbar-track',
            `background-color: ${backgroundColor};`,
        );
    }
}
