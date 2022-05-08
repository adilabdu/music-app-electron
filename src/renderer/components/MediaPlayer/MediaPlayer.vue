<template>

  <audio ref="audio" :src="source" />

</template>

<script setup>

  import { ref, watch, onMounted, computed } from "vue"
  import { useMediaControls } from "@vueuse/core";

  import store from "../../store"

  const props = defineProps({
    source: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    play: {
      type: Boolean,
      default: true
    }
  })

  const audio = ref(null)

  const controls = useMediaControls(audio, {
    src: props.source,
  })

  const {
    playing,
    currentTime,
    duration,
    volume,
  } = controls

  onMounted(() => {
    playing.value = true

    audio.value.onerror = () => {
      console.log("Error detected")
      store.dispatch('unloadTrack')
    }

  })

  watch([currentTime, duration, volume], () => {
    store.dispatch('currentTime', currentTime.value)
    store.dispatch('duration', duration.value)

    if(currentTime.value === duration.value) {
      store.dispatch('resetPlayer')
    }

  })

  const volumeBar = computed(() => (store.state.player.volume / 100))
  watch(volumeBar, () => {
    volume.value = volumeBar.value
  })

  const currentTimeBar = computed(() => (store.state.player.currentTime))
  watch(currentTimeBar, () => {
    currentTime.value = currentTimeBar.value
  })

  const play = computed(() => store.state.player.playing)
  watch(play, () => {
    playing.value = play.value
  })

</script>

<style scoped>

</style>