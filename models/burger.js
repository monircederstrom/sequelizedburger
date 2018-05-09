module.exports = function(sequelize, DataTypes) {
var Burger =  sequelize.define("Burger", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
        primaryKey: true,
		allowNull: false
	},
	burger_name: {
        type: DataTypes.STRING,
    	allowNull: false,
    	validate: { 
    		notEmpty: false,
    		len: { 
    		args: [1, 140],
    		msg: 'Dont be lazy, type something but not too much!'
    	}
    }
},
    devoured: {
    	type: DataTypes.BOOLEAN,
		defaultValue: false 
	}
  });
  return Burger;
};