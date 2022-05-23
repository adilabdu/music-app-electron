<template>

  <div v-if="!loading" class="tracklist-table flex flex-col w-full min-h-[36px] px-[40px] my-[40px]">

    <TableRow v-for="track in data" :track="track" />

  </div>

</template>

<script setup>

  import TableRow from "./TableRow.vue"

  // TODO: props to take in data to render into table
  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  })

</script>

<style scoped>

  .tracklist-table .track:nth-child(odd) {
    @apply bg-[#252525];
  }

  .icons:hover .playing-icon {
    @apply opacity-0;
  }

  .icons:hover .pause-icon {
    @apply opacity-100;
  }

</style>