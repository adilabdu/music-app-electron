export default class Playlist {

    tracks;

    constructor(title, description, cover=null, duration, tracks=[]) {
        this.title = title
        this.description = description
        this.cover = cover
        this.tracks.push(...tracks)
        this.duration = duration
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getCover() {
        return this.cover
    }

    getDuration() {
        return this.duration
    }

    getTracks() {
        return this.tracks
    }

    setTitle(title) {
        this.title = title
    }

    setDescription(description) {
        this.description = description
    }

    setCover(cover) {
        this.cover = cover
    }

    setDuration(duration) {
        this.duration = duration
    }

    setTracks(tracks) {
        this.tracks.push(...tracks)
    }

}