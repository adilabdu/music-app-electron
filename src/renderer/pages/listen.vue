<template>

  <ContentPage :loading="pageLoading" page-title="Listen Now">

    <DeezerPlaylist v-for="playlist in playlists" @loading="loading" :playlistID="playlist.id" :title="playlist.title" />

  </ContentPage>

</template>

<script setup>

  import { ref, computed } from "vue";

  import ContentPage from '../components/ContentPage.vue';
  import DeezerPlaylist from "../views/DeezerPlaylist.vue"

  const playlists = [
    {
      id: '658600625',
      title: 'New Releases'
    },
    {
      id: '2098157264',
      title: 'Hits of the Moment'
    },
    {
      id: '7662551722',
      title: '2010\'s Raps'
    },
    {
      id: '1677006641',
      title: 'Hip-Hop Hits'
    },
  ]

  const loadingComponents = ref([])
  function loading(value) {
    if(value) {
      loadingComponents.value.push('loading')
    } else {
      loadingComponents.value.pop()
    }

    console.log(loadingComponents.value)
  }

  const pageLoading = computed(() => {
    return (loadingComponents.value.length > 0)
  })

</script>

<style scoped>

</style>