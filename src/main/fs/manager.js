const { promises: fs } = require('fs')
const path = require('path')
const os = require('os')

const rootFolder = os.homedir() + '/Documents/music/'

export const readDirectory = async () => {

    const fileNames = []
    const folders = []

    const content = await fs.readdir(rootFolder, { withFileTypes: true })

    try {
        fileNames.push(content.filter( file => path.extname(file.name) === '.mp3' || path.extname(file.name) === '.m4a' ))
        folders.push(content.filter(file => !file.isFile()))
    } catch(error) {
        console.log(error)
    }

    return {
        fileNames: fileNames[0].map(item => item.name),
        folders: folders[0].map(item => item.name)
    }

}
// TODO: needs fixing
export const readFilesRecursively = async (currentFolder, folders, fileNames) => {

    console.log('Inside function')

    const index = folders.indexOf(currentFolder);
    if (index > -1) {
        folders.splice(index, 1);
    }

    const content = await fs.readdir(currentFolder, { withFileTypes: true })

    try {
        fileNames.push( content.filter(file => path.extname(file.name) === '.mp3').map(item => item.name) )
        folders.push( content.filter(file => !file.isFile()).map(item => currentFolder + item.name) )

        console.log('inside try block:', {
            fileNames,
            folders: folders[0]
        })

    } catch(error) {
        console.log('Error inside recursive try block:', error)
    }

    console.log('Passing these values to next call:', {
        currentFolder: folders[0][0],
        folders: folders[0],
        fileNames: fileNames[0]
    })

    console.log("Checking folders length:", folders)
    if(folders.length === 0) {
        return {
            fileNames,
            folders,
        }
    }

    await readFilesRecursively(folders[0][0], folders[0], fileNames[0])

}

export const readFile = async (fileName) => {

    const file = {}

    try {
        file.buffer = await fs.readFile(rootFolder + fileName)
    } catch (error) {
        console.log(error)
    }

    return file

}