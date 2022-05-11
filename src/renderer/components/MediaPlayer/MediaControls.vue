<template>

  <div id="mediaPlayer" class="h-full flex items-center max-w-[1600px] grow lg:px-[40px]">

    <div id="mediaControls" class="hidden lg:flex gap-3 items-center justify-center w-full h-full">

      <SkipIcon class="rewind" :class="'fill-[#EFEFEE] rotate-180'" :width="28" @click="replay" />
      <PlayIcon v-if="!playing" :class="'fill-[#EFEFEE]'" :width="18" @click="play()" />
      <PauseIcon v-else :class="'fill-[#EFEFEE]'" :width="18" @click="pause()" />
      <SkipIcon class="forward" :class="'fill-[#EFEFEE]'" :width="28" @click="forward()" />

    </div>

    <div id="track" class="h-full w-full flex items-center justify-center mx-[5px] lg:mx-0">
      <div id="trackArtwork" class="relative rounded-l-sm h-[44px] w-[44px] bg-[#323232] border-y border-l border-[#4D4D4D] flex items-center justify-center">
        <div class="group opacity-0 hover:opacity-100 absolute w-full h-full rounded-l-sm flex items-center justify-center bg-black bg-opacity-25 cursor-pointer">
          <MinimizeIcon @click="openMiniPlayer" :class="'fill-[#FFFFFFEB] group-hover:opacity-100 opacity-0'" :width="18" :stroke="{color: '#FFFFFFEB', width: 12 }" />
        </div>
        <img v-if="track.artwork" :src="track.artwork" alt="Now playing" class="w-full object-cover rounded-l-sm">
        <TrackIcon v-else :width="16" :class="'fill-[#5F5F5F]'" />
      </div>
      <div id="trackInfo" class="group custom-group relative flex flex-col items-center rounded-r-sm h-[44px] max-w-full lg:max-w-[628px] grow bg-[#4D4D4D]"
           :style="{ width: (width * 0.35) + 'px' }">

        <MediaPlayer v-if="!loading" ref="playerRef" :source="validSource" :autoplay="true" class="w-full" :key="playerKey" :play="playing" />

        <div v-if="!store.state.player.emptyTrack" class="w-full flex flex-col items-center justify-center gap-1 mt-[4px]">
          <div id="trackTitle" class="justify-center flex items-center text-[13px] text-[#FFFFFFEB] leading-none font-light">
            {{ track.title }}
            <div class="flex ml-2 gap-0.5">
              <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400] group-hover:opacity-100 opacity-0 transition duration-150"></div>
              <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400] group-hover:opacity-100 opacity-0 transition duration-150"></div>
              <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400] group-hover:opacity-100 opacity-0 transition duration-150"></div>
            </div>
          </div>
          <p class="text-[13px] text-[#FFFFFFA3] leading-none font-light w-full justify-center flex">
            <a href="#" class="hover:underline" id="trackArtist">{{ track.artist }}</a>
            &#65293;
            <a href="#" class="hover:underline" id="trackAlbum">{{ track.album }}</a>
          </p>
        </div>

        <div v-else class="flex items-center justify-center mb-[4px] h-full grayscale">
          <img :src="logo" class="w-6 h-6" />
        </div>

        <p v-if="!store.state.player.emptyTrack" id="trackTime" :class="playing ? 'group-hover:opacity-100' : ''" class="absolute left-0 bottom-0 text-[#FFFFFFA3] text-[10px] py-1 px-1.5 font-light opacity-0 transition duration-500">
          {{ currentTimeInMinutes }}
        </p>
        <p v-if="!store.state.player.emptyTrack" id="trackTimeLeft" class="absolute right-0 bottom-0 text-[#FFFFFFA3] text-[10px] py-1 px-1.5 font-light opacity-0 group-hover:opacity-100 transition duration-500">
          {{ remainingTimeInMinutes }}
        </p>
        <input v-if="!store.state.player.emptyTrack" id="trackElapsed" type="range" :min="0" :max="duration" v-model="currentTime" class="z-10 absolute w-full rounded-br-sm h-1 left-0 bottom-0 appearance-none"
               :style=" { background: currentTimeInPercent === 0 ? '#5F5F5F' : 'linear-gradient(to right, #B8B8B8 ' + currentTimeInPercent + '%, #5F5F5F ' + remainingTimeInPercent + '%)' } ">

      </div>
    </div>

    <div id="mediaVolume" class="hidden lg:flex lg:w-full h-full">

      <div id="volumeBar" class="grow gap-1 flex items-center justify-center rounded-full">

        <VolumeIcon :class="'fill-[#818181]'" :width="16" :volume-level="volume" />
        <input id="volume" type="range" :min="0" :max="100" v-model="volume" class="rounded-sm w-[70px] h-[0.1875rem] left-0 bottom-0 appearance-none"
               :style=" { background: volume === 0 ? '#5F5F5F' : 'linear-gradient(to right, #B8B8B8 ' + volume + '%, #5F5F5F ' + volume + '%)' } ">

      </div>
      <div id="playlistTab" class="flex gap-10 items-center justify-end">

        <div>
          <ListIcon :class="'fill-[#B8B8B8]'" :width="16" />
        </div>
        <div id="profile" class="w-[28px] h-[28px] rounded-full bg-[#FF8400] opacity-50">
