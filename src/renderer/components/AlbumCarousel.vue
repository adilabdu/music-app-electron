<template>

  <section class="flex flex-col gap-[15px] my-[30px] min-w-0 album-card">

    <div v-if="!!title" class="flex justify-between items-center w-full px-[40px]">
      <h2 class="text-[17px] font-semibold">{{ title }}</h2>
      <a href="#" class="text-[15px] hover:underline text-[#FF8400]">See All</a>
    </div>

    <div id="albumCarousel" class="relative flex flex-row flex-nowrap lg:px-[40px] lg:grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[7.5px] lg:gap-[15px] lg:!w-full min-w-0 overflow-x-auto overflow-y-hidden"
         :style="{ width: carouselWidth + 'px' }">

      <div v-if="available.prev" @click="previous" class="overflow-hidden paginator flex items-center justify-center absolute z-10 w-0 overflow-hidden lg:w-[40px] h-full cursor-pointer transition duration-300">
        <PreviousIcon class="paginator-button" :class="'opacity-0 transition duration-300'" :width="8" :stroke="{width: 30, color: 'white'}" />
      </div>
      <div class="min-w-[25px] lg:hidden">&nbsp;</div>

      <slot name="function" />

      <LoadingCard v-for="i in display" v-if="loading" />
      <slot v-else />

      <div v-if="available.next" @click="next" class="overflow-hidden paginator flex items-center justify-center absolute right-0 z-10 w-0 overflow-hidden lg:w-[40px] h-full cursor-pointer transition duration-300">
        <NextIcon class="paginator-button" :class="'opacity-0 transition duration-300'" :width="8" :stroke="{width: 30, color: 'white'}" />
      </div>
      <div class="min-w-[25px] lg:hidden">&nbsp;</div>
    </div>

  </section>

</template>

<script>

  import { onMounted, watch, ref } from "vue"
  import { useWindowSize } from "@vueuse/core"

  import LoadingCard from "./LoadingCard.vue";
  import FunctionCard from "./FunctionCard.vue"
  import NextIcon from "./Icons/next.vue"
  import PreviousIcon from "./Icons/prev.vue"

  export default {
    name: "AlbumCarousel",
    components: {
      LoadingCard,
      NextIcon,
      PreviousIcon,
      FunctionCard
    },
    emits: ['next', 'prev'],
    props: {
      title: {
        default: null,
        type: String
      },
      loading: {
        type: Boolean
      },
      display: {
        type: Number,
        default: 6
      },
      available: {
        type: Object,
        default: {
          'prev': false,
          'next': false
        }
      },
      addFunction: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {

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

      function previous() {
        emit('previous')
      }

      function next() {
        emit('next')
      }

      watch(width, () => {
        setCarouselWidth()
      })

      return { carouselWidth, previous, next }

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

  .paginator:hover > .paginator-button {
    @apply stroke-white stroke-[60] scale-125;
  }

  .album-card:hover .paginator-button {
    @apply opacity-100;
  }

</style>