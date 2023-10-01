import { useI18n } from 'vue-i18n';
import { LanguageType } from '@/types/LanguageType';
import { LanguageKey } from '@/constants/localStorage';

/**
 * locale => currently selected language
 *
 * @returns t => translations - t('key')
 * @returns changeLanguage() => changes currently selected language
 */
export const useLanguageSwitcher = () => {
    // t => translations
    // locale => currently selected language
    const { t, locale } = useI18n({
        useScope: 'global'
    });

    const changeLanguage = (selectedLanguage: LanguageType): void => {
        localStorage.setItem(LanguageKey, selectedLanguage);
        locale.value = selectedLanguage;

        document.documentElement.setAttribute(
            'lang',
            selectedLanguage
        );
    };

    return { t, changeLanguage };
};
