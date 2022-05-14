<template>

  <li class="overflow-clip hover:bg-[#202020] cursor-pointer flex items-center justify-between h-[34px] text-[13px] text-[#FFFFFFD9] text-center px-[10px]">
    <p>{{ title }}</p>
    <component :is="iconComponent.name" v-bind="iconComponent.props" />
  </li>

</template>

<script>

  import PlusIcon from "./Icons/plus.vue"
  import HeartIcon from "./Icons/heart.vue"
  import PlaylistIcon from "./Icons/playlist.vue"

  export default {
    components: {
      PlusIcon,
      HeartIcon,
      PlaylistIcon
    },
    props: {
      title: {
        type: String,
        required: true
      },
      iconComponent: {
        type: Object,
        required: true
      }
    }
  }

</script>