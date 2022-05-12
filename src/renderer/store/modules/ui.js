const state = {
    queueListOpened: false
}

const actions = {
    toggleQueueList(context) {
        context.commit('toggleQueueList')
    }
}

const mutations = {
    toggleQueueList(state) {
        state.queueListOpened = !state.queueListOpened
    }
}

export default { state, actions, mutations }