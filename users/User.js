const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define("users", {
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },senha: {
        type : Sequelize.STRING,
        allowNull:false
    }
})


//Category.sync({force: true}) resetar banco de dados
module.exports = User;