<!--          <img :src="profileImage" class="w-full object-cover aspect-auto overflow-hidden rounded-full" />-->
        </div>

      </div>

    </div>

  </div>

</template>

<script setup>

  import {ipcRenderer} from "../../electron";

  import { toRefs, ref, onMounted, watch, computed } from "vue"

  import logo from "../../static/favicon.png"
  import store from "../../store"

  import MediaPlayer from "./MediaPlayer.vue"

  import PlayIcon from "../Icons/play.vue"
  import PauseIcon from "../Icons/pause.vue"
  import SkipIcon from "../Icons/skip.vue"
  import ListIcon from "../Icons/list.vue"
  import VolumeIcon from "../Icons/volume.vue"
  import TrackIcon from "../Icons/track.vue"
  import MinimizeIcon from "../Icons/mini.vue"

  const props = defineProps({
    width: {
      required: true,
      type: Number
    }
  })

  const track = computed(() => store.state.player.currentTrack)
  const playing = computed(() => store.state.player.playing)
  const duration = computed(() => store.state.player.duration)

  const volume = ref(store.state.player.volume * 100)
  watch(volume, () => {
    store.dispatch('volume', volume.value)
  })

  const validSource = ref()
  const loading = ref(true)
  const trackLocation = computed(() => store.state.player.currentTrack.location)
  watch(trackLocation, () => {
    if(store.state.player.currentTrack.local) {
      loading.value = true
      bufferToBlob(trackLocation.value).then((res) => {
        validSource.value = res
      }).finally(() => loading.value = false)
    } else {
      validSource.value = trackLocation.value
    }
  })

  async function bufferToBlob(buffer) {

    const file = (await window.io.readFile(buffer, false)).buffer
    console.log('Inside renderer buffer converter:', file)

    const blob = new Blob([file], { type: "audio/mp3" });
    return window.URL.createObjectURL(blob);
  }

  const currentTime = ref(store.state.player.currentTime)
  const currentTimeStore = computed(() => store.state.player.currentTime)
  watch(currentTimeStore, () => {
    currentTime.value = currentTimeStore.value
  })

  watch(currentTime, () => {
    store.dispatch('currentTime', currentTime.value)
  })

  watch(track, () => {
    playerKey.value += 1
  })

  function play() {
    store.dispatch('play')
  }

  function pause() {
    store.dispatch('pause')
  }

  const currentTimeInMinutes = computed(() => {
    return convertToMinutes(currentTime.value)
  })

  const currentTimeInPercent = computed(() => {
    return (currentTime.value / duration.value) * 100
  })

  const remainingTimeInMinutes = computed(() => {
    return '-' + convertToMinutes(duration.value - currentTime.value)
  })

  // TODO: fix the subtraction of 1 on a 100th value 😅
  const remainingTimeInPercent = computed(() => {
    return 1 - ((currentTime.value / duration.value) * 100)
  })

  function replay() {
    store.dispatch('replay')
  }

  function forward() {
    store.dispatch('forward')
  }

  function convertToMinutes(number) {
    const minute = Math.floor(number / 60)
    const seconds = (number % 60 < 10) ?
        '0' + Math.floor(number) % 60 :
        Math.floor(number) % 60

    return `${minute}:${seconds}`
  }

  // Key to remount MediaPlayer component
  const playerKey = ref(0)

  function openMiniPlayer() {
    ipcRenderer.send('mini-player')
  }

</script>

<style scoped>

  #trackElapsed::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 6px;
    height: 8px;
    background: rgb(235,235,235);
    cursor: pointer;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    transform: translateY(-2px) translateX(0.5px);
    border-top: 1px solid #4D4D4D;
    border-left: 1px solid #4D4D4D;
    border-right: 1px solid #4D4D4D;
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  #volume::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background: #2C2C2C;
    cursor: pointer;
    border-radius: 100%;
    border: 1.5px solid #5F5F5F;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .custom-group:hover > #trackElapsed::-webkit-slider-thumb {
    opacity: 100%;
  }

</style>