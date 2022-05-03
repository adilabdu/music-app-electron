<template>

  <article @click.prevent="clicked" class="flex flex-col min-w-[144px] cursor-pointer function-card">
    <div class="relative w-full aspect-square rounded-md bg-[#4D4D4D] bg-opacity-50 transition-colors duration-300 flex items-center justify-center function-button">
      <slot name="icon" />
    </div>
    <div class="pt-[6px] flex flex-col justify-around gap-0.5">
      <h3 class="text-[12px] text-[#EFEFEF] opacity-75 hover:underline leading-none">
        {{ functionInfo['description'] }}
      </h3>
      <h3 class="text-[12px] text-[#EFEFEF] opacity-75 leading-none bg-red-100">
      </h3>
    </div>
  </article>

</template>

<script>

  export default {
    name: "FunctionCard",
    props: {
      functionInfo: {
        required: true,
        type: Object
      }
    },
    emits: ['clicked'],
    setup(props, { emit }) {

      function clicked() {
        emit('clicked')
      }

      return { clicked }

    }
  }
</script>

<style scoped>

  .function-card:hover > .function-button {
    @apply bg-[#818181]
  }

</style>