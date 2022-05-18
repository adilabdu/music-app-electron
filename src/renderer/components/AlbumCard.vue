<template>

    <article ref="albumCard" class="flex flex-col min-w-[144px] overflow-auto">
    <div @click="goToTracklist" class="relative">
      <div class="flex justify-between items-end group hover:bg-opacity-20 absolute w-full h-full bg-black bg-opacity-0 rounded-md transition duration-150">
        <div v-if="albumInfo.tracklist[0].location === ''" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white bg-opacity-0" />
        <div v-if="playMe() && albumInfo.tracklist[0].location" @click.prevent="startPlaying" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">
          <PlayIcon class="ml-[0.1rem] w-full aspect-auto scale-[45%] fill-white group-hover:opacity-100 opacity-0" />
        </div>
        <div v-if="pauseMe()" @click.prevent="pausePlaying" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">
          <PauseIcon class="ml-[0.005rem] w-full aspect-auto scale-[45%] fill-white group-hover:opacity-100 opacity-0" />
        </div>

      <MenuButton @click="openMenu" :menuOpened="menuOpened" />

      </div>
      <img loading="lazy" v-if="!! albumInfo['artwork']"
          :src="albumInfo['artwork']"
          alt="cover"
          class="rounded-md w-full aspect-square object-cover"
      />
      <div v-else class="w-full aspect-square rounded-md bg-[#4D4D4D] bg-opacity-50 transition-colors duration-300 flex items-center justify-center">
        <TrackIcon :width="48" :class="'fill-[#818181]'" />
      </div>
    </div>
    <div class="pt-[6px] flex flex-col">
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF]">{{ showAlbumTitle ? albumInfo.title : albumInfo.tracklist[0].title }}</a>
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF] opacity-75 leading-none truncate pb-[0.125rem]">{{ albumInfo['artist'] }}</a>
    </div>
  </article>

</template>

<script setup>

  import { computed, onMounted, reactive, ref, watch } from "vue"
  import { useElementBounding, useWindowSize } from "@vueuse/core"

  import store from "../store"
  import router from "../router"

  import MenuButton from "./MenuButton.vue"
  import PlayIcon from "./Icons/play.vue"
  import PauseIcon from "./Icons/pause.vue"
  import TrackIcon from "./Icons/track.vue"

  const props = defineProps({
    albumInfo: {
      required: true,
      type: Object
    },
    showAlbumTitle: {
      type: Boolean,
      default: true
    }
  })

  onMounted(() => {
    console.log('AlbumCard mounted. Tracklist:', props.albumInfo)
  })

  const element = ref()
  const circle = useElementBounding(element)
  const { width, height } = useWindowSize()

  const playing = computed(() => store.state.player.playing)
  const loadedTrack = computed(() => store.state.player.currentTrack.location)

  // TODO: Encapsulate these functions, since it's repeated multiple places
  function startPlaying() {
    inPlace.value = true

    console.log("data:", {
      play_now: (() => {
        return props.albumInfo.tracklist[0]
      })(),
      queue: (() => {
        // props.albumInfo.tracklist
        return props.albumInfo.tracklist.slice(1)
      })()
    })

    console.log('This track should be dispatched:', props.albumInfo.track(0))

    store.dispatch('loadTrack', props.albumInfo.track(0))
        .then(() => store.dispatch('play'))

    // if(!! !store.state.player.currentTrack ||
    //     (store.state.player.currentTrack.location !==  props.albumInfo.tracklist[0].location)) {
    //
    //   store.dispatch('unloadTrack')
    // }
    //
    // loadTrack().then(() => store.dispatch('play'))
    //
    // const queueableTracks = props.albumInfo.tracklist.map(track => {
    //   return {
    //     title: track.title,
    //     artist: props.albumInfo.artist,
    //     album: props.albumInfo.title,
    //     location: track.location,
    //     artwork: props.albumInfo.artwork,
    //     local: track.local,
    //     duration: toMinutes(track.duration)
    //   }
    // })
    //
    // store.dispatch('populateQueue', queueableTracks).then(() => {
    //   console.log('QueuedTracks:', store.state.player.queuedTracks)
    // })

  }

  function toMinutes(number) {
    return `${Math.floor(number / 60)}:${(number % 60) > 9 ? (number % 60) : '0' + (number % 60)}`
  }

  async function loadTrack() {

    const local = ref(props.albumInfo.tracklist[0].local)
    console.log('local:', local.value)
    const payload = {
      title: props.albumInfo.tracklist[0].title,
      artist: props.albumInfo.artist,
      album: props.albumInfo.title,
      location: props.albumInfo.tracklist[0].location,
      artwork: props.albumInfo.artwork,
      local: props.albumInfo.tracklist[0].local
    }

    console.log("Payload of track to be loaded", payload)

    await store.dispatch('loadTrack', payload)
  }

  function pausePlaying() {
    inPlace.value = true
    store.dispatch('pause')
  }

  // TODO: instead of `inPlace`, find CSS method to avoid route navigation
  const inPlace = ref(false)
  function playMe() {
    return !playing.value || (playing.value && (loadedTrack.value !== props.albumInfo.tracklist[0].location))
  }

  function pauseMe() {
    return playing.value && (loadedTrack.value === props.albumInfo.tracklist[0].location)
  }

  function goToTracklist() {

    store.dispatch('setCurrentAlbum', props.albumInfo)
    if(inPlace.value === false) {
      router.push({ path: `/albums/${props.albumInfo.id}` })
    }
    inPlace.value = false

  }

  const menuOpened = computed(() => store.state.ui.modalOpened && store.state.menu.contextMenuOpened === props.albumInfo.title)
  function openMenu(bounding) {
    inPlace.value = true

    console.log('Bounding:', {
      y: bounding.y,
      width: width.value
    })

    store.dispatch('toggleModalView')
    store.dispatch('setCurrentAlbum', props.albumInfo)
    store.dispatch('setContextMenuPosition', { x: bounding.x, y: bounding.y, width: width.value, height: height.value })
    store.dispatch('setContextMenuOpened', props.albumInfo.title)
  }

</script>

<style scoped>

</style>