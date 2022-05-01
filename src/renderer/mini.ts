import { createApp } from 'vue'
import App from './MiniApp.vue'
import './assets/css/main.css'

// @ts-ignore
import store from './store/index'

const mini = createApp(App);

mini.use(store).mount('#app');
