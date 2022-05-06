<template>

  <Tracklist :album="album" />

</template>

<script setup>

  import { computed, onBeforeUnmount } from "vue"
  import store from "../../store/index"
  import Tracklist from "../../views/Tracklist.vue";

  const album = computed(() => store.state.album.currentAlbum)

  onBeforeUnmount(() => {
    store.dispatch('setCurrentAlbum', null)
  })

</script>

<style scoped>

</style>