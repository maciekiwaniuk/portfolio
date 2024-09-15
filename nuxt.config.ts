export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    typescript: {
        typeCheck: true,
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
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
    routeRules: {
        '/': { prerender: true },
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
