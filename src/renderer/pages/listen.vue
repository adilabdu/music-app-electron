<template>

  <ContentPage page-title="Listen Now">

    <DeezerPlaylist :playlistID="'658600625'" :title="'New Releases'" />
    <DeezerPlaylist :playlistID="'2098157264'" :title="'Hits of the Moment'" />
    <DeezerPlaylist :playlistID="'7662551722'" :title="'2010\'s Raps'" />
    <DeezerPlaylist :playlistID="'1677006641'" :title="'Hip-Hop Hits'" />

  </ContentPage>

</template>

<script setup>

  import ContentPage from '../components/ContentPage.vue';
  import DeezerPlaylist from "../views/DeezerPlaylist.vue"

</script>

<style scoped>

</style>