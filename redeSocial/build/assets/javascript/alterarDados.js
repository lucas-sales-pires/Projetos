"use strict";

var email = document.querySelector("#email");
var cep = document.querySelector("#cep");
fetch("../php/alterarDados.php").then(function (resposta) {
  return resposta.json();
}).then(function (resultado) {
  if (resultado.erro) {
    console.error(resultado.erro);
  } else {
    email.value = resultado.email;
    cep.value = resultado.cep;
  }
});