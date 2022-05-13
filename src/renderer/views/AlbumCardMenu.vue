<template>

  <ContextMenu class="" :items="menuItems" :open="opened" @close="close" />

</template>

<script setup>

  import { ref } from "vue"
  import ContextMenu from "../components/ContextMenu.vue"

  const emit = defineEmits(['clicked'])
  const props = defineProps({
  })

  const menuItems = [
    {
      title: 'Add to Playlist',
      icon: {
        name: 'PlaylistIcon',
        props: {
          width: 16,
          class: 'fill-[#FFFFFFA3]'
        }
      }
    },
    {
      title: 'Love',
      icon: {
        name: 'HeartIcon',
        props: {
          width: 16,
          stroke: { color: '#FFFFFFA3', width: 30 },
        }
      }
    },
    {
      title: 'Add to Library',
      icon: {
        name: 'PlusIcon',
        props: {
          width: 16,
          class: 'fill-[#FFFFFFA3]'
        }
      }
    },
  ]

  const opened = ref(false)
  function openMenu() {
    opened.value = true
    emit('opened')
  }

</script>

<style scoped>

</style>