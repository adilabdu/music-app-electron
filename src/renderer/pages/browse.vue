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

  import ContentPage from '../components/ContentPage.vue';
  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AddLocationFunction from "../views/AddLocationFunction.vue";

</script>

<style scoped>

</style>