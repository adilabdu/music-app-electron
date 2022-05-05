import { Model } from './models'
import {database} from "../database/manager";

export class Album extends Model {

    static table = 'albums'

    constructor(id) {
        super()
        this.id = id
    }

    genres() {

        // TODO SELECT genres linked with this.Object
        const query = `SELECT genres.id, genres.name FROM ((albums INNER JOIN albums_genres ON albums.id = albums_genres.album_id) INNER JOIN genres ON albums_genres.genre_id = genres.id) WHERE albums.id = ${this.id}`;

        try {
            const result = database.prepare(query).all()
            console.log("SELECT Success:", result)
            return result
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return 0

    }

    attachGenres(ids) {

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