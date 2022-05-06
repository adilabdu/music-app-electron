<template>

  <ContentPage>

    <div class="flex w-full h-[270px] justify-start px-[40px] px-[40px]">

      <div class="w-[270px]">
        <img :src="album.artwork" class="w-full aspect-square rounded-md" />
      </div>

      <div class="grow flex flex-col justify-between items-start pl-[34px] py-[5px]">

        <div class="mt-[79.5px] flex flex-col justify-end items-start gap-2">

          <h1 class="font-medium text-[26px] text-[#FFFFFFEB] leading-none"> {{ album.title }} </h1>
          <h1 class="font-light text-[26px] text-[#FFFFFFA3] leading-none"> {{ album.artist }} </h1>
          <h3 class="text-[12px] text-[#FFFFFFA3] leading-none font-medium uppercase">R&B / Soul &#8226;	2018</h3>

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

    <div class="tracklist-table flex flex-col w-full min-h-[36px] px-[40px] my-[40px]">

      <div class="group hover:!bg-[#353535] track w-full rounded-md flex items-center pl-[7px] pr-[18px] text-[13px] font-light h-[46px]">

        <div class="relative flex items-center">
          <PlayIcon class="absolute ml-2 group-hover:opacity-100 opacity-0" :width="12" :class="'fill-[#FF8400]'" />
          <p class="max-w-fit pl-2 pr-6 text-center group-hover:opacity-0 opacity-100">1</p>
        </div>
        <p class="w-1/2">X</p>
        <p class="grow truncate">ScHoolboy Q, 2 Chainz, Saudi, Kendrick Lamar</p>
        <div class="w-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100">
          <PlusIcon :width="16" :class="'fill-white'" />
        </div>
        <p class="max-w-fit text-right pr-1">4:01</p>
        <div class="w-[28px] flex items-center justify-center">
          <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
        </div>

      </div>

      <div class="group hover:!bg-[#353535] track w-full rounded-md flex items-center pl-[7px] pr-[18px] text-[13px] font-light h-[46px]">

        <div class="relative flex items-center">
          <PlayIcon class="absolute ml-2 group-hover:opacity-100 opacity-0" :width="12" :class="'fill-[#FF8400]'" />
          <p class="max-w-fit pl-2 pr-6 text-center group-hover:opacity-0 opacity-100">1</p>
        </div>
        <p class="w-1/2">Opps</p>
        <p class="grow truncate">Vince Staples, Yugen Blakrok</p>
        <div class="w-[42px] flex items-center justify-center opacity-0 group-hover:opacity-100">
          <PlusIcon :width="16" :class="'fill-white'" />
        </div>
        <p class="max-w-fit text-right pr-1">22:51</p>
        <div class="w-[28px] flex items-center justify-center">
          <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
        </div>

      </div>

    </div>

  </ContentPage>

</template>

<script setup>

  import ContentPage from "../components/ContentPage.vue";
  import PlayIcon from "../components/Icons/play.vue";
  import PlusIcon from "../components/Icons/plus.vue";

  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  })

</script>

<style scoped>

  .tracklist-table .track:nth-child(odd) {
    @apply bg-[#252525];
  }

</style>