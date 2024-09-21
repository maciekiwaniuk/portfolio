export default defineNuxtConfig({
    compatibilityDate: '2024-09-21',
    devtools: {
        enabled: true,
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/device',
        '@nuxt/image',
        '@nuxt/icon',
        '@pinia/nuxt',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'icon',
                    href: '/img/favicon.ico',
                },
            ],
        },
    },
    i18n: {
        strategy: 'no_prefix',
        langDir: 'translations',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'pl',
                name: 'Polski',
                file: 'pl.json',
            },
        ],
    },
});
