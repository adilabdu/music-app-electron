import Track from './tracks'

export default class Album {

    constructor(album) {
        this.id = album.id ?? null
        this.title = album.title ?? 'Unknown Album'
        this.artist = album.artist ?? 'Unknown Artist'
        this.artwork = album.artwork ?? null
        this.description = album.description ?? null
        this.local = album.local ?? false
        this.tracklist = album.tracklist ? album.tracklist.map(track => {
                return new Track(track, this.album())
            }) : []
    }

    album() {
        return {
            id: this.id,
            title: this.title,
            artist: this.artist,
            artwork: this.artwork,
            local: this.local
        }
    }

    addTrack(track, album=null) {
        const data = new Track(track, album ?? this.album())
        console.log('Hello world! FROM Album model class addTrack', { data })
        this.tracklist.push(data)
    }

}