const Sequelize = require ("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category")

const Article = connection.define("articles",{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body: {
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Category.hasMany(Article);//uma Categoria Tem Muitos Artigos
 Article.belongsTo(Category); // ta dizendo que umm atigo pertence a uma categoria

 
 // Article.sync({force: true}) resetar banco de dados
module.exports = Article;