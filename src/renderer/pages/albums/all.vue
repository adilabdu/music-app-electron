<template>

  <ContentPage page-title="Albums">

    <AlbumCarousel :display="24" :loading="loading">

      <AlbumCard v-for="album in albums" :album-info="{ id: album.id, title: album.title, artist: album.artist.name, artwork: album.artwork, tracks: null, }"  />

    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import { onMounted, ref } from "vue";

  import ContentPage from "../../components/ContentPage.vue";
  import AlbumCarousel from "../../components/AlbumCarousel.vue";
  import AlbumCard from "../../components/AlbumCard.vue";

  const albums = ref()
  const loading = ref(true)

  onMounted(() => {

    albums.value = window.api.Album.all()
    loading.value = false
    console.log("All albums:", albums.value)
    console.log("Tracklist:", window.api.Track.tracklist(2))

  })


</script>

<style scoped>

</style>