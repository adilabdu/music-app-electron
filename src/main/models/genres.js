import { Model } from "./models";
import {database} from "../database/manager";

export class Genre extends Model {

    constructor(id) {
        super();
        this.id = id
    }

    static table = 'genres'

    albums(album_ids) {

        // TODO: get all albums linked with this.Object

    }

    attachAlbums(ids) {

        ids.forEach(id => {

            const query = `INSERT INTO albums_genres (album_id, genre_id) VALUES ('${id}', '${this.id}')`

            try {
                database.exec(query);
                console.log("INSERT Success:", query)
            } catch (e) {
                console.log("Error during INSERT:", {error: e, query: query})
            }

        })

    }

}