import { createApp } from 'vue';
import type { Pinia } from 'pinia';
import { createPinia } from 'pinia';
import { i18n } from './plugins/i18n';
import App from './App.vue';

/* register service worker */
import './plugins/registerServiceWorker';

const pinia: Pinia = createPinia();

const app = createApp(App);

app
    .use(i18n)
    .use(pinia)
    .mount('#app');
