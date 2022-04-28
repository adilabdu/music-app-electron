import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'

// @ts-ignore
import router from './router/index'
// @ts-ignore
import store from './store/index'

const app = createApp(App);

app.use(router).use(store).mount('#app');
