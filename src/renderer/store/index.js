import { createStore } from "vuex";

import playlists from './modules/playlists.js'

export default createStore({
    modules: {
        playlists
    }
})