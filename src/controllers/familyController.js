const connection = require('../database/connection')

module.exports = {

    async index(req, res) {
        const peoples = await connection('family').select('*')


        res.json({
            peoples
        })
    },

    async create(req, res) {

        const { name, surname, years, city } = req.body

        await connection('family').insert({
            name,
            surname,
            years,
            city
        })

        res.json({ status: 'People add in table family' })
    },

    async update(req, res) {

        const id = req.headers.authorization
        const { name, surname, years, city } = req.body

        await connection('family').where('id', id).update({
            name,
            surname,
            years,
            city
        })

        res.json({
            status: 'changed data in table family'
        })

    },

    async delete(req, res) {
        const id = req.headers.authorization

        await connection('family').where('id', id).delete()

        res.json({
            status: 'delete people in table family'
        })
    }


}