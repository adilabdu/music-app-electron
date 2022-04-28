import { createStore } from "vuex";

import playlists from './modules/playlists.js'
import player from './modules/player.js'

export default createStore({
    modules: {
        playlists,
        player
    }
})