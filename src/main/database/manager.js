const sqlite = require('better-sqlite3-with-prebuilds')
const database = new sqlite('./orange.db')

const createQuery = require(__dirname + '/create_db.js')

exports.initialize = () => {
    try {
        database.exec(createQuery.create_db)
    } catch (e) {
        console.log('CREATE database error: ', e)
    }
}

exports.config = () => {

    const query = `SELECT * from config`;

    try {
        const result = database.prepare(query).all()[0]
        console.log("SELECT Success:", {
            result,
            query
        })
        return result
    } catch (e) {
        console.log("Error during SELECT:", {
            e,
            query
        })
    }

    return 0
}

exports.database = database