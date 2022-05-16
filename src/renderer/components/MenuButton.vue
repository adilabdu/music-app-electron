<template>

  <div ref="element" @click="open"
      :class="[menuOpened ? 'bg-opacity-40' : '']"
      class="relative flex items-center justify-center
              gap-[0.2rem] m-2 w-8 h-8 rounded-full bg-white
              group-hover:bg-opacity-40 bg-opacity-0
              hover:!bg-opacity-100 hover:bg-[#FF8400]">

    <div :class="menuOpened ? 'opacity-100' : 'opacity-0'" class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>
    <div :class="menuOpened ? 'opacity-100' : 'opacity-0'" class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>
    <div :class="menuOpened ? 'opacity-100' : 'opacity-0'" class="w-[0.3rem] h-[0.3rem] rounded-full bg-white group-hover:opacity-100 opacity-0"></div>

  </div>

</template>

<script setup>

  import { ref } from "vue"
  import { useElementBounding } from "@vueuse/core"

  const element = ref()
  const bounding = useElementBounding(element)

  const props = defineProps({
    menuOpened: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['open'])
  function open() {
    emit('open', bounding)
  }

</script>

<style scoped>

</style>