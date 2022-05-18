<template>

  <ContentPage :loading="loading">

    <AlbumCarousel :display="24" :loading="loading">

      <AlbumCard v-for="album in albums" :album-info="album"  />

    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import { onMounted, ref } from "vue";

  import ContentPage from "../../components/ContentPage.vue";
  import AlbumCarousel from "../../components/AlbumCarousel.vue";
  import AlbumCard from "../../components/AlbumCard.vue";

  import Album from "../../models/albums"

  const albums = ref()
  const loading = ref(true)

  onMounted(() => {

    albums.value = window.api.Album.all().map(album => {

      return new Album({
        id: album.id,
        title: album.title,
        artist: album.artist.name,
        artwork: album.artwork,
        local: true,
        tracklist: window.api.Track.tracklist(album.id).map(track => {
          return {
            title: track.title,
            duration: track.duration,
            artist: track.contributing_artist,
            location: track.location,
            track_position: track.track_position,
            local: true
          }
        })
      })

    })

    loading.value = false

  })


</script>

<style scoped>

</style>