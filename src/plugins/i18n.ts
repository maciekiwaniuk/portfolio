import { createI18n } from 'vue-i18n';
import { EnglishLanguage, PolishLanguage } from '@/constants/app';
import { LanguageType } from '@/types/LanguageType';
import { LanguageKey } from '@/constants/localStorage';

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
const loadLocaleMessages = () => {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};
    locales.keys().forEach(key => {
        const matched: any = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            // @ts-ignore
            messages[locale] = locales(key).default;
        }
    });
    return messages;
};

if (localStorage.getItem(LanguageKey) === null) {
    const userPreferredLanguage: LanguageType = navigator.language.match(/^en\b/)
        ? EnglishLanguage
        : PolishLanguage;

    localStorage.setItem(LanguageKey, userPreferredLanguage);
}
const selectedLanguage: string = localStorage.getItem(LanguageKey)!;

const i18n =  createI18n({
    legacy: false,
    locale: selectedLanguage,
    fallbackLocale: selectedLanguage,
    messages: loadLocaleMessages()
});

export { i18n };
