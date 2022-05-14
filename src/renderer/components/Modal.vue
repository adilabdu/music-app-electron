<template>

  <div @click="close" v-if="display" class="z-[60] fixed w-full h-screen">

    <AlbumCardMenu :open="true" />

  </div>

</template>

<script setup>

  import { computed } from "vue"
  import store from "../store/index"

  import AlbumCardMenu from "../views/AlbumCardMenu.vue"

  const display = computed(() => store.state.ui.modalOpened)

  function close() {
    store.dispatch('toggleModalView')
  }

</script>

<style scoped>

</style>