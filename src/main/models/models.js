import { database } from "../database/manager";

export class Model {

    static table = ''

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
            const result = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return result
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return 0

    }

    static find(id) {

        const query = `SELECT * FROM ${this.table} where ${this.table}.id = ${id}`

        try {
            const result = database.prepare(query).all()
            console.log("SELECT Success:", query)
            return result[0]
        } catch (e) {
            console.log("Error during SELECT:", e)
        }

        return 0

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