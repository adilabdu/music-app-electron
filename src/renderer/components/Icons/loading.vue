<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 276 275" fill="none" xmlns="http://www.w3.org/2000/svg">

    <rect x="121.333" y="200" width="33.3333" height="75" rx="16.6667" :fill-opacity="(100-(7*12.5))/100"/>
    <rect x="82.0205" y="169.909" width="33.3333" height="75" rx="16.6667" transform="rotate(45 82.0205 169.909)" :fill-opacity="(100-(6*12.5))/100"/>
    <rect x="0.5" y="154.167" width="33.3333" height="75" rx="16.6667" transform="rotate(-90 0.5 154.167)"  :fill-opacity="(100-(5*12.5))/100"/>
    <rect x="28.9875" y="52.0579" width="33.3333" height="75" rx="16.6667" transform="rotate(-45 28.9875 52.0579)"  :fill-opacity="(100-(4*12.5))/100"/>
    <rect x="121.333" width="33.3333" height="75" rx="16.6667" :fill-opacity="(100-(3*12.5))/100"/>
    <rect x="223.442" y="28.4877" width="33.3333" height="75" rx="16.6667" transform="rotate(45 223.442 28.4877)"  :fill-opacity="(100-(2*12.5))/100"/>
    <rect x="200.5" y="154.167" width="33.3333" height="75" rx="16.6667" transform="rotate(-90 200.5 154.167)" :fill-opacity="(100-(12.5))/100"/>
    <rect x="170.409" y="193.479" width="33.3333" height="75" rx="16.6667" transform="rotate(-45 170.409 193.479)"/>
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