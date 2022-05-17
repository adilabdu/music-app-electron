<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 352 315" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="17.1404" y1="302.5" x2="338.992" y2="302.5" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
    <line x1="16.5" y1="210.291" x2="338.352" y2="210.291" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
    <line x1="225.14" y1="118.709" x2="338.884" y2="118.709" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
    <line x1="224.5" y1="26.5" x2="338.244" y2="26.5" :stroke="stroke['color']" :stroke-width="stroke['width']" stroke-linecap="round"/>
    <path d="M18 123V99C18 84.8579 18 77.7868 22.3934 73.3934C26.7868 69 33.8579 69 48 69H171" :stroke="stroke['color']" :stroke-width="stroke['width'] * 1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M197.127 64.824C199.978 66.814 199.978 71.0336 197.127 73.0236L125.362 123.125C122.048 125.439 117.5 123.067 117.5 119.025L117.5 18.8226C117.5 14.7803 122.048 12.4089 125.362 14.7228L197.127 64.824Z" :fill="fill"/>
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
    },
    fill: {
      type: String
    }
  })

  const height = computed(() => props.width * (315 / 352))

</script>

<style scoped>

</style>