export default defineNuxtConfig({
    compatibilityDate: '2024-09-21',
    devtools: {
        enabled: false,
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/device',
        '@nuxt/image',
        '@nuxt/icon',
        'nuxt-gtag',
        '@pinia/nuxt',
    ],
    nitro: {
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        minify: true,
    },
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
                    href: '/images/favicon.ico',
                },
            ],
        },
    },
    routeRules: {
        '/': { prerender: true },
        '/sitemap.xml': { prerender: true },
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    i18n: {
        strategy: 'no_prefix',
        langDir: 'locales',
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
    gtag: {
        id: 'G-EV1076RNK2',
    },
});
