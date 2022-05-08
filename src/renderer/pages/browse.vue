<template>

  <ContentPage page-title="Browse">

    <AlbumCarousel :add-function="true" title="Local Files">

      <template #function>
        <AddLocationFunction />
      </template>

    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import { onMounted, ref, watch } from "vue";

  import ContentPage from '../components/ContentPage.vue';
  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AlbumCard from "../components/AlbumCard.vue";
  import AddLocationFunction from "../views/AddLocationFunction.vue";

  const library = ref([])
  const loading = ref(true)

  // onMounted(() => {
  //
  //   // TODO: readDatabase() first, if no data returned do: readLibrary()
  //
  //   window.io.readLibrary().then((result) => {
  //     library.value = result
  //   }).catch((e) => {
  //     console.log('Error while fetching local library:', e)
  //   }).finally(loading.value = false)
  //
  // })
  //
  // function albumCardData(data) {
  //   return {
  //     title: data.album.title,
  //     artist: data.artist.name,
  //     artwork: data.album['cover_medium'] ? data.album['cover_medium'] : '',
  //     tracklist: [
  //       {
  //         title: data.title,
  //         location: data.preview,
  //         duration: data.duration
  //       }
  //     ]
  //   }
  //
  // }

</script>

<style scoped>

</style>