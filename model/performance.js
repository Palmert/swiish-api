var sequelize = require('../database').sequelize;
var db = require('../database').db;

var Performance = db.define('performances', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  result: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  videoUrl: {
    type: sequelize.STRING,
    allowNull: false,
    field: 'video_url'
  },
  valid: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Performance;
