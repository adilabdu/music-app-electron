<template>

  <ContentPage>
    <Tracklist :album="album" />
  </ContentPage>

</template>

<script setup>

  import { computed, onBeforeUnmount } from "vue"
  import store from "../../store/index"

  import ContentPage from "../../components/ContentPage.vue";
  import Tracklist from "../../views/Tracklist.vue";

  const album = computed(() => store.state.album.currentAlbum)

  onBeforeUnmount(() => {
    store.dispatch('setCurrentAlbum', null)
  })

</script>

<style scoped>

</style>