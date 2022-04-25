<script setup lang="ts">
import Hello from './components/Hello.vue'
import Listen from './pages/listen.vue'
import { ipcRenderer } from './electron'

ipcRenderer.send('message', 'Hello from App.vue!');
</script>

<template>
  <div id="app">
    <Listen/>
  </div>
</template>
