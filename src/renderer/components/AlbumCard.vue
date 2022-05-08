<template>

  <article class="flex flex-col min-w-[144px]">
    <div @click="goToTracklist" class="relative">
      <div class="flex justify-between items-end group hover:bg-opacity-20 absolute w-full h-full bg-black bg-opacity-0 rounded-md transition duration-150">
        <div v-if="!albumInfo.tracklist[0].location" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white bg-opacity-0" />
        <div v-if="playMe() && albumInfo.tracklist[0].location" @click.prevent="startPlaying" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">
          <PlayIcon class="ml-[0.1rem] w-full aspect-auto scale-[45%] fill-white group-hover:opacity-100 opacity-0" />
        </div>
        <div v-if="pauseMe()" @click.prevent="pausePlaying" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">
          <PauseIcon class="ml-[0.005rem] w-full aspect-auto scale-[45%] fill-white group-hover:opacity-100 opacity-0" />
        </div>
        <div class="flex items-center justify-center gap-[0.2rem] m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">

          <div class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>
          <div class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>
          <div class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>

        </div>
      </div>
      <img
          :src="albumInfo['artwork']"
          alt="cover"
          class="rounded-md w-full aspect-square object-cover"
      />
    </div>
    <div class="pt-[6px] flex flex-col">
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF]">{{ showAlbumTitle ? albumInfo.title : albumInfo.tracklist[0].title }}</a>
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF] opacity-75 leading-none truncate">{{ albumInfo['artist'] }}</a>
    </div>
  </article>

</template>

<script>

  import { computed, ref } from "vue"

  import store from "../store"
  import router from "../router"

  import PlayIcon from "./Icons/play.vue"
  import PauseIcon from "./Icons/pause.vue"

  export default {
    name: "AlbumCard",
    components: {
      PlayIcon,
      PauseIcon
    },
    props: {
      albumInfo: {
        required: true,
        type: Object
      },
      showAlbumTitle: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {

      const playing = computed(() => store.state.player.playing)
      const loadedTrack = computed(() => store.state.player.currentTrack.location)

      // TODO: Encapsulate this function, since it's repeated multiple places
      function startPlaying() {
        inPlace.value = true

        if(!! !store.state.player.currentTrack ||
            (store.state.player.currentTrack.location !==  props.albumInfo.tracklist[0].location)) {

          store.dispatch('unloadTrack')
          store.dispatch('loadTrack', {
            title: props.albumInfo.tracklist[0].title,
            artist: props.albumInfo.artist,
            album: props.albumInfo.title,
            location: props.albumInfo.tracklist[0].location,
            artwork: props.albumInfo.artwork
          })
        }

        store.dispatch('play')
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
        console.log("After AlbumCard is clicked, currentAlbum state holds:", store.state.album.currentAlbum)
        console.log("inPlace value is:", inPlace.value)
        if(inPlace.value === false) {
          router.push({ path: `/albums/${props.albumInfo.id}` })
        }
        inPlace.value = false

      }

      return { startPlaying, pausePlaying, playMe, pauseMe, goToTracklist }

    }
  }
</script>

<style scoped>

</style>