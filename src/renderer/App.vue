<script setup>

  import Layout from './layouts/default.vue'

  import { ipcRenderer } from './electron'
  ipcRenderer.send('message', 'Hello from App.vue!');

</script>

<template>
  <div id="app">
    <Layout />
  </div>
</template>
