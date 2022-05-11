<template>

  <div class="relative min-h-screen w-full flex">

    <Navigation />

    <section class="relative max-h-screen grow bg-[#202020] flex flex-col">

      <div class="w-full h-[55px]">
        <Header />
      </div>

      <div id="mainContent" class="flex justify-center overflow-auto w-full">
        <router-view />
      </div>

      <QueueList />

      <footer class="w-full">
      </footer>

    </section>

  </div>

</template>

<script setup>

  import Navigation from "../components/Navigation.vue";
  import Header from "../components/Header.vue";
  import QueueList from "../views/QueueList.vue";

</script>

<style scoped>

  #mainContent {
    overflow: auto;
  }

  #mainContent::-webkit-scrollbar {
    width: 16px;
  }
  #mainContent::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0);
  }
  #mainContent::-webkit-scrollbar-thumb {
    background-color: #747474;
    border-radius: 6px;
    border: 4px solid rgba(0,0,0,0);
    background-clip: content-box;
  }

  #mainContent::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
  }

</style>
