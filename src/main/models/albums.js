import { Model } from './models'
import {database} from "../database/manager";
import {Track} from "./tracks";
export class Album extends Model {

    static table = 'albums'

    constructor(id) {
        super()
        this.id = id
    }

    static withArtists() {

        const Artist = require('../models/artists').Artist
        this['_result'] = this['_result'].map(album => {
            return {
                id: album.id,
                title: album.title,
                artwork: album.artwork,
                duration: album.duration,
                artist_id: album.artist_id,
                artist: Artist.find(album['artist_id']).get()
            }
        })
        return this
    }

    static tracks() {

        const Track = require('../models/tracks').Track
        const query = `SELECT tracks.* FROM albums INNER JOIN tracks ON albums.id = tracks.album_id WHERE albums.id = ${this.id} ORDER BY tracks.'track_position';`

        try {
            Track['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return Track
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return Track

    }

    static genres() {
        const Genre = require('../models/genres').Genre
        const query = `SELECT genres.* FROM albums INNER JOIN albums_genres ON albums.id = albums_genres.album_id INNER JOIN genres ON albums_genres.genre_id = genres.id WHERE albums.id = ${this.id}`

        try {
            Genre['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return Track
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return Genre
    }

    static attachGenres(ids) {

        ids.forEach(id => {

            const query = `INSERT INTO albums_genres (album_id, genre_id) VALUES ('${this.id}', '${id}')`

            try {
                database.exec(query);
                console.log("INSERT Success:", query)
            } catch (e) {
                console.log("Error during INSERT:", {error: e, query: query})
            }

        })

    }
}