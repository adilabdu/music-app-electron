<template>

  <div class="flex w-full h-[270px] justify-start px-[40px] px-[40px]">

    <div class="w-[270px]">
      <img alt="Album Artwork" v-if="!! album.artwork" :src="album.artwork" class="w-full aspect-square rounded-md" />
      <div v-else class="w-full aspect-square rounded-md bg-[#4D4D4D] bg-opacity-50 transition-colors duration-300 flex items-center justify-center">
        <TrackIcon :width="56" :class="'fill-[#818181]'" />
      </div>
    </div>

    <div class="grow flex flex-col justify-between items-start pl-[34px] py-[5px]">

      <div class="mt-[79.5px] flex flex-col justify-end items-start gap-2">

        <h1 class="font-medium text-[26px] text-[#FFFFFFEB] leading-none"> {{ !! album.title ? album.title : '' }} </h1>
        <h1 class="font-light text-[26px] text-[#FF8400] leading-none"> {{ !! album.artist ? album.artist : '' }} </h1>
        <h3 class="text-[12px] text-[#FFFFFFA3] leading-none font-medium uppercase">{{ allGenres }}</h3>

      </div>

      <div class="flex w-full justify-between">

        <div class="buttons flex gap-4">
          <button class="h-[28px] rounded-md bg-[#FF8400] px-[28px] text-[13px] font-medium flex items-center justify-center gap-2">
            <PlayIcon :width="10" :class="'fill-[#FFFFFF]'" />
            Play
          </button>
          <button class="h-[28px] rounded-md bg-[#FF8400] px-[28px] text-[13px] font-medium flex items-center justify-center gap-2">
            <PlayIcon :width="10" :class="'fill-[#FFFFFF]'" />
            Shuffle
          </button>
        </div>

        <button class="h-full aspect-square rounded-full bg-[#FF8400] bg-opacity-10 flex gap-0.5 items-center justify-center">
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
        </button>

      </div>

    </div>

  </div>

</template>

<script setup>

  import { onMounted, ref, computed, watch } from "vue";

  import PlayIcon from "./Icons/play.vue";
  import TrackIcon from "./Icons/track.vue";

  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  })

  const genres = ref()
  onMounted(() => {
    genres.value = window.api.Album.genres(props.album['id']).map(genre => {
      return genre.name
    })
  })

  const allGenres = ref()

  watch(genres, () => allGenres.value = genres.value.join(" • "))

</script>

<style scoped>

</style>