<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 300 370" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="49" y="14" width="202" height="202" rx="26" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linejoin="round"/>
    <rect x="31" y="49" width="237" height="237" rx="26" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linejoin="round"/>
    <rect x="14" y="84" width="272" height="272" rx="26" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linejoin="round"/>
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

const height = computed(() => props.width * (370 / 300))

</script>

<style scoped>

</style>