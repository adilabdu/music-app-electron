<template>

    <ContextMenu :style="menuStyle" @hovered="menuHovered" @clicked="chooseMenuAction" class="" :items="menuItems" :open="open" />
    <ContextMenu
        @leftComponent="playlistMenuLeft"
        @clicked="addToPlaylist"
        v-if="!loading && playlistMenuOpened==='Add to Playlist'"
        :style="playlistMenuStyle"
        :items="addToPlaylistMenuItems"
        :open="open" />

</template>

<script setup>

  import { onMounted, ref, computed } from "vue";
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

  const renderPosition = computed(() => store.state.menu.contextMenuPosition)
  const overflow_x = computed(() => (renderPosition.value.width - renderPosition.value.x) < 350)
  const overflow_y = computed(() => (renderPosition.value.y) <= 225)

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
        name: 'PlayNextIcon',
        props: {
          width: 14,
          fill: '#FFFFFFA3',
          stroke: {
            width: 35,
            color: '#FFFFFFA3'
          }
        }
      }
    },
    {
      title: 'Play Later',
      icon: {
        name: 'PlayNextIcon',
        props: {
          width: 14,
          class: 'scale-y-[-1]',
          fill: '#FFFFFFA3',
          stroke: {
            width: 35,
            color: '#FFFFFFA3'
          }
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
  const menuStyle = {
    transform: overflow_y.value ? 'translateY(100%)': 'translateY(0%)',
    top: (renderPosition.value.y - (menuItems.length * 34)) + 'px',
    left: (renderPosition.value.x - 200) + 'px'
  }

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
  const playlistMenuStyle = {
    transform: `translate(${overflow_x.value ? '-100%' : '100%'}, 0%)`,
    top: overflow_y.value ? (renderPosition.value.y) + 'px' : (renderPosition.value.y - (menuItems.length * 34)) + 'px',
    left: (renderPosition.value.x - 200) + 'px'
  }

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

  function chooseMenuAction(menuItem) {

    switch(menuItem) {

      case 'Play Next':
        store.dispatch('addToQueueTop', store.state.album.currentAlbum.tracklist)
        break;
      case 'Play Later':
        store.dispatch('addToQueueBottom', store.state.album.currentAlbum.tracklist)
        break;
      default:

    }

  }

  function addToPlaylist(menuItem) {

    try {

      const playlist_id = window.api.Playlist.where({ name: menuItem }).id
      const tracks_id = []

      store.state.album.currentAlbum.tracklist.forEach(track => {
        const track_id = window.api.Track.where({ location: track.location }).id
        tracks_id.push(track_id)
      })

      console.log(`Track IDs found: ${tracks_id}`)
      window.api.Playlist.addTrack(playlist_id, tracks_id)

    } catch (error) {

      console.log('Error occurred while populating Playlist', { error })

    }

  }

</script>

<style scoped>

</style>