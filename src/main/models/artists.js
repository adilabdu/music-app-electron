export default class Artist {

    constructor(name, picture = null) {
        this.name = name
        this.picture = picture
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getPicture() {
        return this.picture
    }

    setPicture(picture) {
        this.picture = picture
    }

}