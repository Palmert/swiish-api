var sequelize = require('../database').sequelize;
var db = require('../database').db;
var bcrypt = require('bcryptjs');

var User = db.define('users', {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
        defaultValue: sequelize.UUIDV1
    },
    username: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    firstName: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'first_name'
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: true,
        field: 'last_name'
    },
    email: {
        type: sequelize.STRING,
        allowNull: true,
    },
    password_hash: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.VIRTUAL,
        set: function (val) {
            this.setDataValue('password', val);
            this.setDataValue('password_hash', bcrypt.hashSync(val, 10));
        },
        validate: {
            isLongEnough: function (val) {
                if (val.length < 8) {
                    throw new Error("Please choose a longer password")
                }
            }
        }
    },
    birthDate: {
        type: sequelize.DATEONLY,
        allowNull: true,
        field: 'birth_date'
    }
});

module.exports = User;
