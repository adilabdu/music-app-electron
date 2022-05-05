import { database } from "../database/manager";

export class Model {

    static table = ''
    _result = null
    id = null

    static create(object) {

        const input = this._JSONParser(object)
        const query = `INSERT INTO ${this.table} (${input.attributes}) VALUES (${input.values})`

        try {
            database.exec(query);
            console.log("INSERT Success:", query)
        } catch (e) {
            console.log("Error during INSERT:", {error: e, query: query})
        }
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

    static get() {
        return this['_result']
    }

    static _JSONParser(object) {
        let input = ''
        Object.values(object).forEach((value, index, array) => {
            if(index === array.length - 1) {
                input += `'${value}'`
                return
            }

            input += `'${value}', `
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

}