import { contextBridge, ipcRenderer } from 'electron';
const playlist = require('./database/models/playlist.model')

const getNames = () => {
  return playlist.getNames()
}

const setName = (title, description) => {
  return playlist.setNames(title, description)
}

contextBridge.exposeInMainWorld('api', {
  getNames: getNames,
  setName: setName
})

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
})
