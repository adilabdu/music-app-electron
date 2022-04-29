<template>

  <section class="flex flex-col gap-[15px] my-[30px] min-w-0">

    <div class="flex justify-between items-center w-full px-[40px]">
      <h2 class="text-[17px] font-semibold">{{ title }}</h2>
      <a href="#" class="text-[15px] hover:underline text-[#FF8400]">See All</a>
    </div>

    <div class="flex w-full items-center justify-center gap-2 h-48" v-if="loading">

      <div class="w-2 h-2 rounded-full bg-white animate-[bounce_750ms_infinite]"></div>
      <div class="w-2 h-2 rounded-full bg-white animate-[bounce_750ms_50ms_infinite]"></div>
      <div class="w-2 h-2 rounded-full bg-white animate-[bounce_750ms_100ms_infinite]"></div>

    </div>

    <div v-else id="albumCarousel" class="flex flex-row flex-nowrap lg:px-[40px] lg:grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[7.5px] lg:gap-[15px] lg:!w-full min-w-0 overflow-x-auto overflow-y-hidden"
         :style="{ width: carouselWidth + 'px' }">
      <div class="min-w-[25px] lg:hidden">&nbsp;</div>
        <slot />
      <div class="min-w-[25px] lg:hidden">&nbsp;</div>
    </div>

  </section>

</template>

<script>

  import { onMounted, watch, ref } from "vue"
  import { useWindowSize } from "@vueuse/core"

  export default {
    name: "AlbumCarousel",
    props: {
      title: {
        required: true,
        type: String
      },
      loading: {
        type: Boolean
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