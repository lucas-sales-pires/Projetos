"use strict";

var formularioCadastro = document.querySelector("#cadastro");
formularioCadastro.addEventListener("submit", function (e) {
  var senha = document.querySelector("#senha").value;
  var confirmar = document.querySelector("#confirmarSenha").value;
  if (senha !== confirmar) {
    e.preventDefault();
    alert("Senhas não coincidem!");
  } else {
    window.location.href = "../../php/cadastro.php";
    pdaf;
  }
});