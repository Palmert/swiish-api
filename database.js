var Sequelize = require('sequelize');

module.exports = {
	sequelize: Sequelize,
	db: new Sequelize('swiish_development', 'swiishuser', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
		define: {
			paranoid: true,
			underscored: true,
			freezeTableName: true
		}
  }),

	successCallback : function (data, cb) {
		cb({
			success: true,
			data: data
		});
	},

	errorCallback : function (error, cb) {
		cb({
			success: false,
			error: error
		});
	}
};
