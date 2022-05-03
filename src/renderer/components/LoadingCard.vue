<template>

  <article class="flex flex-col min-w-[144px]">
    <div class="relative w-full aspect-square rounded-sm animate-pulse bg-[#4D4D4D] bg-opacity-50" />
    <div class="pt-[6px] flex flex-col justify-around gap-0.5">
      <div class="bg-[#4D4D4D] bg-opacity-50 animate-[pulse_2s_100ms_cubic-bezier(0.4,0,0.6,1)_infinite] h-3" :style="{ width: titleWidth + '%' }"></div>
      <div class="bg-[#4D4D4D] bg-opacity-50 animate-pulse h-3" :style="{ width: albumWidth + '%' }" />
    </div>
  </article>

</template>

<script>

  import { onMounted, ref, computed } from "vue"

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

      const titleWidth = ref(0)
      const albumWidth = ref(0)
      onMounted(() => {
        titleWidth.value = numberBetween(25, 65)
        albumWidth.value = numberBetween(25, 65)
      })

      function numberBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

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

      return { startPlaying, pausePlaying, playMe, pauseMe, titleWidth, albumWidth }

    }
  }
</script>

<style scoped>

</style>