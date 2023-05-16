import { ThemeType } from '@/types/ThemeType';

/**
 * Returns currently selected theme if there is one
 */
export const getTheme = (): ThemeType => {
    return localStorage.getItem('theme') as ThemeType ?? 'dark';
};
