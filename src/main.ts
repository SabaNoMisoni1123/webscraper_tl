import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { Vuetify } from 'vuetify/lib'

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();

pinia.use(createPersistedState());
const vuetify = Vuetify({});

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app')
