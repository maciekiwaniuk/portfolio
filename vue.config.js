const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/portfolio/',
    pluginOptions: {
        // https://vue-i18n.intlify.dev/guide/advanced/composition.html
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true
        }
    },
    // https://cli.vuejs.org/core-plugins/pwa.html#configuration
    pwa: {
        workboxPluginMode: 'GenerateSW',
        manifestPath: 'manifest.json',
        name: 'Maciek Iwaniuk',
        themeColor: '#00b3ff',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    }
});
