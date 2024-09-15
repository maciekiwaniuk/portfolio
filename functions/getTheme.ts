import type { ThemeType } from '~/types/ThemeType';
import { ThemeKey } from '~/constants/localStorage';
import { DarkTheme } from '~/constants/app';

export function getTheme(): ThemeType {
    return localStorage.getItem(ThemeKey) as ThemeType ?? DarkTheme;
}
