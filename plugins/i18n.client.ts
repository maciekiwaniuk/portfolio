import { useLanguageSwitcher } from '~/composables/useLanguageSwitcher';
import { EnglishLanguage, PolishLanguage } from '~/constants/app';
import { LanguageKey } from '~/constants/localStorage';
import type { LanguageType } from '~/types/LanguageType';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('vue:setup', () => {
        if (localStorage.getItem(LanguageKey) === null) {
            const userPreferredLanguage: LanguageType = navigator.language.match(/^pl\b/)
                ? PolishLanguage
                : EnglishLanguage;

            localStorage.setItem(LanguageKey, userPreferredLanguage);
        }

        const language: LanguageType = localStorage.getItem(LanguageKey) as LanguageType;
        if (language !== EnglishLanguage) {
            const changeLanguage = useLanguageSwitcher()!;
            changeLanguage(language);
            document.documentElement.lang = language;
        }
    });
});
