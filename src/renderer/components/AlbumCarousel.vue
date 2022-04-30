<template>

  <section class="flex flex-col gap-[15px] my-[30px] min-w-0">

    <div class="flex justify-between items-center w-full px-[40px]">
      <h2 class="text-[17px] font-semibold">{{ title }}</h2>
      <a href="#" class="text-[15px] hover:underline text-[#FF8400]">See All</a>
    </div>

    <div id="albumCarousel" class="flex flex-row flex-nowrap lg:px-[40px] lg:grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[7.5px] lg:gap-[15px] lg:!w-full min-w-0 overflow-x-auto overflow-y-hidden"
         :style="{ width: carouselWidth + 'px' }">
      <div class="min-w-[25px] lg:hidden">&nbsp;</div>

        <LoadingCard v-for="i in display" v-if="loading" />

        <slot v-else />

      <div class="min-w-[25px] lg:hidden">&nbsp;</div>
    </div>

  </section>

</template>

<script>

  import { onMounted, watch, ref } from "vue"
  import { useWindowSize } from "@vueuse/core"

  import LoadingCard from "./LoadingCard.vue";

  export default {
    name: "AlbumCarousel",
    components: {
      LoadingCard
    },
    props: {
      title: {
        required: true,
        type: String
      },
      loading: {
        type: Boolean
      },
      display: {
        type: Number
      }
    },
    setup() {

      onMounted(() => {
        setCarouselWidth()
      })

      const { width, height } = useWindowSize()

      const carouselWidth = ref(0)
      function setCarouselWidth() {
        carouselWidth.value = (width.value) - 259
        if(width.value < 768) {
          carouselWidth.value += 259
        }
      }

      watch(width, () => {
        setCarouselWidth()
      })

      return { carouselWidth }

    }
  }
</script>

<style scoped>

  #albumCarousel {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  #albumCarousel::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }

</style>