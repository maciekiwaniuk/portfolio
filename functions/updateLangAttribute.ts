import { LanguageKey } from '~/constants/localStorage';
import { EnglishLanguage } from '~/constants/app';

export function updateLangAttribute(): void {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem(LanguageKey) ?? EnglishLanguage,
    );
}
