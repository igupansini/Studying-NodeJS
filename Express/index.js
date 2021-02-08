const express = require("express"); //Importando o express.
const app = express(); //Iniciando o express.

app.listen(8181, function (erro) {
    if (erro) {
        console.log("Erro!");
    } else {
        console.log("Sucesso!")
    }
});