<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 301 301" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="9" width="119.615" height="119.615" rx="21" :stroke="stroke['color']" :stroke-width="!! stroke['width'] ? stroke['width'] : 18"/>
    <rect x="171.615" y="9" width="119.615" height="119.615" rx="21" :stroke="stroke['color']" :stroke-width="!! stroke['width'] ? stroke['width'] : 18" stroke-linejoin="round"/>
    <rect x="9" y="171.615" width="119.615" height="119.615" rx="21" :stroke="stroke['color']" :stroke-width="!! stroke['width'] ? stroke['width'] : 18"/>
    <rect x="171.615" y="171.615" width="119.615" height="119.615" rx="21" :stroke="stroke['color']" :stroke-width="!! stroke['width'] ? stroke['width'] : 18"/>
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