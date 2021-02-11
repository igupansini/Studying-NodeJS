const sequelize = require("sequelize");
const conexao = require("./database");

const Resposta = conexao.define("resposta", {
    textoResposta: {
        type: sequelize.TEXT,
        allowNull: false
    },

    perguntaId: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({ force: false });

module.exports = Resposta;