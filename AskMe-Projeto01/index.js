const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conexao = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

//Database
conexao.authenticate().then(() => {
    console.log("Conexao feita com o DB.")
}).catch((msgErro) => {
    console.log(msgErro);
});

//Usando EJS como view engine. 
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    Pergunta.findAll({
        raw: true, order: [
            ["id", "DESC"]
        ]
    }).then(perguntas => {
        res.render("index", { perguntas: perguntas });
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/perguntafeita", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({
                where: { perguntaId: pergunta.id },
                order: [["id", "DESC"]]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else {
            res.redirect("/");
        }
    });
});

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        textoResposta: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    });
})

app.listen(8181, () => {
    console.log("Success.");
});