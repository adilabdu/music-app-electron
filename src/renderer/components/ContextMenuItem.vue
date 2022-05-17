<template>

  <li class="overflow-clip hover:bg-[#202020] first:hover:rounded-t-md last:hover:rounded-b-md cursor-pointer flex items-center justify-between h-[34px] text-[13px] text-[#FFFFFFD9] text-center px-[10px]">
    <p>{{ title }}</p>
    <component :is="iconComponent.name" v-bind="iconComponent.props" />
  </li>

</template>

<script>

  import PlusIcon from "./Icons/plus.vue"
  import HeartIcon from "./Icons/heart.vue"
  import TrackIcon from "./Icons/track.vue"
  import PlaylistIcon from "./Icons/playlist.vue"
  import PlayNextIcon from "./Icons/play-next.vue"

  export default {
    components: {
      PlusIcon,
      HeartIcon,
      TrackIcon,
      PlaylistIcon,
      PlayNextIcon
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