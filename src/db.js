const sequelize = require('sequelize')
const database = new sequelize('desafio-cryptography', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

database.sync()

module.exports = database
