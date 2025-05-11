import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import vuetify from './vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();

pinia.use(createPersistedState());

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app')
