const state = {
    currentAlbum: null
}

const actions = {
    setCurrentAlbum(context, payload) {
        context.commit('setCurrentAlbum', payload)
    }
}

const mutations = {
    setCurrentAlbum(state, payload) {
        state.currentAlbum = payload
    }
}

export default { state, actions, mutations }