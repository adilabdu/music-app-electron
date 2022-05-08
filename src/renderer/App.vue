<script setup>

  import { ref } from "vue";

  import Layout from './layouts/default.vue'

  import { ipcRenderer } from './electron'
  ipcRenderer.send('message', 'Hello from App.vue!');

  const fileNames = ref()

  window.io.readDirectory().then((result) => {
    fileNames.value = result.fileNames
  }).then(() => {
    getFileBuffer()
  })

  function getFileBuffer() {
    fileNames.value.forEach((file, index) => {
      window.io.readFile(file).then((res) => {
        console.log(`File #${(index+1)}:`, {
          file: res
        })
      })
    })
  }

</script>

<template>
  <div id="app">
    <Layout />
  </div>
</template>
