import { contextBridge, ipcRenderer } from 'electron';

const manager = require('./database/manager')

const { readLibrary } = require('./controllers/library')

const initDB = () => {
  return manager.initialize()
}

const createArtist = (object) => {
  return require('../main/models/artists').Artist.create(object)
}

const createAlbum = (object) => {
  return require('../main/models/albums').Album.create(object)
}

const createPlaylist = (object) => {
  return require('../main/models/playlists').Playlist.create(object)
}

const createTrack = (object) => {
  return require('../main/models/tracks').Track.create(object)
}

const findPlaylist = (id) => {
  return require('../main/models/playlists').Playlist.find(id)
}

const findAlbum = (id) => {
  return require('../main/models/albums').Album.find(id)
}

const findTrack = (id) => {
  return require('../main/models/tracks').Track.find(id)
}

const findArtist = (id) => {
  return require('../main/models/artists').Artist.find(id)
}

const allPlaylists = () => {
  return require('../main/models/playlists').Playlist.all().get()
}

const allAlbums = () => {
  return require('../main/models/albums').Album.all().withArtists().get()
}

const tracklist = (id) => {
  return require('../main/models/albums').Album.find(id).tracks().get()
}

const setGenres = (album_id, genre_ids) => {

  const Album = require('../main/models/albums').Album
  new Album(album_id).attachGenres(genre_ids)

}

const getGenres = (album_id) => {

  const Album = require('../main/models/albums').Album
  return new Album(album_id).genres()

}

contextBridge.exposeInMainWorld('api', {
  initDB: initDB,
  Artist: {
    create: createArtist,
    find: findArtist
  },
  Album: {
    create: createAlbum,
    find: findAlbum,
    setGenres: setGenres,
    genres: getGenres,
    all: allAlbums
  },
  Track: {
    create: createTrack,
    find: findTrack,
    tracklist: tracklist
  },
  Playlist: {
    create: createPlaylist,
    find: findPlaylist,
    all: allPlaylists
  }
})

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
})

contextBridge.exposeInMainWorld('io', {
  readLibrary: readLibrary
})