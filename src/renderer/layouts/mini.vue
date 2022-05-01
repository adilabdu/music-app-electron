<template>

  <div class="relative h-screen w-full flex items-center justify-center text-white font-light">

    <img v-if="currentTrack.artwork" :src="currentTrack.artwork" class="w-full h-full" />
    <TrackIcon v-else :width="96" :class="'fill-[#B9B9B9]'" />

  </div>

</template>

<script setup>

  import { computed, watch } from "vue"

  import store from "../store/index"

  import TrackIcon from "../components/Icons/track.vue"

  const playing = computed(() => store.state.player.playing)
  const currentTrack = computed(() => store.state.player.currentTrack)
  watch(playing, () => {
    console.log('from mini player', playing.value)
  })

  console.log('mini player: ', currentTrack.value)

</script>

<style scoped>

</style>
