const { sequelize, DataTypes, Model } = require("./db");
const options = { sequelize };

// Define Squad
class User extends Model {}

User.init(
    {
        username: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false}

    },
    options
);

module.exports = {User};