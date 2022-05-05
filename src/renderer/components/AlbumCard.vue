<template>

  <article class="flex flex-col min-w-[144px]">
    <div @click="goToTracklist" class="relative">
      <div class="flex justify-between items-end group hover:bg-opacity-20 absolute w-full h-full bg-black bg-opacity-0 rounded-md transition duration-150">
        <div v-if="!albumInfo.track" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white bg-opacity-0" />
        <div v-if="playMe() && albumInfo.track" @click.prevent="startPlaying" class="flex items-center justify-center m-2 w-8 h-8 rounded-full bg-white group-hover:bg-opacity-40 bg-opacity-0 hover:!bg-opacity-100 hover:bg-[#FF8400]">
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
          class="rounded-md w-full aspect-square object-cover"
      />
    </div>
    <div class="pt-[6px] flex flex-col">
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF]">{{ albumInfo['title'] }}</a>
      <a href="#" class="hover:underline cursor-pointer text-[12px] text-[#EFEFEF] opacity-75 leading-none truncate">{{ albumInfo['artist'] }}</a>
    </div>
  </article>

</template>

<script>

  import { onMounted, computed } from "vue"

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
      }
    },
    setup(props) {

      const playing = computed(() => store.state.player.playing)
      const loadedTrack = computed(() => store.state.player.currentTrack.track)

      function startPlaying() {
        store.dispatch('loadTrack', props.albumInfo)
        store.dispatch('play')
      }

      function pausePlaying() {
        store.dispatch('pause')
      }

      function playMe() {
        return !playing.value || (playing.value && (loadedTrack.value !== props.albumInfo.track))
      }

      function pauseMe() {
        return playing.value && (loadedTrack.value === props.albumInfo.track)
      }
      
      function goToTracklist() {

        store.dispatch('setCurrentAlbum', props.albumInfo)
        router.push({ path: `/albums/${props.albumInfo.id}` })

      }

      return { startPlaying, pausePlaying, playMe, pauseMe, goToTracklist }

    }
  }
</script>

<style scoped>

</style>