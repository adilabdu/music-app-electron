<template>

  <FunctionCard @click="runDatabasePopulation" class="function-card" :function-info="{ name: 'Add Location', description: 'Import your music library.' }">

    <template #icon>
      <PlusIcon class="function-icon" :width="48" :class="'fill-[#818181]'" />
    </template>

  </FunctionCard>

</template>

<script setup>

  import FunctionCard from "../components/FunctionCard.vue";
  import PlusIcon from "../components/Icons/plus.vue";

  function runDatabasePopulation() {
    console.log('Initiate Database Population...')
    window.io.runDatabasePopulation().then()
    console.log('Database Population done.')
  }

</script>

<style scoped>

  .function-card:hover .function-icon {
    @apply fill-[#4D4D4D] transition duration-300;
  }

</style>