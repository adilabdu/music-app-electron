<template>

  <ContentPage>
    <Tracklist v-if="!loading" :album="playlist" />
  </ContentPage>

</template>

<script setup>

  import { ref, onMounted } from "vue"
  import { onBeforeRouteUpdate } from "vue-router"

  import store from "../../store/index"
  import router from "../../router/index"

  import ContentPage from "../../components/ContentPage.vue";
  import Tracklist from "../../views/Tracklist.vue";
  import Album from "../../models/albums"

  const loading = ref(true)
  const playlist = ref()

  onMounted(() => {
    populatePlaylist(router.currentRoute.value.params.id)
  })

  function populatePlaylist(playlist_id) {

    loading.value = true
    const playlistInfo = window.api.Playlist.where({ id: playlist_id })

    playlist.value = new Album({
      id: playlistInfo.id,
      title: playlistInfo.name,
      artist: 'Adil Abdu Bushra',
      artwork: playlistInfo.artwork,
      description: playlistInfo.description,
      local: true
    })

    window.api.Playlist.tracklist(playlist_id).forEach((track, index) => {

      playlist.value.addTrack({
        title: track['track_title'],
        artist: track['contributing_artist'],
        location: track['location'],
        duration: track['duration'],
        local: track.local,
        track_position: (index + 1)
      }, {
        title: track['album_title'],
        artwork: track['artwork'],
        local: track.local
      })
    })
    store.dispatch('setCurrentAlbum', playlist.value)

    loading.value = false
  }

  onBeforeRouteUpdate(((to, from) => {
    populatePlaylist(to.params.id)
  }))

</script>

<style scoped>

</style>