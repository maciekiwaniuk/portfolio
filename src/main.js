/* instance of app */
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

/* import i18n plugin for translations */
import i18n from './i18n';
import './registerServiceWorker';
app.use(i18n);

/* import pinia for state management */
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

/* import AOS library for animations on scroll */
import AOS from 'aos';
import 'aos/dist/aos.css';
app.AOS = new AOS.init();

/* mount app */
app.mount('#app');

