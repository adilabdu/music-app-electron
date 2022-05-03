const database = require('../manager').database;

exports.getNames = () => {
    const query = 'SELECT * from playlists'
    const statement = database.prepare(query)
    return statement.all()
}

exports.setNames = (title, description = null) => {
    let query = `INSERT INTO playlists ('name', 'description')`
    let values
    if(description === null) {
        values = ` VALUES ('${title}', null)`
    } else {
        values = ` VALUES ('${title}', '${description}')`
    }
    database.exec(query + values)
}