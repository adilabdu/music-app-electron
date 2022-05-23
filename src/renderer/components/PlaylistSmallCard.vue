<template>

  <RouterLink :to="link" class="cursor-pointer h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
    <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
    <label class="truncate cursor-pointer">{{ playlist.name }}</label>
  </RouterLink>

</template>

<script setup>

  import PlaylistIcon from "./Icons/playlist.vue"

  const props = defineProps({
    playlist: {
      type: Object,
      required: true
    }
  })

  const link = `/playlists/${window.api.Playlist.where({ name: props.playlist.name }).id}`

</script>

<style scoped>

</style>