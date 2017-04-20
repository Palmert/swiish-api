var sequelize = require('../database').sequelize;
var db = require('../database').db;
var bcrypt = require('bcryptjs');

var User = db.define('users', {
    username: {
        type: sequelize.STRING,
        primaryKey:true,
        unique:true,
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
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
   virtual_password: {
     type: sequelize.VIRTUAL,
     set: function (val) {
        this.setDataValue('virtual_password', val);
        this.setDataValue('password', bcrypt.hashSync(val, 10));
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
