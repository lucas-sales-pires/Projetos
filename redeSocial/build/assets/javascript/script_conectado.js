"use strict";

document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown");
  dropdown.style.display = dropdown.contains(event.target) ? "block" : "none";
});
fetch("/usuarios").then(function (resposta) {
  return resposta.json();
}).then(function (r) {
  return alert(r);
});