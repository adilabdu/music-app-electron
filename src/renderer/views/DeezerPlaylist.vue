<template>

  <AlbumCarousel @previous="fetchPrevious" @next="fetchNext" :display="display" :loading="loading" :title="title" :available="{ next: !! next, prev: !! prev }">
    <AlbumCard :show-album-title="false" v-if="loading === false" v-for="i in display" :key="i"
               :album-info="(albums[i-1])" />
  </AlbumCarousel>

</template>

<script setup>

  import axios from "axios";

  import { ref, onMounted, watch } from "vue";
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

  import router from "../router/index"

  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";

  import Album from "../models/albums"

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

  const emit = defineEmits(['loading'])

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

  const albums = ref()
  const total = ref(null)
  const next = ref(null)
  const prev = ref(null)
  const loading = ref(true)

  onMounted(() => {
    fetch('https://cors-anywhere-production-e634.up.railway.app/https://api.deezer.com/playlist/' + props.playlistID + '/tracks?limit=' + display.value, true)
  })

  function fetchPrevious() {
    fetch('https://cors-anywhere-production-e634.up.railway.app/' + prev.value)
  }

  function fetchNext() {
    fetch('https://cors-anywhere-production-e634.up.railway.app/' + next.value)
  }

  function fetch(url, emits=false) {

    emits ? emit('loading', true) : ''
    loading.value = true

    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      total.value = response.data['total']
      next.value = response.data['next'] ? response.data['next'] : null
      prev.value = response.data['prev'] ? response.data['prev'] : null
      albums.value = response.data.data.map(track => {

        return new Album({
          id: track.id,
          title: track.album.title,
          artist: track.artist.name,
          artwork: track.album['cover_medium'],
          local: false,
          tracklist: [
            {
              title: track.title,
              artist: track.artist.name,
              location: track.preview,
              duration: track.duration,
              local: false,
              track_position: 1
            }
          ]
        })

      })
    }).catch((err) => {
      router.push({ path: '/albums' })
      console.error(err)
    }).finally(() => {

      loading.value = false
      emits ? emit('loading', false) : ''

    })
  }

</script>

<style scoped>

</style>