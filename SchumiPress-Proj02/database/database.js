const Sequelize = require("sequelize");

const connection = new Sequelize("schumipress", "igor", "ig091200", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;