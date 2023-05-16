/* instance of app */
import { createApp } from 'vue';
import App from './App.vue';
const app: any = createApp(App);

/* import i18n plugin for translations */
import i18n from './plugins/i18n';
app.use(i18n);

/* import pinia for state management */
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

/* import AOS library for animations on scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';
const options = {
    disable: () => {
        let maxWidth: number = 1000;
        return window.innerWidth < maxWidth;
    },
    once: true,
    duration: 700
};
app.AOS = AOS.init(options);

/* register service worker */
import './plugins/registerServiceWorker';

/* mount app */
app.mount('#app');

