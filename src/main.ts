import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState());

app.use(pinia)
app.use(router)
app.use(VueCookies)

app.mount('#app')
