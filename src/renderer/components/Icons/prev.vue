<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 311 1511" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M305.5 5.5L5.5 755.5L305.5 1505.5" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
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

const height = computed(() => props.width * (1511 / 311))

</script>

<style scoped>

</style>