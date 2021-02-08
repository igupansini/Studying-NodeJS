const express = require("express"); //Importando o express.
const app = express(); //Iniciando o express.

//Criando rotas.
app.get("/", function (req, res) {
    res.send("Home Page.");
});

app.get("/test", function (req, res) {
    res.send("Test.");
})

//Iniciando o servidor na porta 8181. 
app.listen(8181, function (erro) {
    if (erro) {
        console.log("Error.");
    } else {
        console.log("Success.");
    }
})