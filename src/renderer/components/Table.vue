<template>

  <div v-if="!loading" class="tracklist-table flex flex-col w-full min-h-[36px] px-[40px] my-[40px]">

    <div v-for="(track, index) in data" class="group hover:!bg-[#353535] track w-full rounded-md flex items-center pl-[7px] pr-[18px] text-[13px] font-light h-[46px]">

      <div class="-translate-x-[125%] h-[40px] w-8 opacity-0 hover:opacity-100 absolute flex items-center justify-center">
        <HeartIcon :width="8" :stroke="{ color: '#FF8400', width: 30 }" :class="''" />
      </div>

      <div class="relative flex items-center icons">
        <PlayIcon v-if="( (!isCurrentlyPlaying(index, track[4])) )" @click="startPlaying(index)" :width="12" :class="'z-30 absolute ml-2 fill-[#FF8400] opacity-0 group-hover:opacity-100'" />
        <PauseIcon v-if="isPlaying && isCurrentlyPlaying(index, track[4])" @click="pausePlaying" :width="12" class="pause-icon" :class="'z-30 absolute ml-2 fill-[#FF8400] opacity-0'" />
        <PlayingIcon :class="[ ( isPlaying && isCurrentlyPlaying(index, track[4]) ) ? 'opacity-100' : 'opacity-0']" class="playing-icon z-20 absolute ml-2" />
        <p :class="[!isCurrentlyPlaying(index, track[4]) ? 'opacity-100' : 'opacity-0']" class="max-w-fit pl-2 pr-6 text-center text-[#FFFFFFA3] group-hover:opacity-0 opacity-100">
          {{ track[0] }}</p>
      </div>
      <p class="min-w-[50%] text-[#FFFFFFEB]">{{ track[1] }}</p>
      <p class="grow truncate text-[#FFFFFFA3]">{{ track[2] }}</p>
      <div class="w-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100">
        <PlusIcon :width="16" :class="'fill-[#FF8400]'" />
      </div>
      <p class="text-[#FFFFFFA3] max-w-fit text-right pr-1">{{ track[3] }}</p>
      <div class="w-[28px] flex items-center justify-center">
        <button class="flex gap-0.5 items-center justify-center">
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
        </button>
      </div>

    </div>

  </div>

</template>

<script setup>

  import { computed } from "vue";

  import PlayIcon from "../components/Icons/play.vue";
  import PauseIcon from "../components/Icons/pause.vue";
  import PlayingIcon from "./Icons/playing.vue";
  import PlusIcon from "./Icons/plus.vue";
  import HeartIcon from "./Icons/heart.vue";
  import store from "../store";

  // TODO: props to take in data to render into table
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  })

  function startPlaying(index) {

    if(!! !store.state.player.currentTrack ||
        (store.state.player.currentTrack.location !==  props.data[index][4])) {

      store.dispatch('unloadTrack')
      store.dispatch('loadTrack', {
        title: store.state.album.currentAlbum.tracklist[index].title,
        artist: store.state.album.currentAlbum.artist,
        album: store.state.album.currentAlbum.title,
        location: store.state.album.currentAlbum.tracklist[index].location,
        artwork: store.state.album.currentAlbum.artwork
      })
    }

    store.dispatch('play')
  }

  function pausePlaying() {
    store.dispatch('pause')
  }

  // TODO: also check which row of `data` corresponds with currently `loadedTrack`
  const isPlaying = computed(() => store.state.player.playing)

  const isCurrentlyPlaying = (index, trackLocation) => {
    console.log('isPlayingThisTrack:', store.state.album.currentAlbum.tracklist[index].location === trackLocation)
    return (store.state.player.currentTrack.location === trackLocation)
  }

</script>

<style scoped>

  .tracklist-table .track:nth-child(odd) {
    @apply bg-[#252525];
  }

  .icons:hover .playing-icon {
    @apply opacity-0;
  }

  .icons:hover .pause-icon {
    @apply opacity-100;
  }

</style>