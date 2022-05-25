import { contextBridge, ipcRenderer } from 'electron';

const manager = require('./database/manager')
const fsManager = require('./fs/manager')
const { readLibrary, runDatabasePopulation } = require('./controllers/library')

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

const whereTrack = (constraint) => {
  return require('../main/models/tracks').Track.where(constraint).get()[0]
}

const wherePlaylist = (constraint) => {
  return require('../main/models/playlists').Playlist.where(constraint).get()[0]
}

const allPlaylists = () => {
  return require('../main/models/playlists').Playlist.all().get()
}

const allAlbums = () => {
  return require('../main/models/albums').Album.all().withArtists().get()
}

const paginateAlbums = (paginate, offset= 0) => {
  return require('../main/models/albums').Album.paginate(paginate, offset).withArtists().get()
}

const tracklist = (id) => {
  return require('../main/models/albums').Album.from(id).tracks().get()
}

const playlistTracklist = (id) => {
  return require('../main/models/playlists').Playlist.from(id).tracks().get()
}

const addToPlaylist = (playlist_id, track_id) => {
  return require('../main/models/playlists').Playlist.from(playlist_id).attachTracks(track_id)
}

const setGenres = (album_id, genre_ids) => {

  const Album = require('../main/models/albums').Album
  new Album(album_id).attachGenres(genre_ids)

}

const getGenres = (album_id) => {

  const Album = require('../main/models/albums').Album
  return Album.from(album_id).genres().get()

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
    all: allAlbums,
    paginate: paginateAlbums
  },
  Track: {
    create: createTrack,
    find: findTrack,
    where: whereTrack,
    tracklist: tracklist
  },
  Playlist: {
    create: createPlaylist,
    find: findPlaylist,
    all: allPlaylists,
    where: wherePlaylist,
    addTrack: addToPlaylist,
    tracklist: playlistTracklist
  }
})

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
})

contextBridge.exposeInMainWorld('io', {
  readLibrary: readLibrary,
  readFile: fsManager.readFile,
  runDatabasePopulation: runDatabasePopulation
})