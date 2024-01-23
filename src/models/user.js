const sequelize = require('sequelize')
const database = require('../db')
const schema = ''

class User extends sequelize.Model { }

User.init(
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userDocument: {
            type: sequelize.STRING,
            allowNull: false
        },
        creditCardToken: {
            type: sequelize.STRING,
            allowNull: false
        },
        value: {
            type: sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: database,
        modelName: 'tbUser',
        schema
    }
)

module.exports = User
