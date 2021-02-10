const sequelize = require("sequelize");

const conexao = new sequelize("askme", "igor", "ig091200", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = conexao;