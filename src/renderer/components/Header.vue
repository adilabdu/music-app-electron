<template>

  <header class="bottom-0 sm:top-0 fixed z-50 h-[55px] bg-[#2C2C2C] flex justify-center sm:border-b-[0.25px] border-[#404040]" :style="{ width: width + 'px' }">
    <MediaPlayer :width="width" />
  </header>

  <header class="fixed sm:hidden z-50 px-[40px] h-[44px] bg-[#2C2C2C] flex items-center justify-between" :style="{ width: width + 'px' }">

    <div class="flex flex-col gap-1.5 w-5">
      <div class="w-full h-[2px] bg-[#FF8400] rounded-sm">&nbsp;</div>
      <div class="w-full h-[2px] bg-[#FF8400] rounded-sm">&nbsp;</div>
    </div>

    <div class="w-[28px] h-[28px] rounded-full bg-[#FF8400]"></div>

  </header>

  <div ref="relativeHeader" class="bg-[#2C2C2C] w-full h-[44px] sm:h-[55px]"></div>

</template>

<script setup>

  import { ref, watch } from "vue"
  import { useElementSize } from "@vueuse/core"

  import MediaPlayer from "./MediaPlayer/MediaControls.vue"

  const relativeHeader = ref()
  const { width } = useElementSize(relativeHeader)

</script>

<style scoped>

</style>