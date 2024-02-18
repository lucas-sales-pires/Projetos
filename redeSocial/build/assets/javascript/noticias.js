"use strict";

var url = "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=12";
function noticias(url) {
  fetch(url).then(function (resposta) {
    return resposta.json();
  }).then(function (data) {
    data.items.forEach(function (item) {
      var noticia = document.createElement("div");
      noticia.classList = "noticia";
      ;
      var titulo = document.createElement("h3");
      titulo.textContent = item.titulo;
      var descricao = document.createElement("p");
      descricao.textContent = item.introducao;
      noticia.appendChild(titulo);
      noticia.appendChild(descricao);
      document.querySelector(".noticias").appendChild(noticia);
    });
  })["catch"](function (err) {
    return console.error(err);
  });
}
noticias(url);