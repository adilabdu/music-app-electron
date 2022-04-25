<template>

  <svg :class="styles" :width="width" :height="height" viewBox="0 0 70 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M67.5 35.6699C70.8333 37.5944 70.8333 42.4056 67.5 44.3301L7.5 78.9711C4.16667 80.8956 0 78.49 0 74.641L0 5.35899C0 1.50998 4.16667 -0.895644 7.5 1.02886L67.5 35.6699Z"/>
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

  const height = computed(() => props.width * (8 / 7))

</script>

<style scoped>

</style>