<template>

  <Tracklist :album="album" />

</template>

<script setup>

  import { computed } from "vue"
  import store from "../../store/index"
  import Tracklist from "../../views/Tracklist.vue";

  const album = computed(() => store.state.album.currentAlbum)

</script>

<style scoped>

</style>