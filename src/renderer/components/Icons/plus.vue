<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150ZM25.8729 150C25.8729 218.554 81.4465 274.127 150 274.127C218.554 274.127 274.127 218.554 274.127 150C274.127 81.4465 218.554 25.8729 150 25.8729C81.4465 25.8729 25.8729 81.4465 25.8729 150Z"/>
    <rect x="137" y="75" width="25" height="85" rx="12.5"/>
    <rect x="140" y="160" width="25" height="85" rx="12.5" transform="rotate(-90 140 160)"/>
    <rect x="75" y="160" width="25" height="85" rx="12.5" transform="rotate(-90 75 160)"/>
    <rect x="137" y="140" width="25" height="85" rx="12.5"/>
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

const height = computed(() => props.width)

</script>

<style scoped>

</style>