import type { Language } from '~/types/Language';
import { EnglishLanguage, PolishLanguage } from '~/constants/app';
import { LanguageKey } from '~/constants/localStorage';

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
            const changeLanguage = useLanguageChanger()!;
            changeLanguage(language);
            document.documentElement.lang = language;
        }
    });
});
