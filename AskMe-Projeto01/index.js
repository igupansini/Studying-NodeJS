const express = require("express");
const app = express();

//Usando EJS como view engine. 
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8181, () => {
    console.log("Success.");
});