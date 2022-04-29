
const state = {
    allPlaylists: localStorage.getItem('allPlaylists') || []
}

const actions = {
    createPlaylist(context, payload) {
        context.commit('createPlaylist', payload)
    }
}

const mutations = {
    createPlaylist(state, payload) {
        state.allPlaylists.push(payload)
        localStorage.setItem('allPlaylists', state.allPlaylists)
    }
}

export default { state, actions, mutations }