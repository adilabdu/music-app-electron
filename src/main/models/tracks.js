export default class Track {

    constructor(title, duration, local=true, preview=null, position, album_id) {
        this.title = title
        this.duration = duration
        this.local = local
        this.preview = preview
        this.position = position
    }

    getTitle() {
        return this.title
    }

    getDuration() {
        return this.duration
    }

    isLocal() {
        return this.local
    }

    getPreview() {
        return this.preview
    }

    getPosition() {
        return this.position
    }

    // TODO setter functions
    setLocal(local) {
        this.local = local
    }

    setPreview(preview) {
        this.preview = preview
    }

}