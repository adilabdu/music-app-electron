<template>

  <main class="min-h-screen grow w-full text-white max-w-[1600px]" style="padding: 24px 0 0 0;">

    <h1 class="text-[34px] text-[#EFEFEF] font-semibold capitalize mb-[6px] px-[40px]">{{ pageTitle }}</h1>
    <div class="px-[40px]">
      <hr class="border-[#3B3B3B] border-t-[1px]">
    </div>

    <slot />

    <!-- Fixes the issue of overflow-auto on flex items-->
    <div class="w-full border-2 border-[rgba(0,0,0,0)]" />

  </main>

</template>

<script>

  export default {

    name: "ContentPage",
    props: {
      pageTitle: {
        type: String
      }
    },
    setup() {

    }

  }

</script>

<style scoped>

</style>