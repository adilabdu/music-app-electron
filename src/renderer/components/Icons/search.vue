<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 125 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect class="fill-[#EFEFEF]" x="76" y="85.9615" width="7" stroke-width="2" height="61.1759" rx="3.5" transform="rotate(-45 76 85.9615)"/>
    <circle cx="50" cy="50" r="46.5" stroke-width="8"/>
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

const height = computed(() => props.width * (130 / 125))

</script>

<style scoped>

</style>