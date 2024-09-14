import type { LanguageType } from '~/types/LanguageType';
import { LanguageKey } from '~/constants/localStorage';

export function useLanguageSwitcher() {
    if (!import.meta.client) {
        return;
    }

    const { locale } = useI18n();

    return function (selectedLanguage: LanguageType) {
        localStorage.setItem(LanguageKey, selectedLanguage);
        locale.value = selectedLanguage;

        document.documentElement.setAttribute(
            LanguageKey,
            selectedLanguage,
        );
    };
}
