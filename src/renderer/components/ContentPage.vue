<template>

  <main class="grow w-full text-white max-w-[1600px]" style="margin: 40px 0 0 0;">

    <h1 v-if="!! pageTitle" class="text-[34px] text-[#EFEFEF] font-semibold capitalize mb-[6px] px-[40px]">{{ pageTitle }}</h1>
    <div v-if="!! pageTitle" class="px-[40px]">
      <hr class="border-[#3B3B3B] border-t-[1px]">
    </div>

    <div v-if="loading" class="justify-center items-center flex w-full"
         :class="!! pageTitle ? 'h-[calc(100vh-(55px+40px+40px+51px))]' : 'h-[calc(100vh-(55px+40px+40px))]'">
      <LoadingIcon :width="40" :class="'fill-[#818181] animate-[spin_2s_linear_infinite]'" />
    </div>

    <div :class="loading ? 'hidden' : ''">
      <slot />
    </div>

    <!-- Fixes the issue of overflow-auto on flex items-->
    <div class="w-full border-2 border-[rgba(0,0,0,0)]" />

  </main>

</template>

<script>

  import LoadingIcon from "./Icons/loading.vue"

  export default {

    name: "ContentPage",
    components: {
      LoadingIcon
    },
    props: {
      pageTitle: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup() {

    }

  }

</script>

<style scoped>

</style>