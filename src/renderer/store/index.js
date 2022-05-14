import { createStore } from "vuex";

import playlists from './modules/playlists.js'
import album from './modules/album'
import player from './modules/player.js'
import ui from './modules/ui.js'
import menu from './modules/menu.js'

export default createStore({
    modules: {
        playlists,
        album,
        player,
        ui,
        menu
    }
})