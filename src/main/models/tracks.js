import { Model } from "./models";

export class Track extends Model {

    static table = 'tracks'

    static withAlbum() {

        const Album = require('../models/albums').Album
        this['_result'] = this['_result'].map(track => {
            return {
                title: track.title,
                duration: track.duration,
                local: track.local,
                location: track.location,
                preview: track.preview,
                track_position: track.track_position,
                album_id: track.album_id,
                album: Album.find(track['album_id']).get()
            }
        })
        return this
    }

}