const sequelize = require("sequelize");
const conexao = require("./database");

const Pergunta = conexao.define("pergunta", {
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },

    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({ force: false }).then(() => {
    console.log("Tabela criada.");
});

module.exports = Pergunta;
