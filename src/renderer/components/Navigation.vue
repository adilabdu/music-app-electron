<template>

  <aside class="fixed h-screen w-0 md:w-[259px] bg-[#272728] flex flex-col px-[25px] border-r border-[#404040]">

    <div class="h-[55px] w-full flex items-center justify-start gap-1">
      <img :src="logo" class="w-6 h-6" />
      <h1 class="text-[#EFEFEF] font-light text-[1.75rem]">Music</h1>
    </div>

    <nav class="flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden">

      <div id="search" class="relative flex items-center w-full rounded-sm my-[16px] h-8">
        <SearchIcon :width="12" :class="'stroke-[#EFEFEF]'" class="absolute mx-4" />
        <input type="text" placeholder="Search" class="h-full focus:ring-4 focus:ring-[rgb(255,132,0,0.5)] focus:outline-none grow pl-10 text-xs text-[#EFEFEF] font-extralight bg-[#202020] rounded-sm"/>
      </div>

      <ul id="quickLinks" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full my-[16px]">
        <Router to="/listen" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/listen' ? 'bg-[#3F3F41]' : ''">
          <PlayRoundIcon :width="16" :class="'fill-[#FF8400]'" />
          <p class="truncate">Listen Now</p>
        </Router>
        <NuxtLink to="/browse" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/browse' ? 'bg-[#3F3F41]' : ''">
          <BrowseIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" />
          <p class="truncate">Browse</p>
        </NuxtLink>
        <NuxtLink to="radio" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2 transition duration-300"
            :class="active === '/radio' ? 'bg-[#3F3F41]' : ''">
          <RadioIcon :class="'fill-[#FF8400]'" :width="16" />
          <p class="truncate">Radio</p>
        </NuxtLink>
      </ul>

      <h3 class="text-[10px] text-[#FFFFFFA3] font-medium w-full ml-[1px]">Library</h3>
      <ul id="libraryLinks" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full mb-[16px]">
        <NuxtLink to="/recently-added" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
            :class="active === '/recently-added' ? 'bg-[#3F3F41]' : ''">
          <RecentIcon :width="16" :class="'fill-[#FF8400]'" />
          <p class="truncate">Recently Added</p>
        </NuxtLink>
        <NuxtLink to="/artists" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
            :class="active === '/artists' ? 'bg-[#3F3F41]' : ''">
          <ArtistIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" :class="'fill-[#FF8400]'" />
          <p class="truncate">Artists</p>
        </NuxtLink>
        <NuxtLink to="/albums" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
            :class="active === '/albums' ? 'bg-[#3F3F41]' : ''">
          <AlbumIcon :stroke="{ width: 18, color: '#FF8400' }" :width="16" :class="'fill-[#272728]'" />
          <p class="truncate">Albums</p>
        </NuxtLink>
        <NuxtLink to="/songs" class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2"
            :class="active === '/songs' ? 'bg-[#3F3F41]' : ''">
          <SongIcon :class="'fill-[#FF8400] mr-[0.375rem]'" :width="10" />
          <p class="truncate">Songs</p>
        </NuxtLink>
      </ul>

      <h3 class="text-[10px] text-[#FFFFFFA3] font-medium w-full ml-[1px]">Playlists</h3>
      <ul id="playlists" class="relative flex flex-col gap-[2px] text-[15px] items-start text-[#EFEFEF] w-full mb-[16px]">
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">♾ playlist</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">B TEAM 🪑🔥</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">🤖 Siri Name That Tune!</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">contexts 📚</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">endgame season 🕛</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">ሊዩ ሊዩ</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">seasons: vol.1</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">sokcho vibes 🏖</a>
        </li>
        <li class="h-[32px] rounded-md w-full py-[1px] flex justify-start items-center gap-4 px-2">
          <PlaylistIcon :width="16" :class="'fill-[#B9B9B9]'" />
          <a href="#" class="truncate">2022 feels 🎇</a>
        </li>
      </ul>

    </nav>

  </aside>
  <div class="h-screen w-0 md:w-[259px] bg-[#272728] flex-none"></div>

</template>

<script setup>

  import { computed } from "vue"
  // import { useRoute } from "nuxt/app"

  import logo from "../static/favicon.png"
  import SearchIcon from "./Icons/search.vue"
  import PlayRoundIcon from "./Icons/play_round.vue"
  import BrowseIcon from "./Icons/browse.vue"
  import RadioIcon from "./Icons/radio.vue"
  import RecentIcon from "./Icons/recent.vue"
  import ArtistIcon from "./Icons/artist.vue"
  import AlbumIcon from "./Icons/album.vue"
  import SongIcon from "./Icons/song.vue"
  import PlaylistIcon from "./Icons/playlist.vue";

  // const route = useRoute()
  // const active = computed(() => route.path)

</script>

<style scoped>

li {
  @apply font-light;
}

</style>