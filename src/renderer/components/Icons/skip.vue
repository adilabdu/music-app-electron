<template>

  <svg class="cursor-pointer" :class="styles" :width="width" :height="height" viewBox="0 0 170 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M92.5 45.6699C95.8333 47.5944 95.8333 52.4056 92.5 54.3301L32.5 88.9711C29.1667 90.8956 25 88.49 25 84.641L25 15.359C25 11.51 29.1667 9.10436 32.5 11.0289L92.5 45.6699Z"/>
    <path d="M162.5 45.6699C165.833 47.5944 165.833 52.4056 162.5 54.3301L102.5 88.9711C99.1667 90.8956 95 88.49 95 84.641L95 15.359C95 11.51 99.1667 9.10436 102.5 11.0289L162.5 45.6699Z"/>
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

const height = computed(() => props.width * (10 / 17))

</script>

<style scoped>

</style>