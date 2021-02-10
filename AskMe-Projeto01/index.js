const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Usando EJS como view engine. 
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/perguntafeita", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario Enviado.");
});

app.listen(8181, () => {
    console.log("Success.");
});