<template>

  <aside class="fixed h-screen w-0 md:w-[259px] bg-[#272728] flex flex-col md:px-[25px] overflow-clip border-r border-[#404040]">

    <div class="h-[55px] w-full flex items-center justify-start gap-2">
      <img :src="logo" class="w-6 h-6" />
      <MusicTextIcon :width="72" :class="'fill-[#EFEFEF]'" />
    </div>

    <nav class="flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden">

      <div id="search" class="relative flex items-center w-full rounded-sm my-[16px] h-8">
        <SearchIcon :width="12" :class="'stroke-[#EFEFEF]'" class="absolute mx-4" />
        <input type="text" placeholder="Search" class="h-full focus:ml-1 focus:max-w-[95%] focus:ring-4 focus:ring-[rgb(255,132,0,0.5)] focus:outline-none grow pl-10 text-xs text-[#EFEFEF] font-extralight bg-[#202020] rounded-sm"/>
      </div>

      <ul id="quickLinks" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full my-[16px]">
        <RouterLink to="/listen" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/listen' ? 'bg-[#3F3F41]' : ''">
          <PlayRoundIcon :width="16" :class="'fill-[#FF8400]'" />
          <p class="truncate">Listen Now</p>
        </RouterLink>
        <RouterLink to="/browse" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/browse' ? 'bg-[#3F3F41]' : ''">
          <BrowseIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" />
          <p class="truncate">Browse</p>
        </RouterLink>
        <RouterLink to="/radio" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/radio' ? 'bg-[#3F3F41]' : ''">
          <RadioIcon :class="'fill-[#FF8400]'" :width="16" />
          <p class="truncate">Radio</p>
        </RouterLink>
      </ul>

      <div class="w-full group font-light">
        <div class="flex justify-between items-start w-full">
          <h3 class="text-[10px] text-[#FFFFFFA3] font-medium ml-[1px]">Library</h3>
        </div>
        <ul id="libraryLinks" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full mb-[16px]">
          <RouterLink to="/recently-added" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
                      :class="active === '/recently-added' ? 'bg-[#3F3F41]' : ''">
            <RecentIcon :width="16" :class="'fill-[#FF8400]'" />
            <p class="truncate">Recently Added</p>
          </RouterLink>
          <RouterLink to="/artists" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
                      :class="active === '/artists' ? 'bg-[#3F3F41]' : ''">
            <ArtistIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" :class="'fill-[#FF8400]'" />
            <p class="truncate">Artists</p>
          </RouterLink>
          <RouterLink to="/albums" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
                      :class="active === '/albums' ? 'bg-[#3F3F41]' : ''">
            <AlbumIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" :class="'fill-[#272728]'" />
            <p class="truncate">Albums</p>
          </RouterLink>
          <RouterLink to="/songs" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
                      :class="active === '/songs' ? 'bg-[#3F3F41]' : ''">
            <SongIcon :class="'fill-[#FF8400] mr-[0.375rem]'" :width="10" />
            <p class="truncate">Songs</p>
          </RouterLink>
        </ul>
      </div>

      <div class="w-full group font-light">
        <div class="flex justify-between w-full items-center">
          <h3 class="text-[10px] text-[#FFFFFFA3] font-medium ml-[1px]">Playlists</h3>
          <h3 @click="createPlaylist" class="cursor-pointer text-[12px] text-[#FFFFFFA3] font-medium ml-[1px] opacity-0 group-hover:opacity-100">+</h3>
        </div>

        <ul id="test" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full mb-[16px]">
          <PlaylistSmallCard v-for="playlist in userPlaylists" :playlist="playlist" />
        </ul>

      </div>

    </nav>

  </aside>
  <div class="h-screen w-0 md:w-[259px] bg-[#272728] flex-none"></div>

</template>

<script setup>

  import {computed, onMounted, ref } from "vue"
  import route from '../router/index'

  import logo from "../static/favicon.png"
  import PlaylistSmallCard from "./PlaylistSmallCard.vue"
  import MusicTextIcon from "./Icons/music-text.vue"
  import SearchIcon from "./Icons/search.vue"
  import PlayRoundIcon from "./Icons/play_round.vue"
  import BrowseIcon from "./Icons/browse.vue"
  import RadioIcon from "./Icons/radio.vue"
  import RecentIcon from "./Icons/recent.vue"
  import ArtistIcon from "./Icons/artist.vue"
  import AlbumIcon from "./Icons/album.vue"
  import SongIcon from "./Icons/song.vue"

  const userPlaylists = ref(null)
  onMounted(() => {
    userPlaylists.value = window.api.Playlist.all()
  })

  const active = computed(() => route.currentRoute.value.path)

  function createPlaylist() {
    window.api.Playlist.create({
      name: "ORANGE 🍊",
      description: "Test Playlists are always orange!"
    })
    userPlaylists.value = window.api.Playlist.all()
  }

</script>

<style scoped>

  li {
    @apply font-light;
  }

</style>