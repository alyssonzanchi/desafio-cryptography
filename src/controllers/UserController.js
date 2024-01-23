const ModelUser = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    async List (req, res) {
        try {
            const users = await ModelUser.findAll()
            return res.json(users)
        } catch (err) {
            return console.err(err)
        }
    },

    async Create (req, res) {
        try {
            const userDocument = await bcrypt.hash(req.body.userDocument, 5)
            const creditCardToken = await bcrypt.hash(req.body.creditCardToken, 5)
            const user = await ModelUser.create(
                {
                    userDocument: userDocument,
                    creditCardToken: creditCardToken,
                    value: req.body.value
                }
            )
            return res.json(user)
        } catch (err) {
            return console.err(err)
        }
    },

    async Update (req, res) {
        try {
            const userDocument = await bcrypt.hash(req.body.userDocument, 5)
            const creditCardToken = await bcrypt.hash(req.body.creditCardToken, 5)
            const user = await ModelUser.findByPk(req.body.id)
            if (user) {
                user.userDocument = userDocument,
                user.creditCardToken = creditCardToken,
                user.value = req.body.value
                await user.save()
            }
            return res.json(user)
        } catch (err) {
            return console.err(err)
        }
    },

    async GetOne (req, res) {
        try {
            const user = await ModelUser.findByPk(req.body.id)
            return res.json(user)
        } catch (err) {
            return console.err(err)
        }
    },

    async Delete (req, res) {
        try {
            const user = await ModelUser.findByPk(req.body.id)
            await user.destroy()
            return res.json(user)
        } catch (err) {
            return console.err(err)
        }
    }
}
