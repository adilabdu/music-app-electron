<template>

    <ContextMenu :style="{ transform: 'translateY('+ 0 +'%)', top: (renderPosition.y - menuItems.length*34) + 'px', left: (renderPosition.x-200) + 'px' }" @hovered="menuHovered" class="" :items="menuItems" :open="open" />
    <ContextMenu
        @leftComponent="playlistMenuLeft"
        v-if="!loading && playlistMenuOpened==='Add to Playlist'"
        :style="{ transform: 'translateX(100%)', top: (renderPosition.y - menuItems.length*34) + 'px', left: (renderPosition.x-200) + 'px' }"
        :items="addToPlaylistMenuItems"
        :open="open" />

</template>

<script setup>

  import {onMounted, ref, computed, render} from "vue";
  import store from "../store/index"
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
      title: 'Play Next',
      icon: {
        name: 'TrackIcon',
        props: {
          width: 14,
          class: 'fill-[#FFFFFFA3]'
        }
      }
    },
    {
      title: 'Play Later',
      icon: {
        name: 'TrackIcon',
        props: {
          width: 14,
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

  const playlistMenuOpened = ref(null)
  function menuHovered(component) {
    playlistMenuOpened.value = component
  }

  function playlistMenuLeft() {
    playlistMenuOpened.value = null
  }

  function close() {
    emit('close')
  }

  const renderPosition = computed(() => store.state.menu.contextMenuPosition)
  // const menuPosition = computed(() => {
  //   let position = []
  //   if ( (renderPosition.value.width - renderPosition.value.x) < 450 ) {
  //     position.push('')
  //   }
  // })

</script>

<style scoped>

</style>