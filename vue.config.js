import { defineConfig } from '@vue/cli-service';

export default defineConfig({
    transpileDependencies: true,
    publicPath: '/',
    pluginOptions: {
        // https://vue-i18n.intlify.dev/guide/advanced/composition.html
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
        },
    },
    // https://cli.vuejs.org/core-plugins/pwa.html#configuration
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
        },
        manifestPath: 'manifest.json',
        name: 'Maciek Iwaniuk',
        themeColor: '#00b3ff',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    },
});
