<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 367 330" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="75" width="36" height="210" rx="5" transform="rotate(-90 0 75)"/>
    <rect y="144" width="36" height="210" rx="5" transform="rotate(-90 0 144)"/>
    <rect y="213" width="36" height="210" rx="5" transform="rotate(-90 0 213)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M307.906 8.84338C256.654 20.3487 259.321 19.5534 255.421 24.5099C252.16 28.6558 252.063 31.6019 252.063 126.604V224.429L248.256 228.685C245.189 232.112 240.118 233.919 222.199 237.97C185.018 246.377 171.754 256.223 167.808 278.347C160.77 317.797 200.95 342.451 239.866 322.559C254.267 315.198 264.112 303.459 268.908 287.931C272.199 277.274 272.37 272.573 272.37 192.475C272.37 114.688 272.597 107.966 275.331 104.775C277.651 102.066 287.26 99.375 319.733 92.3371C348.485 86.1063 362.114 82.4156 364.248 80.2818C367.057 77.4727 367.277 74.1729 366.805 41.9396C366.337 10.0567 365.978 6.32876 363.064 3.11356C358.502 -1.92246 353.611 -1.4148 307.906 8.84338Z"/>
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

const height = computed(() => props.width * (330 / 367))

</script>

<style scoped>

</style>