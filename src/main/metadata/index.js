const mm = require('music-metadata')

export const parseAudio = async (buffer) => {

    const metadata = {}

    try {
        metadata.tags = await mm.parseBuffer(buffer, 'audio/mp3');
    } catch (error) {
        console.error(error.message);
    }

    return metadata
}