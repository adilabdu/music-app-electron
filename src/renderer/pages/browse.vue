<template>

  <ContentPage page-title="Browse">

    <AlbumCarousel :add-function="true" title="Local Files">

      <template #function>
        <AddLocationFunction @click="runDatabasePopulation" />
      </template>

    </AlbumCarousel>

  </ContentPage>

</template>

<script setup>

  import ContentPage from '../components/ContentPage.vue';
  import AlbumCarousel from "../components/AlbumCarousel.vue";
  import AddLocationFunction from "../views/AddLocationFunction.vue";

  function runDatabasePopulation() {
    console.log('Initiate Database Population...')
    window.io.runDatabasePopulation().then()
    console.log('Database Population done.')
  }

</script>

<style scoped>

</style>