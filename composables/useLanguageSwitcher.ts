import { useI18n } from 'vue-i18n';
import { LanguageKey } from '~/constants/localStorage';
import type { LanguageType } from '~/types/LanguageType';

export function useLanguageSwitcher() {
    if (!import.meta.client) {
        return;
    }

    const { setLocale } = useI18n();

    return function (selectedLanguage: LanguageType) {
        localStorage.setItem(LanguageKey, selectedLanguage);
        setLocale(selectedLanguage);

        document.documentElement.setAttribute(
            'lang',
            selectedLanguage,
        );
    };
}
