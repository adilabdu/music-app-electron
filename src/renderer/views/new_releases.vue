<template>

  <AlbumCarousel title="New Releases">
    <AlbumCard v-if="loading === false" v-for="i in display" :key="i" :track-info="{ artwork: tracks[i].artwork, artist: tracks[i].artist, title: tracks[i].title, track: tracks[i].track, album: tracks[i].album }" />
  </AlbumCarousel>

</template>

<script setup>

  import axios from "axios";

  import { ref, onMounted } from "vue";

  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";

  const display = ref(25)

  const tracks = ref()
  const loading = ref(true)
  onMounted(() => {

    axios.get('https://cors-adil.herokuapp.com/https://api.deezer.com/playlist/658600625', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      tracks.value = response.data.tracks.data.map(track => {
        return {
          title: track.title,
          album: track.album.title,
          artist: track.artist.name,
          artwork: track.album['cover_medium'],
          track: track.preview
        }
      })
    }).finally(() => {
      loading.value = false
    })

  })

</script>

<style scoped>

</style>