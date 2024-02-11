"use strict";

var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var porta = 3003;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/usuarios", function (requisicao, resposta) {
  resposta.send("Bem-vindo ao meu servidor Express !");
});
app.listen(porta, function () {
  console.log("Servidor Express rodando em http://localhost:".concat(porta));
});