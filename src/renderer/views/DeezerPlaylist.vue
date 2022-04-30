<template>

  <AlbumCarousel :display="display" :loading="loading" :title="title">
    <AlbumCard v-if="loading === false" v-for="i in display" :key="i" :track-info="{ artwork: tracks[i].artwork, artist: tracks[i].artist, title: tracks[i].title, track: tracks[i].track, album: tracks[i].album }" />
  </AlbumCarousel>

</template>

<script setup>

  import axios from "axios";

  import { ref, onMounted, computed, watch } from "vue";
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    playlistID: {
      type: String,
      required: true
    }
  })

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const sm = breakpoints.smaller('sm')
  const md = breakpoints.between('sm', 'md')
  const lg = breakpoints.between('md', 'lg')
  const xl = breakpoints.between('lg', 'xl')
  const xxl = breakpoints.between('xl', '2xl')
  const xxxl = breakpoints['2xl']

  const display = ref()
  watch([sm, md, lg, xl, xxl, xxxl], () => {
    display.value = xxxl.value ? 6 : ( xxl.value ? 5 : ( xl.value ? 4 : 50) )
  })

  const tracks = ref()
  const loading = ref(true)
  onMounted(() => {

    axios.get('https://cors-adil.herokuapp.com/https://api.deezer.com/playlist/' + props.playlistID, {
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