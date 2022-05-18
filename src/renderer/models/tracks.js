export default class Track {

    constructor(track, artist=null) {
        this.title = track.title ?? 'Unknown track'
        this.artist = track.contributing_artist ?? track.artist ?? artist.artist
        this.location = track.location
        this.duration = this.toMinutes(track.duration)
        this.local = track.local ?? artist.local ?? false
        this.track_position = track.track_position ?? 1
    }

    toMinutes(number) {
        if (!! number) {
            return `${Math.floor(number / 60)}:${(number % 60) > 9 ? (number % 60) : '0' + (number % 60)}`
        }
        return '-:--'
    }

}