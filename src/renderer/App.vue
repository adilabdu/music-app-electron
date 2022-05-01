<script setup>

import Layout from './layouts/default.vue'

import { ipcRenderer } from './electron'

ipcRenderer.send('message', 'Hello from App.vue!');
window.io.readFile('asitwas.mp3').then((r) => console.log('From Renderer process: ', r))

</script>

<template>
  <div id="app">
    <Layout />
  </div>
</template>
