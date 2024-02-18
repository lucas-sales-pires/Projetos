"use strict";

var filme = document.querySelector(".filmeEscolhido");
var buscar = document.querySelector(".buscarFilme");
var formulario = document.querySelector(".formulario");
function buscarFilme(query) {
  var options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyOWU2NzhmNzA1MWI4YzlkYTk4ZWEwYWZhZjRkYyIsInN1YiI6IjY1YzkyOGI1Y2U2YzRjMDE0OWI5NjY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiCKuI_0yEbhUsXtCK7e51O0Jno4GKA4WHB2XnwDsjo'
    }
  };
  fetch("https://api.themoviedb.org/3/search/movie?query=".concat(query, "&include_adult=true&language=pt-BR&page=1"), options).then(function (resposta) {
    return resposta.json();
  }).then(function (data) {
    data.results.forEach(function (item) {
      var filme = document.createElement("div");
      filme.classList = "filme";
      var imagem = document.createElement("img");
      imagem.src = "https://image.tmdb.org/t/p/w200/".concat(item.poster_path);
      var titulo = document.createElement("h3");
      titulo.textContent = item.title;
      var descricao = document.createElement("p");
      descricao.textContent = item.overview;
      filme.appendChild(imagem);
      filme.appendChild(titulo);
      filme.appendChild(descricao);
      document.querySelector(".filmes").appendChild(filme);
    });
  })["catch"](function (err) {
    return console.error(err);
  });
}
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".filmes").innerHTML = "";
  buscarFilme(filme.value);
});