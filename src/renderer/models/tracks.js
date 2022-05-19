export default class Track {

    constructor(track, album=null) {
        this.title = track.title ?? 'Unknown track'
        this.artist = track.contributing_artist ?? track.artist ?? album.artist
        this.location = track.location
        this.duration = this.toMinutes(track.duration)
        this.local = track.local ?? album.local ?? false
        this.track_position = track.track_position ?? 1
        this.album = album
    }

    toMinutes(number) {
        if (!! number) {
            return `${Math.floor(number / 60)}:${(number % 60) > 9 ? (number % 60) : '0' + (number % 60)}`
        }
        return '-:--'
    }

    static async bufferToBlob(buffer) {

        const file = (await window.io.readFile(buffer, false)).buffer
        console.log('Inside renderer buffer converter:', file)

        const blob = new Blob([file], { type: "audio/mp3" });
        return window.URL.createObjectURL(blob);
    }
}