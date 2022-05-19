<template>

  <ContentPage>

    <AlbumBigCard :album="album" />
    <Table :data="tracklist" />

  </ContentPage>

</template>

<script setup>

  import ContentPage from "../components/ContentPage.vue";
  import AlbumBigCard from "../components/AlbumBigCard.vue";
  import Table from "../components/Table.vue";

  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  })

  const tracklist = props.album['tracklist'].map((track) => {
    return {
      0: track['track_position'],
      1: track.title,
      2: (track.artist === props.album.artist) ? '' : track.artist,
      3: track.duration,
      4: track.location
    }
  })

</script>

<style scoped>

</style>