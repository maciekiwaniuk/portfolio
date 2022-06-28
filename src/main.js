import { createApp } from 'vue'
import App from './App.vue'

/* import i18n plugin for translations */
import i18n from './i18n'
import './registerServiceWorker'

/* instance of app */
const app = createApp(App);

/* use i18n plugin */
app.use(i18n);

/* mount app */
app.mount('#app');

