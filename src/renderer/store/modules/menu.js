const state = {
    contextMenuOpened: null,
    contextMenuPosition: {}
}

const actions = {
    setContextMenuOpened(context, payload) {
        context.commit('setContextMenuOpened', payload)
    },
    clearContextMenuOpened(context) {
        context.commit('clearContextMenuOpened')
        context.dispatch('setContextMenuPosition', {}).then()
    },
    setContextMenuPosition(context, payload) {
        context.commit('setContextMenuPosition', payload)
    }
}

const mutations = {
    setContextMenuOpened(state, payload) {
        state.contextMenuOpened = payload
    },
    clearContextMenuOpened(state) {
        state.contextMenuOpened = null
    },
    setContextMenuPosition(state, payload) {
        state.contextMenuPosition = payload
        console.log("From store, ContextMenuPosition", state.contextMenuPosition)
    }
}

export default { state, actions, mutations }