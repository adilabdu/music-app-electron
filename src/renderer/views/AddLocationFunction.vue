<template>

  <FunctionCard @clicked="getDirectory" class="function-card" :function-info="{ name: 'Add Location', description: 'Add a local location to populate your music library.' }">

    <template #icon>
      <PlusIcon class="function-icon" :width="48" :class="'fill-[#818181]'" />
    </template>

  </FunctionCard>

</template>

<script setup>

  import FunctionCard from "../components/FunctionCard.vue";
  import PlusIcon from "../components/Icons/plus.vue";

  function getDirectory() {
    
  }

</script>

<style scoped>

  .function-card:hover .function-icon {
    @apply fill-[#4D4D4D] transition duration-300;
  }

</style>