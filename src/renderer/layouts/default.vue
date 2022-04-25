<template>

  <div class="relative min-h-screen w-full flex">

    <Navigation />

    <section class="relative min-h-screen grow bg-[#202020] flex flex-col">

      <Header />

      <div class="flex justify-center h-full w-full">
        <slot />
      </div>

    </section>

  </div>

</template>

<script setup>

import Navigation from "../components/Navigation.vue";
import Header from "../components/Header.vue";
import ContentPage from "../components/ContentPage.vue";

</script>
