<template>

  <Layout>
    <main class="grow w-full text-white max-w-[1600px]" style="padding: 24px 0;">

    <h1 class="text-[34px] text-[#EFEFEF] font-semibold capitalize mb-[6px] px-[40px]">{{ pageTitle }}</h1>
    <div class="px-[40px]">
      <hr class="border-[#3B3B3B] border-t-[1px]">
    </div>

    <slot />

  </main>
  </Layout>

</template>

<script>

  import Layout from "../layouts/default.vue"

  export default {

    name: "ContentPage",
    components: {
      Layout
    },
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