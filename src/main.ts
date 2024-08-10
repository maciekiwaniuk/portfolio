import { createApp } from 'vue';
import type { Pinia } from 'pinia';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { i18n } from './plugins/i18n';
import App from './App.vue';

/* register service worker */
import './plugins/registerServiceWorker';

const pinia: Pinia = createPinia();

const app = createApp(App);

/* import AOS library for animations on scroll */
const aosOptions = {
    disable: (): boolean => {
        const maxWidth: number = 1000;
        return window.innerWidth < maxWidth;
    },
    once: true as boolean,
    duration: 700 as number,
};
// @ts-expect-error currently no way around
app.AOS = AOS.init(aosOptions);

app
    .use(i18n)
    .use(pinia)
    .mount('#app');
