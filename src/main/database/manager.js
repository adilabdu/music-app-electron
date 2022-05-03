const sqlite = require('better-sqlite3-with-prebuilds')
const createQuery = require(__dirname + '/create_db.js')
const database = new sqlite('./orange.db')

exports.initialize = () => {
    try {
        database.exec(createQuery.create_db)
    } catch (e) {
        console.log('CREATE database error: ', e)
    }
}

exports.database = database