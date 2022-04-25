<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="25" height="80" rx="5"/>
    <rect x="35" width="25" height="80" rx="5"/>
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

const height = computed(() => props.width * (8 / 6))

</script>

<style scoped>

</style>