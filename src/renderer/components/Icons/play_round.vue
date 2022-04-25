<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M195 132.679C208.333 140.377 215 144.226 215 150C215 155.774 208.333 159.623 195 167.321L142.5 197.631C129.167 205.329 122.5 209.178 117.5 206.292C112.5 203.405 112.5 195.707 112.5 180.311L112.5 119.689C112.5 104.293 112.5 96.5951 117.5 93.7083C122.5 90.8216 129.167 94.6706 142.5 102.369L195 132.679Z"/>
    <path d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150ZM25.8729 150C25.8729 218.554 81.4465 274.127 150 274.127C218.554 274.127 274.127 218.554 274.127 150C274.127 81.4465 218.554 25.8729 150 25.8729C81.4465 25.8729 25.8729 81.4465 25.8729 150Z"/>
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

  const height = computed(() => props.width)

</script>

<style scoped>

</style>