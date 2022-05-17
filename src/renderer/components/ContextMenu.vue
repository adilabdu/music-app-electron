<template>

  <div @mouseleave="leftMenu" id="menu" v-if="open"
       :style="style"
       class="outline outline-[1.5px] outline-offset-[-2px] outline-white/[0.35] flex flex-col
       justify-center items-center absolute w-[200px] backdrop-blur-md bg-[#202020] bg-opacity-[0.50]
       rounded-md z-50">

    <ul class="w-[196px] divide-y divide-white/[0.35]">
      <ContextMenuItem
          @mouseover="hovered(item.title)"
          @mouseleave="left(item.title)"
          @click="clicked(item.title)"
          v-for="item in items"
          :title="item.title"
          :iconComponent="item.icon"
      />
    </ul>

  </div>

</template>

<script setup>

  import { ref } from "vue"

  import ContextMenuItem from "./ContextMenuItem.vue"

  const props = defineProps({
    open: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: []
    },
    style: {
      type: Object,
      default: {}
    }
  })
  const emit = defineEmits(['close', 'clicked', 'hovered', 'left', 'left-component'])

  const opened = ref(true)
  function close() {
    emit('close')
  }

  function clicked(component) {
    emit('clicked', component)
  }

  function hovered(component) {
    emit('hovered', component)
  }

  function left(component) {
    emit('left', component)
  }

  function leftMenu() {
    emit('left-component')
  }

  if(props.position !== '') {
    console.log("Value passed to position:", props.position)
  }

</script>

<style scoped>

</style>