const state = {
    contextMenuOpened: null
}

const actions = {
    setContextMenuOpened(context, payload) {
        context.commit('setContextMenuOpened', payload)
    },
    clearContextMenuOpened(context) {
        context.commit('clearContextMenuOpened')
    }
}

const mutations = {
    setContextMenuOpened(state, payload) {
        state.contextMenuOpened = payload
    },

    clearContextMenuOpened(state) {
        state.contextMenuOpened = null
    }
}

export default { state, actions, mutations }