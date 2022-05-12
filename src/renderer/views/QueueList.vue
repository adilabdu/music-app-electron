<template>

  <div id="queueListComponent" :class="[queueListOpened ? 'translate-x-0' : 'translate-x-full']"
       class="transition duration-300 h-screen w-[297.5px] pt-[65px] bg-red fixed right-0 z-40 bg-opacity-[0.90] p-[10px] backdrop-blur-md bg-[#282828] flex flex-col">

    <div class="w-full p-[10px] flex justify-between items-center">
      <h3 class="font-bold text-[17px] text-[#FFFFFFEB]">Up next</h3>
    </div>

    <div v-if="queuedTracks.length <= 1" class="h-full w-full flex items-center justify-center">
      <p class="text-[13px] text-[#FFFFFFA3]">No upcoming songs</p>
    </div>

    <div id="queueList" class="overflow-auto text-white">
      <TrackSmallCard class="track-small-card first:hidden" v-for="(track, index) in queuedTracks" :track="track" />
    </div>

  </div>

</template>

<script setup>

  import { computed, watch } from "vue";
  import store from "../store/index"

  import TrackSmallCard from "../components/TrackSmallCard.vue";

  const queuedTracks = computed(() => {
    return store.state.player.queuedTracks.map((track) => {
      return {
        artist: track.artist,
        title: track.title,
        artwork: track.artwork,
        duration: track.duration ?? "-:--"
      }
    })
  })

  const queueListOpened = computed(() => store.state.ui.queueListOpened)

  watch(queuedTracks, () => {
    console.log('QueuedTracks updated:', queuedTracks.value)
  })

</script>

<style scoped>

  #queueList {
    overflow: auto;
  }
  
  #queueList::-webkit-scrollbar {
    width: 16px;
  }
  #queueList::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
  }
  #queueList::-webkit-scrollbar-thumb {
    background-color: rgba(116,116,116,0);
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
    transition: all;
    transition-duration: 1s;
  }
  
  #queueList::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
  }

  #queueListComponent:hover #queueList::-webkit-scrollbar-thumb {
    background-color: rgba(116,116,116,1) !important;
  }

  .track-small-card:nth-child(2) {
    @apply bg-[#FFFFFF1A];
  }

</style>