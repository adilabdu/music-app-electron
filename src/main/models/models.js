import { database } from "../database/manager";

export class Model {

    static table = ''
    _result = null
    id = null

    static create(object) {

        const input = this._JSONParser(object)
        const query = `INSERT INTO ${this.table} (${input.attributes}) VALUES (${input.values})`

        try {
            this['_result'] = database.prepare(query).run();
            console.log("INSERT Success:", this['_result'])
            return this.find(this['_result'].lastInsertRowid).get()
        } catch (e) {
            console.log("Error during INSERT:", {error: e, query: query})
        }

        return this
    }

    static all() {

        const query = `SELECT * FROM ${this.table}`

        try {
            this['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return this
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return this

    }

    static paginate(limit, offset = 0) {

        const query = `SELECT * FROM ${this.table} ${!! this.orderBy} LIMIT ${limit} OFFSET ${offset}`

        try {
            this['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return this
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return this

    }

    static find(id) {

        this.id = id
        const query = `SELECT * FROM ${this.table} where ${this.table}.id = ${id}`

        try {
            this['_result'] = database.prepare(query).all()[0]
            console.log("SELECT Success:", query)
            return this
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return this

    }

    static where(constraint) {

        const values = Object.values(constraint)
        const keys = Object.keys(constraint)

        let whereClause = ''
        values.forEach((value, index, array) => {
            if (index === array.length - 1) {
                whereClause += `${this.table}.${keys[index]} = '${this._querySafe(value)}'`
                return
            }
            whereClause += `${this.table}.${keys[index]} = '${this._querySafe(value)}' and `
        })

        const query = `SELECT * FROM ${this.table} where ${whereClause}`
        console.log("query from where: ", query)

        try {
            this['_result'] = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return this
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return this

    }

    static count() {
        return this['_result'].length
    }

    static first() {
        return this['_result'][0]
    }

    static get() {
        return this['_result']
    }

    static _JSONParser(object) {
        let input = ''
        Object.values(object).forEach((value, index, array) => {
            if(index === array.length - 1) {
                input += `'${this._querySafe(value)}'`
                return
            }

            input += `'${this._querySafe(value)}', `
        })

        let attributes = ''
        Object.keys(object).forEach((value, index, array) => {
            if(index === array.length - 1) {
                attributes += `${value}`
                return
            }

            attributes += `${value}, `
        })

        return {
            values: input,
            attributes: attributes
        }
    }

    static _querySafe(query) {
        if (typeof query === "string")
            return query.replace(/'/g, "''")
        return query
    }

}