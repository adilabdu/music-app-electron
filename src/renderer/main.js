import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'

import router from './router/index'
import store from './store/index.js'

// database tables schema
window.api.initDB()

// vue app initialize
const app = createApp(App);
app.use(router).use(store).mount('#app');
