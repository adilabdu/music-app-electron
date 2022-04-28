import { useMediaControls} from "@vueuse/core";

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
        console.log('2. loadTrack mutation performed, with currentTrack now: ', state.currentTrack)
    },

    unloadTrack(state) {
        state.currentTrack = {}
        state.emptyTrack = true
        console.log('3. unloadTrack mutation performed, with currentTrack now: ', state.currentTrack)
    }

}

export default { state, actions, mutations }