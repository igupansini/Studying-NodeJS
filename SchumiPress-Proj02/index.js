const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

connection.authenticate().then(() => {
    console.log("Conexao feita com o DB.")
}).catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8181, () => {
    console.log("Success.");
});