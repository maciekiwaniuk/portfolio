import { createI18n } from 'vue-i18n';

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
const loadLocaleMessages = () => {
    const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages: any = {};
    locales.keys().forEach(key => {
        const matched: any = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key).default;
        }
    })
    return messages;
}

// sets default language
if (localStorage.getItem('language') === null) {
    // checks which language is preferred by the user
    let userPreferredLanguage: string = 'pl';
    if (navigator.language.match(/^en\b/)) {
        // user's preferred language is english
        userPreferredLanguage = 'en';
    }
    localStorage.setItem('language', userPreferredLanguage);
}
let selectedLanguage: string = localStorage.getItem('language')!;

const i18n =  createI18n({
    legacy: false,
    locale: selectedLanguage,
    fallbackLocale: selectedLanguage,
    messages: loadLocaleMessages()
});

export { i18n };
