var sequelize = require('../database').sequelize;
var db = require('../database').db;

var User = db.define('users', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: sequelize.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: sequelize.STRING,
    allowNull:false,
    field: 'last_name'
  },
  email: {
    type: sequelize.GEOMETRY('POINT'),
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  },
  birthDate: {
    type: sequelize.DATE,
    allowNull: false,
    field: 'birth_date'
  }
});

module.exports = User;