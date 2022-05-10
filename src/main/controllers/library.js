import os from "os";

const metadata = require('music-metadata');

const { config } = require('../database/manager');
const Track = require('../models/tracks').Track
const Artist = require('../models/artists').Artist
const Album = require('../models/albums').Album
const Genre = require('../models/genres').Genre

const { readDirectory, readFile } = require('../fs/manager');

const fileNames = {}
const result = []
const rootFolder = os.homedir() + '/Documents/music/'
const subFolders = {}

// Get files from local directory and read files
export async function readLibrary(directory) {

    subFolders.names = (await readDirectory(directory)).folders
    fileNames.value = (await readDirectory(directory)).fileNames

    for (const fileName of fileNames.value) {
        const file = await readFile(directory + fileName, false)
        const metadata = await getFileData(fileName, file)

        result.push({
            album: {
                title: metadata.common.album,
                artwork: imageSource(metadata.common.picture[0].data),
            },
            artist: {
                name: !! metadata.common.albumartist ? metadata.common.albumartist : metadata.common.artist,
            },
            genre: !! metadata.common.genre ? metadata.common.genre : [],
            title: metadata.common.title,
            contributing_artist: metadata.common.artist,
            duration: Math.round(metadata.format.duration),
            location: rootFolder + fileName,
            track_position: !! metadata.common.track.no ? metadata.common.track.no : 1,
        })
    }

    return result
}

// Get the metadata of a single file
export async function getFileData(file, buffer) {
    return await metadata.parseBuffer(buffer.buffer)
}

// Populating the database with files from local library
async function populateDatabase(directory= rootFolder) {

    const library = await readLibrary(directory)

    library.forEach(file => {

        if (Track.where({ location: file.location }).count() > 0) {
            return
        }

        const artist = Artist.where({ name: file.artist.name }).first() ??
            Artist.create({ name: file.artist.name })

        const album = Album.where({ title: file.album.title, artist_id: artist.id }).first() ??
            Album.create({ title: file.album.title, artist_id: artist.id, artwork: file.album.artwork  })

        const genres = []
        file.genre.forEach(genre => {

            const record = Genre.where({ name: genre }).first() ??
                            Genre.create({ name: genre })
            genres.push(record.id)
        })

        Album.find(album.id).attachGenres(genres)

        Track.create({
            title: file.title,
            duration: file.duration,
            local: true,
            location: file.location,
            contributing_artist: file.contributing_artist,
            track_position: file.track_position,
            album_id: album.id
        })

    })

}

// Converting picture Buffer to Base64
function imageSource(buffer) {

    const toBase64 = btoa(
        buffer.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return `data:image/png;base64,${toBase64}`
}

// TODO: find suitable app flow to figure where and when to run this function
// populateDatabase().then(() => {
//     // console.log('Albums in Library:', subFolders.names)
//     subFolders.names.forEach(folder => populateDatabase(rootFolder + `${folder}/`))
// })

// TODO: watch the local directory for delete / add event and update DB accordingly
// const chokidar = require('chokidar');
// chokidar.watch(rootFolder, {ignoreInitial: true})
//     .on('ready', (event, path) => {
//         alert(event)
//     })
//     .on('add', (path) => {
//         alert(path)
//     });