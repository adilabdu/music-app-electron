const state = {
    queueListOpened: false,
    modalOpened: false
}

const actions = {
    toggleQueueList(context) {
        context.commit('toggleQueueList')
    },
    toggleModalView(context) {
        context.commit('toggleModalView')
    }
}

const mutations = {
    toggleQueueList(state) {
        state.queueListOpened = !state.queueListOpened
    },
    toggleModalView(state) {
        state.modalOpened = !state.modalOpened
    }
}

export default { state, actions, mutations }