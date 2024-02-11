"use strict";

var resposta = document.querySelector(".usuario");
fetch("../php/informacoes.php").then(function (resposta) {
  return resposta.text();
}).then(function (json) {
  if (json == "Usuário não conectado") {
    window.location = "../paginas/telaErroLogin.html";
  }
  resposta.innerHTML = json;
});