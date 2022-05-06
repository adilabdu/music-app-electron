<template>

  <svg class="cursor-pointer" :class="styles" :width="width" :height="height" viewBox="0 0 377 326" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.7362 38.7362C30.5768 46.8954 24.1044 56.5819 19.6886 67.2426C15.2728 77.9032 13 89.3293 13 100.868C13 112.407 15.2728 123.833 19.6886 134.494C24.1044 145.155 30.5768 154.841 38.7362 163L188.736 313L338.735 163C355.214 146.522 364.471 124.172 364.471 100.868C364.471 77.5642 355.214 55.2146 338.735 38.7362C322.257 22.2577 299.907 13.0002 276.603 13.0002C253.299 13.0002 230.95 22.2577 214.471 38.7362L188.736 64.4716L163 38.7362C154.841 30.5768 145.155 24.1044 134.494 19.6886C123.833 15.2728 112.407 13 100.868 13C89.3293 13 77.9032 15.2728 67.2426 19.6886C56.5819 24.1044 46.8954 30.5768 38.7362 38.7362V38.7362Z" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round" stroke-linejoin="round"/>
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
    type: Object,
    default: {
      color: '#FF8400',
      width: 25
    }
  }
})

const height = computed(() => props.width * (326 / 377))

</script>

<style scoped>

</style>