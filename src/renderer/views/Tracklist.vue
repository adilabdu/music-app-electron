<template>

  <ContentPage>

    <div class="flex w-full h-[270px] justify-start px-[40px] px-[40px]">

      <div class="w-[270px]">
        <img :src="album.artwork" class="w-full aspect-square rounded-md" />
      </div>

      <div class="grow flex flex-col justify-between items-start pl-[34px] py-[5px]">

        <div class="mt-[79.5px] flex flex-col justify-end items-start gap-2">

          <h1 class="font-medium text-[26px] text-[#FFFFFFEB] leading-none"> {{ album.title }} </h1>
          <h1 class="font-light text-[26px] text-[#FFFFFFA3] leading-none"> {{ album.artist }} </h1>
          <h3 class="text-[12px] text-[#FFFFFFA3] leading-none font-medium uppercase">R&B / Soul &#8226;	2018</h3>

        </div>

        <div class="flex w-full justify-between">

          <div class="buttons flex gap-4">
            <button class="h-[28px] rounded-md bg-[#FF8400] px-[28px] text-[13px] font-medium flex items-center justify-center gap-2">
              <PlayIcon :width="10" :class="'fill-[#FFFFFF]'" />
              Play
            </button>
            <button class="h-[28px] rounded-md bg-[#FF8400] px-[28px] text-[13px] font-medium flex items-center justify-center gap-2">
              <PlayIcon :width="10" :class="'fill-[#FFFFFF]'" />
              Shuffle
            </button>
          </div>

          <button class="h-full aspect-square rounded-full bg-[#FF8400] bg-opacity-10 flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>

        </div>

      </div>

    </div>

    <div class="flex w-full min-h-[36px] px-[40px] my-[40px]">

      <table class="w-full">
        <tr>
          <td class="left-cell number-cell">1</td>
          <td class="text-cell title-cell">Black Panther</td>
          <td class="text-cell subtitle-cell">Kendrick Lamar</td>
          <td class="time-cell">2:10</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">2</td>
          <td class="text-cell title-cell">All the Stars</td>
          <td class="text-cell subtitle-cell"></td>
          <td class="time-cell">3:11</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">3</td>
          <td class="text-cell title-cell">X</td>
          <td class="text-cell subtitle-cell">ScHoolboy Q, 2 Chainz, Saudi, Kendrick Lamar</td>
          <td class="time-cell">4:01</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">4</td>
          <td class="text-cell title-cell">The Ways</td>
          <td class="text-cell subtitle-cell">Khalid and Swae Lee</td>
          <td class="time-cell">3:10</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">5</td>
          <td class="text-cell title-cell">Opps</td>
          <td class="text-cell subtitle-cell">Vince Staples Yugen Blakrok</td>
          <td class="time-cell">3:22</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">6</td>
          <td class="text-cell title-cell">I Am</td>
          <td class="text-cell subtitle-cell">Jorja Smith</td>
          <td class="time-cell">3:48</td>
          <td class="right-cell">
            <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
        <tr>
          <td class="left-cell number-cell">7</td>
          <td class="text-cell title-cell">Paramedic!</td>
          <td class="text-cell subtitle-cell">SOB X RBE</td>
          <td class="time-cell">3:49</td>
          <td class="right-cell">
          <button class="flex gap-0.5 items-center justify-center">
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
            <div class="w-[0.2rem] h-[0.2rem] rounded-full bg-[#FF8400]" />
          </button>
          </td>
        </tr>
      </table>

    </div>

  </ContentPage>

</template>

<script setup>

  import ContentPage from "../components/ContentPage.vue";
  import PlayIcon from "../components/Icons/play.vue"

  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  })

</script>

<style scoped>

  td {
    @apply text-[13px] font-light h-[46px] flex items-center justify-center;
  }

  .number-cell {
    @apply text-center;
  }

  .time-cell {
    @apply col-span-1 flex justify-end;
  }

  .title-cell {
    @apply col-span-5 flex justify-start;
  }

  .subtitle-cell {
    @apply col-span-4 flex justify-start;
  }

  tr {
    @apply grid grid-cols-12;
  }

  tr:nth-child(odd) {
    @apply bg-[#252525];
  }

  .left-cell {
    @apply rounded-md  col-span-1;
  }

  .right-cell {
    @apply rounded-r-md col-span-1;
  }

</style>