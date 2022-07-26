import { useI18n } from 'vue-i18n';

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

    const changeLanguage = (selectedLanguage) => {
        localStorage.setItem('language', selectedLanguage)
        locale.value = selectedLanguage;

        // set lang attribute
        document.documentElement.setAttribute(
            'lang',
            selectedLanguage
        );
    };

    return { t, changeLanguage };
};
