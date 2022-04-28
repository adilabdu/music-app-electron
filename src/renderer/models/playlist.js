export default class Playlist {

    songs;

    constructor(title, description) {
        this.title = title
        this.description = description
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getSongs() {
        return this.songs
    }

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setSongs(...songs) {
        this.songs = songs
    }

}