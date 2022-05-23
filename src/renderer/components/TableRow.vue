<template>

  <div class="group hover:!bg-[#353535] track w-full rounded-md flex items-center pl-[7px] pr-[18px] text-[13px] font-light h-[46px]">

    <div class="-translate-x-[125%] h-[40px] w-8 opacity-0 hover:opacity-100 absolute flex items-center justify-center">
      <HeartIcon :width="8" :stroke="{ color: '#FF8400', width: 30 }" :class="''" />
    </div>

    <div class="relative flex items-center icons">

      <PauseIcon v-if="thisTrackIsPlaying" @click="pausePlaying" :width="12" class="pause-icon" :class="'z-30 absolute ml-1 fill-[#FF8400] group-hover:opacity-100 opacity-0'" />
      <PlayIcon v-else @click="startPlaying()" :width="12" :class="'z-30 absolute ml-2 fill-[#FF8400] group-hover:opacity-100 opacity-0'" />

      <PlayingIcon v-if="thisTrackIsPlaying" class="playing-icon z-20 absolute ml-1 group-hover:opacity-0 opacity-100" />
      <p :class="[thisTrackIsPlaying ? '!opacity-0' : 'opacity-100']" class="group-hover:opacity-0 opacity-100 max-w-fit pl-2 pr-6 text-center text-[#FFFFFFA3]">
        {{ track[0] }}
      </p>

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

</template>

<script setup>

  import { computed } from "vue"
  import store from "../store";

  import PlayIcon from "../components/Icons/play.vue";
  import PauseIcon from "../components/Icons/pause.vue";
  import PlayingIcon from "./Icons/playing.vue";
  import PlusIcon from "./Icons/plus.vue";
  import HeartIcon from "./Icons/heart.vue";

  const props = defineProps({
    track: {
      type: Object,
      required: true
    }
  })


  function startPlaying() {

    // Check if a track is already loaded and if it is the same track as this
    if(!! !store.state.player.currentTrack ||
        (store.state.player.currentTrack.location !==  props.track[4])) {

      store.dispatch('loadTrack', store.state.album.currentAlbum.tracklist[props.track[5]])
    }
    store.dispatch('play')
  }

  function pausePlaying() {
    store.dispatch('pause')
  }

  const thisTrackIsPlaying = computed(() => {
    return store.state.player.playing &&
        (store.state.player.currentTrack.location === props.track[4])
  })

</script>

<style scoped>

</style>