<template>

  <ContentPage>

    <AlbumBigCard :album="album" />
    <Table :data="tracklist" />

  </ContentPage>

</template>

<script setup>

  import { computed } from "vue"

  import ContentPage from "../components/ContentPage.vue";
  import AlbumBigCard from "../components/AlbumBigCard.vue";
  import Table from "../components/Table.vue";

  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  })

  const tracklist = computed(() => props.album.tracklist.map((track, index) => {
    return {
      0: track['track_position'],
      1: track.title,
      2: (track.artist === props.album.artist) ? '' : track.artist,
      3: track.duration,
      4: track.location,
      5: index
    }
  }))

</script>

<style scoped>

</style>