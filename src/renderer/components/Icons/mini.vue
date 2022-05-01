<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 175 125" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4.5" y="4.5" width="116" height="91" rx="15.5" fill="none" :stroke="stroke['color']" :stroke-width="stroke['width']"/>
    <rect x="50" y="25" width="125" height="100" rx="20"/>
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

const height = computed(() => props.width * (125 / 175))

</script>

<style scoped>

</style>