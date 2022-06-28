import { createApp } from 'vue'
import App from './App.vue'

/* import i18n plugin for translations */
import i18n from './i18n'
import './registerServiceWorker'

/* import pinia */
import { createPinia } from 'pinia';
const pinia = createPinia();

/* instance of app */
const app = createApp(App);

app.use(i18n)
    .use(pinia);

/* mount app */
app.mount('#app');

