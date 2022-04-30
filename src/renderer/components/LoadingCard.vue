<template>

  <article class="flex flex-col min-w-[144px]">
    <div class="relative w-full aspect-square rounded-sm animate-pulse bg-[#4D4D4D] bg-opacity-50" />
    <div class="pt-[6px] flex flex-col justify-around gap-0.5">
      <div class="bg-[#4D4D4D] bg-opacity-50 animate-[pulse_2s_100ms_cubic-bezier(0.4,0,0.6,1)_infinite] h-3 w-[50%]"></div>
      <div class="bg-[#4D4D4D] bg-opacity-50 animate-pulse h-3 w-[35%]" />
    </div>
  </article>

</template>

<script>

  import { onMounted, computed } from "vue"

  import store from "../store"

  import PlayIcon from "./Icons/play.vue"
  import PauseIcon from "./Icons/pause.vue"

  export default {
    name: "AlbumCard",
    components: {
      PlayIcon,
      PauseIcon
    },
    props: {
      trackInfo: {
        required: false,
        type: Object
      }
    },
    setup(props) {

      const playing = computed(() => store.state.player.playing)
      const loadedTrack = computed(() => store.state.player.currentTrack.track)

      function startPlaying() {
        store.dispatch('loadTrack', props.trackInfo)
        store.dispatch('play')
      }

      function pausePlaying() {
        store.dispatch('pause')
      }

      function playMe() {
        return !playing.value || (playing.value && (loadedTrack.value !== props.trackInfo.track))
      }

      function pauseMe() {
        return playing.value && (loadedTrack.value === props.trackInfo.track)
      }

      return { startPlaying, pausePlaying, playMe, pauseMe }

    }
  }
</script>

<style scoped>

</style>