<template>

  <div ref="trackSmallCard" draggable="true" class="flex items-center gap-3 w-full focus:bg-[#FFFFFF1A] rounded-md p-[10px] text-[13px] font-light"
       :class="[playing ? 'bg-[#FFFFFF1A]' : '', draggingStyle]">
    <img loading="lazy" class="w-[40px] h-[40px] rounded-sm" :src="track.album.artwork" />
    <div class="cursor-move grow flex flex-col justify-start gap-1 max-w-[60%]">
      <p class="text-[#FFFFFFEB] leading-[1.05] truncate">{{ track.title }}</p>
      <p class="text-[#FFFFFFA3] leading-[1.05] truncate">{{ track.artist }}</p>
    </div>
    <p class="w-[40px] text-[#FFFFFFA3] text-right">{{ track.duration }}</p>
  </div>

</template>

<script setup>

  import { ref, onMounted, computed } from "vue"
  import store from "../store/index"

  const props = defineProps({
    index: {
      type: Number
    },
    track: {
      type: Object,
      required: true
    },
    playing: {
      type: Boolean,
      default: false
    }
  })

  const trackSmallCard = ref()
  const draggedCard = computed(() => store.state.ui.draggedCard)
  const draggingStyle = ref('')
  const position = ref('')

  onMounted(() => {

    trackSmallCard.value.addEventListener('dragstart', () => {
      draggingStyle.value = 'opacity-50'
      store.dispatch('setDraggedCard', props.index)
    })

    trackSmallCard.value.addEventListener('dragend', () => {
      draggingStyle.value = 'opacity-100'
    })

    trackSmallCard.value.addEventListener('dragover', (e) => {

      e.preventDefault()
      return false
    })

    trackSmallCard.value.addEventListener('drop', (e) => {

      store.dispatch('repositionTrackInQueue',
          { to: props.index, from: draggedCard.value })
      e.preventDefault()
    })

  })

</script>

<style scoped>

</style>