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
        '@vite-pwa/nuxt',
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
        '/sitemap.xml': { prerender: true },
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
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
    gtag: {
        id: 'G-EV1076RNK2',
    },
    pwa: {
        registerType: 'autoUpdate',
        includeAssets: [],
        manifest: false,
        workbox: {
            cleanupOutdatedCaches: true,
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [],
        },
        devOptions: {
            enabled: false,
        },
    }
});
