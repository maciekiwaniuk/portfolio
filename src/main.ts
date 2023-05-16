/* instance of app */
import { createApp } from 'vue';
import { Pinia, createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from './plugins/i18n';
import App from './App.vue';

/* register service worker */
import './plugins/registerServiceWorker';

const pinia: Pinia = createPinia();

const app: any = createApp(App);

/* import AOS library for animations on scroll */
const aosOptions = {
    disable: (): boolean => {
        let maxWidth: number = 1000;
        return window.innerWidth < maxWidth;
    },
    once: true as boolean,
    duration: 700 as number
};
app.AOS = AOS.init(aosOptions);

app
    .use(i18n)
    .use(pinia)
    .mount('#app');

