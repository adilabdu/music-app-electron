<template>

  <AlbumCarousel @previous="fetchPrevious" @next="fetchNext" :display="display" :loading="loading" :title="title" :available="{ next: !! next, prev: !! prev }">
    <AlbumCard :show-album-title="false" v-if="loading === false" v-for="i in display" :key="i"
               :album-info="albumInfo(tracks[i-1])" />
  </AlbumCarousel>

</template>

<script setup>

  import axios from "axios";

  import { ref, onMounted, watch } from "vue";
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

  import router from "../router/index"

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

  const tracks = ref()
  const total = ref(null)
  const next = ref(null)
  const prev = ref(null)
  const loading = ref(true)

  onMounted(() => {
    fetch('https://cors-adil.herokuapp.com/https://api.deezer.com/playlist/' + props.playlistID + '/tracks?limit=' + display.value, true)
  })

  function fetchPrevious() {
    fetch('https://cors-adil.herokuapp.com/' + prev.value)
  }

  function fetchNext() {
    fetch('https://cors-adil.herokuapp.com/' + next.value)
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
      tracks.value = response.data.data.map(track => {
        return {
          title: track.album.title,
          artist: track.artist.name,
          artwork: track.album['cover_medium'] ? track.album['cover_medium'] : '',
          tracklist: [
            {
              title: track.title,
              location: track.preview,
              duration: track.duration
            }
          ]
        }
      })
      console.log('tracks is', tracks.value[0].artwork)
    }).catch((err) => {
      router.push({ path: '/albums' })
      console.error(err)
    }).finally(() => {

      loading.value = false
      emits ? emit('loading', false) : ''

    })
  }

  function albumInfo(track) {
    return track
  }

</script>

<style scoped>

</style>