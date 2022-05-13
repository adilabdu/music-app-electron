<template>

  <OnClickOutside class="absolute" @trigger="closeMenu">
    <div id="menu" v-if="open"
         class="outline outline-[1.5px] outline-offset-[-2px] outline-white/[0.35] flex flex-col
         justify-center items-center absolute w-[200px] backdrop-blur-md bg-[#202020] bg-opacity-[0.50]
         rounded-md z-50 right-0 bottom-[50%]">

      <ul class="w-[196px] divide-y divide-white/[0.35]">
        <ContextMenuItem
            @mouseover="hovered(item.icon.name)"
            @mouseleave="left(item.icon.name)"
            @clicked="clicked(item.icon.name)"
            v-for="item in items"
            :title="item.title"
            :iconComponent="item.icon"
        />
      </ul>

    </div>
  </OnClickOutside>

</template>

<script setup>

  import { ref } from "vue"
  import { OnClickOutside } from "@vueuse/components"

  import ContextMenuItem from "./ContextMenuItem.vue"

  const props = defineProps({
    open: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: []
    }
  })
  const emit = defineEmits(['close', 'clicked', 'hovered', 'left'])

  const opened = ref(true)
  function closeMenu() {
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

</script>

<style scoped>

</style>