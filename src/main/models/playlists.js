import { Model } from "./models";
import {database} from "../database/manager";

export class Playlist extends Model {

    static table = 'playlists'

    static attachTracks(ids) {

        ids.forEach(id => {

            const query = `INSERT INTO tracks_playlists (playlist_id, track_id) VALUES ('${this.id}', '${id}')`

            try {
                database.exec(query);
                console.log("INSERT Success:", query)
            } catch (e) {
                console.log("Error during INSERT:", {error: e, query: query})
            }

        })

    }

    static tracks() {

        const query =
            `SELECT
                albums.title AS album_title,
                albums.artwork,
                tracks.title AS track_title,
                tracks.duration,
                tracks.local,
                tracks.location,
                tracks.contributing_artist,
                tracks.track_position
            FROM
                tracks
                INNER JOIN tracks_playlists ON tracks.id = tracks_playlists.track_id
                INNER JOIN playlists ON playlists.id = tracks_playlists.playlist_id
                INNER JOIN albums ON albums.id = tracks.album_id
            WHERE
                playlists.id = ${this.id}`

        try {
            this['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return this
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return this

    }

}