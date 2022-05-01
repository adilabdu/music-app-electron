<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 312 1512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 1506L306 756L6 6" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
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
  },
  stroke: {
    type: Object
  }
})

const height = computed(() => props.width * (1512 / 312))

</script>

<style scoped>

</style>