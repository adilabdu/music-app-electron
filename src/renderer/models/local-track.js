export default class LocalTrack {

    constructor(location) {
        this.location = '/Users/adilabdu/Documents/music/' + location
    }

    getLocation() {
        return this.location
    }

    setLocation(location) {
        this.location = location
    }

    getTitle() {
        return this.title
    }

    setTitle(title) {
        this.title = title
    }

    save() {
        // TODO: attempt INSERT query
    }

}