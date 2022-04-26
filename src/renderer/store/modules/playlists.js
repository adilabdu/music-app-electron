const state = {
    allPlaylists: []
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
        console.log('4. Inside Vuex mutation: new Playlist object pushed to list of playlists: ', state.allPlaylists)
    }
}

export default { state, actions, mutations }