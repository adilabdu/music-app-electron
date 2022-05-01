const { promises: fs } = require('fs')

export const readDirectory = async () => {

    const fileNames = []

    try {
        fileNames.push(await fs.readdir('/Users/adilabdu/Documents/music/'))
    } catch(error) {
        console.log(error)
    }

    return fileNames

}

export const readFile = async (fileName) => {

    const file = {}

    try {
        file.buffer = await fs.readFile('/Users/adilabdu/Documents/music/' + fileName)
    } catch (error) {
        console.log(error)
    }

    return file

}