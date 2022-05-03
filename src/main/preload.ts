import { contextBridge, ipcRenderer } from 'electron';
const { readDirectory, readFile } = require('./fs/disk');
const { parseAudio } = require('./metadata/index')

const playlist = require('./database/models/playlist.model')
const manager = require('./database/manager')

const initDB = () => {
  return manager.initialize()
}

const getNames = () => {
  return playlist.getNames()
}

const setName = (title, description) => {
  return playlist.setNames(title, description)
}

contextBridge.exposeInMainWorld('api', {
  initDB: initDB,
  getNames: getNames,
  setName: setName
})

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
})

contextBridge.exposeInMainWorld('io', {
  readDirectory: readDirectory,
  readFile: readFile,
  parseAudio: parseAudio
})