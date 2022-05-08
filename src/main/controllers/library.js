const metadata = require('music-metadata');

const { config } = require('../database/manager');
const Track = require('../models/tracks').Track
const Artist = require('../models/artists').Artist
const Album = require('../models/albums').Album
const Genre = require('../models/genres').Genre

const { readDirectory, readFile } = require('../fs/manager');

const fileNames = {}
const result = []
const rootFolder = config()['library_location']

// Get files from local directory and read files
export async function readLibrary() {

    console.log('Albums in Library:', (await readDirectory()).folders)
    fileNames.value = (await readDirectory()).fileNames

    for (const fileName of fileNames.value) {
        const file = await readFile(fileName)
        const metadata = await getFileData(fileName, file)

        result.push({
            album: {
                title: metadata.common.album,
                artwork: metadata.common.picture[0].data,
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
async function getFileData(file, buffer) {
    return await metadata.parseBuffer(buffer.buffer)
}

// Populating the database with files from local library
async function populateDatabase() {

    const library = await readLibrary()

    library.forEach(file => {

        if (Track.where({ location: file.location }).count() > 0) {
            return
        }

        const artist = Artist.where({ name: file.artist.name }).first() ??
            Artist.create({ name: file.artist.name })

        const album = Album.where({ title: file.album.title, artist_id: artist.id }).first() ??
            Album.create({ title: file.album.title, artist_id: artist.id })

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

populateDatabase().then()