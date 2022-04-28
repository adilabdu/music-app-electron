import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/index.vue'
import Listen from '../pages/listen.vue'
import Browse from '../pages/browse.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/listen',
        name: 'Listen',
        component: Listen,
    },
    {
        path: '/browse',
        name: 'Browse',
        component: Browse,
    },
    {
        path: '/radio',
        name: 'Radio',
        component: Browse,
    },
    {
        path: '/recently-added',
        name: 'Recent',
        component: Browse,
    },
    {
        path: '/artists',
        name: 'Artists',
        component: Browse,
    },
    {
        path: '/albums',
        name: 'Albums',
        component: Browse,
    },
    {
        path: '/songs',
        name: 'Songs',
        component: Browse,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
