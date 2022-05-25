const state = {
    queueListOpened: false,
    modalOpened: false,
    draggedCard: null
}

const actions = {
    toggleQueueList(context) {
        context.commit('toggleQueueList')
    },
    toggleModalView(context) {
        context.commit('toggleModalView')
    },
    setDraggedCard(context, payload) {
        context.commit('setDraggedCard', payload)
    }
}

const mutations = {
    toggleQueueList(state) {
        state.queueListOpened = !state.queueListOpened
    },
    toggleModalView(state) {
        state.modalOpened = !state.modalOpened
    },
    setDraggedCard(state, payload) {
        state.draggedCard = payload
    }
}

export default { state, actions, mutations }