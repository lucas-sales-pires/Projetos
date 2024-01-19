const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const porta = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/usuarios", (requisicao, resposta) => {
    resposta.send("Bem-vindo ao meu servidor Express !");
});

app.listen(porta, () => {
    console.log(`Servidor Express rodando em http://localhost:${porta}`);
});
