<template>

  <ContentPage page-title="Artists">

    <FTable :data="data">
      <FRow :show="'firstName'" />
    </FTable>

  </ContentPage>

</template>

<script setup>

  import ContentPage from "../components/ContentPage.vue";
  import FTable from "../test/FTable.vue";
  import FRow from "../test/FRow.vue"

  const data = [
    { firstName: 'John', lastName: 'Lennon', instrument: 'Guitar', birthday: '04/10/1940', songs: 72 },
    { firstName: 'Paul', lastName: 'McCartney', instrument: 'Bass', birthday: '18/06/1942', songs: 70 },
    { firstName: 'George', lastName: 'Harrison', instrument: 'Guitar', birthday: '25/02/1943', songs: 22 },
    { firstName: 'Ringo', lastName: 'Starr', instrument: 'Drums', birthday: '07/07/1940', songs: 2 },
  ]

</script>

<style scoped>

</style>