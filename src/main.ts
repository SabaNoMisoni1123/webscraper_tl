import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import { useDbDataStore } from '@/stores/dbStore'

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState());

app.use(pinia)
app.use(router)

app.mount('#app')
