import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher';
import { EnglishLanguage, PolishLanguage } from '~/constants/app';
import { LanguageKey } from '~/constants/localStorage';
import type { Language } from '~/types/Language';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('vue:setup', () => {
        if (localStorage.getItem(LanguageKey) === null) {
            const userPreferredLanguage: Language = navigator.language.match(/^pl\b/)
                ? PolishLanguage
                : EnglishLanguage;

            localStorage.setItem(LanguageKey, userPreferredLanguage);
        }

        const language: Language = localStorage.getItem(LanguageKey) as Language;
        if (language !== EnglishLanguage) {
            const changeLanguage = useLanguageSwitcher()!;
            changeLanguage(language);
            document.documentElement.lang = language;
        }
    });
});
