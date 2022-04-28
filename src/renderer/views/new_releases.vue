<template>

  <AlbumCarousel title="New Releases">
    <AlbumCard v-if="loading === false" v-for="i in display" :key="i" :track-info="{ artwork: tracks[i].artwork, artist: tracks[i].artist, title: tracks[i].title }" />
  </AlbumCarousel>

</template>

<script setup>

  import axios from "axios";

  import { ref, onMounted, watch } from "vue";
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const xxlAndLarger = breakpoints.greater('2xl')
  const xl = breakpoints.xl
  const lg = breakpoints.lg
  const md = breakpoints.md

  const display = ref(0)
  watch([xl, lg, md], () => {
    display.value = xl ? 6 : ( lg ? 5 : ( md ? 4 : 2 ) )
    console.log({ 'display': display.value, 'xl': xl.value, 'lg': lg.value, 'md': md.value })
  })

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
          artwork: track.album['cover_medium']
        }
      })
    }).finally(() => {
      loading.value = false
    })

  })



</script>

<style scoped>

</style>