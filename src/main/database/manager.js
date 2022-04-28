const sqlite = require('better-sqlite3-with-prebuilds')
const database = new sqlite('./orange.db')

exports.database = database