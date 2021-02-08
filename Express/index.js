const express = require("express"); //Importando o express.
const app = express(); //Iniciando o express.

//Criando rotas.
app.get("/", function (req, res) {
    res.send("Home Page.");
});

app.get("/test", function (req, res) {
    res.send("Test.");
})

//Rota com parâmetro opcional "?". 
app.get("/about/:parameter?", function (req, res) {
    var parameter = req.params.parameter;

    if (parameter) {
        res.send(parameter);
    } else {
        res.send("About.");
    }
})

//Iniciando o servidor localhost na porta 8181. 
app.listen(8181, function (erro) {
    if (erro) {
        console.log("Error.");
    } else {
        console.log("Success.");
    }
})