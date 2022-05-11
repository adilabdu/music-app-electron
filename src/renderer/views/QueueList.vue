<template>

  <div class="h-screen w-[297.5px] pt-[65px] bg-red fixed right-0 z-40 bg-opacity-[0.95] p-[10px] backdrop-blur-md bg-[#282828] flex flex-col">

    <div class="w-full p-[10px] flex justify-between items-center">
      <h3 class="font-bold text-[17px] text-[#FFFFFFEB]">Up next</h3>
    </div>

    <div id="queueList" class="overflow-auto">
      <TrackSmallCard v-for="(track, index) in queuedTracks" :playing="index === 0" :track="queuedTracks[index+1]" />
    </div>

  </div>

</template>

<script setup>

  import { computed } from "vue";
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
    background-color: #747474;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
  }
  
  #queueList::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
  }

</style>