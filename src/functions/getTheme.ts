import type { ThemeType } from '@/types/ThemeType';
import { ThemeKey } from '@/constants/localStorage';
import { DarkTheme } from '@/constants/app';

/**
 * Returns currently selected theme if there is one
 */
export function getTheme(): ThemeType {
    return localStorage.getItem(ThemeKey) as ThemeType ?? DarkTheme;
}
