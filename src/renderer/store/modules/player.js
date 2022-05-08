const state = {
    playing: false,
    buffered: [],
    currentTime: 0,
    duration: 0,
    volume: 0.5,
    muted: false,
    currentTrack: {},
    emptyTrack: true
}

const actions = {

    play(context) {
        context.commit('play')
    },

    pause(context) {
        context.commit('pause')
    },

    currentTime(context, payload) {
        context.commit('currentTime', payload)
    },

    volume(context, payload) {
        context.commit('volume', payload)
    },

    duration(context, payload) {
        context.commit('duration', payload)
    },

    loadTrack(context, payload) {
        context.commit('loadTrack', payload)
    },

    unloadTrack(context) {
        context.commit('unloadTrack')
    },

    resetPlayer(context) {
        context.commit('resetPlayer')
    }

}

const mutations = {

    play(state) {
        state.playing = true
    },

    pause(state) {
        state.playing = false
    },

    currentTime(state, payload) {
        state.currentTime = payload
    },

    volume(state, payload) {
        state.volume = payload
    },

    duration(state, payload) {
        state.duration = payload
    },

    loadTrack(state, payload) {
        state.currentTrack = payload
        state.emptyTrack = false
    },

    unloadTrack(state) {
        state.currentTrack = {}
        state.playing = false
        state.emptyTrack = true
    },

    resetPlayer(state) {
        state.playing = false
        state.currentTime = 0
        state.duration = 0
        state.currentTrack = {}
        state.emptyTrack = true
    }

}

export default { state, actions, mutations }