<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 103 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="41.2593" width="11.2593" height="79" rx="5" transform="rotate(-90 24 41.2593)"/>
    <rect x="24" y="70.963" width="11.963" height="79" rx="5" transform="rotate(-90 24 70.963)"/>
    <rect x="24" y="12.6667" width="12.6667" height="79" rx="5" transform="rotate(-90 24 12.6667)"/>
    <rect y="13" width="13" height="13" rx="5" transform="rotate(-90 0 13)"/>
    <rect y="42" width="13" height="13" rx="5" transform="rotate(-90 0 42)"/>
    <rect y="72" width="13" height="13" rx="5" transform="rotate(-90 0 72)"/>
  </svg>


</template>

<script setup>

import { computed } from "vue"

const props = defineProps({
  styles: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 24
  }
})

const height = computed(() => props.width * (72 / 103))

</script>

<style scoped>

</style>