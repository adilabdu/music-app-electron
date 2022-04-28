import { useStorage } from "@vueuse/core";

const state = {
    allPlaylists: localStorage.getItem('allPlaylists') || []
}

const actions = {
    createPlaylist(context, payload) {
        console.log('3. Inside Vuex action: new Playlist object passed as payload: ', payload)
        context.commit('createPlaylist', payload)
    }
}

const mutations = {
    createPlaylist(state, payload) {
        state.allPlaylists.push(payload)
        localStorage.setItem('allPlaylists', state.allPlaylists)
        console.log('4. Inside Vuex mutation: new Playlist object pushed to list of playlists: ', state.allPlaylists)
    }
}

export default { state, actions, mutations }