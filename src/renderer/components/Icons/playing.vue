<template>

  <div class="flex gap-px rotate-180 h-4">
    <div :class="animation[0]" class=" w-[0.185rem] bg-[#FF8400]"></div>
    <div :class="animation[1]" class=" w-[0.185rem] bg-[#FF8400]"></div>
    <div :class="animation[2]" class=" w-[0.185rem] bg-[#FF8400]"></div>
    <div :class="animation[3]" class=" w-[0.185rem] bg-[#FF8400]"></div>
  </div>
</template>

<script setup>

  // TODO: can mount the animation class after shuffle
  const animation = [
      'animate-[play_500ms_200ms_linear_infinite_alternate]',
      'animate-[play_500ms_500ms_linear_infinite_alternate]',
      'animate-[play_500ms_100ms_linear_infinite_alternate]',
      'animate-[play_500ms_400ms_linear_infinite_alternate]'
  ]

</script>

<style scoped>

</style>