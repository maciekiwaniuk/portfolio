import { EnglishLanguage } from '~/constants/language';
import { LanguageKey } from '~/constants/localStorage';

export function updateLangAttribute(): void {
    document.documentElement.setAttribute(
        'lang',
        localStorage.getItem(LanguageKey) ?? EnglishLanguage,
    );
}
