const state = {
    playing: false,
    buffered: [],
    currentTime: 0,
    duration: 0,
    volume: 0.5,
    muted: false,
    currentTrack: {},
    queuedTracks: [],
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

    replay(context) {
        context.commit('replay')
    },

    forward(context) {
        context.commit('forward')
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

    populateQueue(context, payload) {
        context.commit('populateQueue', payload)
    },

    shiftQueue(context) {
        context.commit('shiftQueue')
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

    replay(state) {
        state.currentTime = 0
    },

    forward(state) {
        state.currentTime = state.duration
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

    populateQueue(state, payload) {
        state.queuedTracks.unshift(...payload)
    },

    shiftQueue(state) {
        state.queuedTracks.shift()
    },

    unloadTrack(state) {
        state.currentTrack = {}
        state.playing = false
        state.currentTime = 0
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