<template>

  <div class="flex items-center gap-3 w-full focus:bg-[#FFFFFF1A] rounded-md p-[10px] text-[13px] font-light"
       :class="playing ? 'bg-[#FFFFFF1A]' : ''">
    <img class="w-[40px] h-[40px] rounded-sm" :src="track.artwork" />
    <div class="grow flex flex-col justify-start gap-1 max-w-[60%]">
      <p class="text-[#FFFFFFEB] leading-[1.05] truncate">{{ track.title }}</p>
      <p class="text-[#FFFFFFA3] leading-[1.05] truncate">{{ track.artist }}</p>
    </div>
    <p class="w-[40px] text-[#FFFFFFA3] text-right">{{ track.duration }}</p>
  </div>

</template>

<script setup>

  const props = defineProps({
    track: {
      type: Object,
      required: true
    },
    playing: {
      type: Boolean,
      default: false
    }
  })

</script>

<style scoped>

</style>