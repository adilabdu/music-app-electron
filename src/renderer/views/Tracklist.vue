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

  const tracklist = !! props.album['tracklist'] ? props.album['tracklist'].map((track) => {
    return {
      0: !! track['track_position'] ? track['track_position'] : '',
      1: !! track.title ? track.title : '',
      2: !! (track['contributing_artist'] && props.album['artist']) ?
          (track['contributing_artist'] === props.album['artist'] ?
          '' :
          track['contributing_artist']) : '',
      3: !!track.duration ? toMinutes(track.duration) : '',
    }
  }) : [
    {
      0: 1,
      1: props.album['title'],
      2: props.album['artist'],
      3: ''
    }
  ]

  function toMinutes(number) {
    return `${Math.floor(number / 60)}:${(number % 60) > 9 ? (number % 60) : '0' + (number % 60)}`
  }

</script>

<style scoped>

</style>