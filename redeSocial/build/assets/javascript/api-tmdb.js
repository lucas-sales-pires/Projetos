"use strict";

var conteudo = document.querySelector(".conteudo");
var tbody = document.querySelector("tbody");
var qnt = 0;
function melhor() {
  var options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyOWU2NzhmNzA1MWI4YzlkYTk4ZWEwYWZhZjRkYyIsInN1YiI6IjY1YzkyOGI1Y2U2YzRjMDE0OWI5NjY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiCKuI_0yEbhUsXtCK7e51O0Jno4GKA4WHB2XnwDsjo'
    }
  };
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options).then(function (resposta) {
    return resposta.json();
  }).then(function (data) {
    data.results.forEach(function (item) {
      qnt += 1;
      var lugar = document.createElement("td");
      lugar.innerText = qnt + "º";
      var filme = document.createElement("tr");
      var titulo = document.createElement("td");
      titulo.classList = "titulo";
      var lancamento = document.createElement("td");
      lancamento.classList = "lancamento";
      var pontuacao = document.createElement("td");
      pontuacao.classList = "pontuacao";
      var votos = document.createElement("td");
      votos.classList = "votos";
      titulo.textContent = item.title;
      pontuacao.textContent = item.vote_average;
      lancamento.textContent = item.release_date;
      votos.textContent = item.vote_count;
      filme.appendChild(lugar);
      filme.appendChild(titulo);
      filme.appendChild(pontuacao);
      filme.appendChild(lancamento);
      filme.appendChild(votos);
      tbody.appendChild(filme);
    });
  })["catch"](function (err) {
    return console.error(err);
  });
}