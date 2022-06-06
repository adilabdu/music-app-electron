<template>

  <ContentPage page-title="Browse">

    <AlbumCarousel :add-function="true" title="Local Files">

      <template #function>
        <AddLocationFunction />
        <UpdateLibraryFunction />
      </template>

    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import ContentPage from '../components/ContentPage.vue';
  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AddLocationFunction from "../views/AddLocationFunction.vue";
  import UpdateLibraryFunction from "../views/UpdateLibraryFunction.vue";

</script>

<style scoped>

</style>