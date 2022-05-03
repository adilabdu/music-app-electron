export default class Album {

    genre_id;

    constructor(title, artwork=null, artist_id, genre_id=[], duration) {
        this.title = title
        this.artwork = artwork
        this.artist_id = artist_id
        this.genre_id.push(...genre_id)
        this.duration = duration
    }

    getTitle() {
        return this.title
    }

    getArtwork() {
        return this.artwork
    }

    getArtistID() {
        return this.artist_id
    }

    getGenreID() {
        return this.genre_id
    }

    getDuration() {
        return this.duration
    }

    // TODO setters

    setTitle(title) {
        this.title = title
    }

    setArtwork(artwork) {
        this.artwork = artwork
    }

    setGenre(genre_id) {
        this.genre_id.push(...genre_id)
    }
}