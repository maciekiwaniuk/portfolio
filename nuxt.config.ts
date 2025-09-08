export default defineNuxtConfig({
    compatibilityDate: '2024-09-21',
    site: {
        url: 'https://maciekiwaniuk.pl',
    },
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
        '@nuxt/fonts',
    ],
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/robots.txt'],
            ignore: ['/'],
        },
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        minify: true,
    },
    routeRules: {
        '/': { ssr: true },
        '/sitemap.xml': { prerender: true },
        '/robots.txt': { prerender: true },
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
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    i18n: {
        strategy: 'no_prefix',
        langDir: 'locales',
        defaultLocale: 'en',
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
    fonts: {
        families: [
            {
                name: 'Lato',
                weights: [300, 400, 700],
            },
            {
                name: 'Caveat',
                weights: [400],
            },
        ],
    },
});
