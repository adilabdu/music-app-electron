<template>

  <ContextMenu class="" :items="menuItems" :open="open" />

  <ContextMenu v-if="!loading" :position="'translate-x-full'" :items="addToPlaylistMenuItems" :open="open" />

</template>

<script setup>

  import { onMounted, ref } from "vue";
  import ContextMenu from "../components/ContextMenu.vue"

  const emit = defineEmits(['close'])
  const props = defineProps({
    open: {
      type: Boolean,
      default: false
    }
  })

  const loading = ref(true)
  onMounted(() => {
    const userPlaylists = window.api.Playlist.all()
    userPlaylists.forEach(playlist => {
      addToPlaylistMenuItems.push({
        title: playlist.name,
        icon: {
          name: 'PlaylistIcon',
          props: {
            width: 16,
            class: 'fill-[#FFFFFFA3]'
          }
        }
      })
    })
    loading.value = false
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

  const addToPlaylistMenuItems = [
    {
      title: 'New Playlist',
      icon: {
        name: 'PlusIcon',
        props: {
          width: 16,
          class: 'fill-[#FFFFFFA3]'
        }
      }
    },
  ]

  function close() {
    emit('close')
  }

</script>

<style scoped>

</style>