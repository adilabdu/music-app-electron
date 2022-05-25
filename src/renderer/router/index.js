import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/index.vue'
import Listen from '../pages/listen.vue'
import Browse from '../pages/browse.vue'

import ArtistLayout from "../pages/artists.vue"

import AlbumLayout from '../pages/albums/index.vue'
import Albums from '../pages/albums/all.vue'
import Album from '../pages/albums/single.vue'

import PlaylistLayout from '../pages/playlists/index.vue'
import Playlists from '../pages/playlists/all.vue'
import Playlist from '../pages/playlists/single.vue'

import Tracklist from '../views/Tracklist.vue'

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
        component: ArtistLayout,
    },
    {
        path: '/albums',
        name: 'AlbumLayout',
        component: AlbumLayout,
        children: [
            {
                path: '',
                name: 'Albums',
                component: Albums
            },
            {
                path: ':id',
                name: 'Album',
                component: Album
            }
        ]
    },
    {
        path: '/playlists',
        name: 'PlaylistLayout',
        component: PlaylistLayout,
        children: [
            {
                path: '',
                name: 'Playlists',
                component: Playlists
            },
            {
                path: ':id',
                name: 'Playlist',
                component: Playlist
            }
        ]
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
