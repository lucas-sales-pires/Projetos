const filme = document.querySelector(".filmeEscolhido")
const buscar = document.querySelector(".buscarFilme");
const formulario = document.querySelector(".formulario");

function buscarFilme(query) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyOWU2NzhmNzA1MWI4YzlkYTk4ZWEwYWZhZjRkYyIsInN1YiI6IjY1YzkyOGI1Y2U2YzRjMDE0OWI5NjY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiCKuI_0yEbhUsXtCK7e51O0Jno4GKA4WHB2XnwDsjo'
        }
    };
      

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=pt-BR&page=1`, options)
        .then(resposta => resposta.json())
        .then(data => {
            data.results.forEach((item) => {
                const filme = document.createElement("div");
                filme.classList = "filme";
                const imagem = document.createElement("img");
                imagem.src = `https://image.tmdb.org/t/p/w200/${item.poster_path}`;
                const titulo = document.createElement("h3");
                titulo.textContent = item.title;
                titulo.classList = "titulo";
                const descricao = document.createElement("p");
                descricao.classList = "descricao";
                descricao.innerHTML = item.overview ;
                const linha = document.createElement("hr");
                const tituloPontuacao = document.createElement("h4");
                tituloPontuacao.classList = "tituloPontuacao";
                tituloPontuacao.textContent = "Pontuação:";
                const pontuacao = document.createElement("p");
                pontuacao.classList = "pontuacao";
                pontuacao.textContent = item.vote_average;
               
                
                
                filme.appendChild(imagem);
                filme.appendChild(titulo);
                filme.appendChild(descricao);
                filme.appendChild(linha);
                filme.appendChild(tituloPontuacao);
                filme.appendChild(pontuacao);
                document.querySelector(".filmes").appendChild(filme);
            });
       
        }
            )
        .catch(err => console.error(err));
   
}


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".filmes").innerHTML = "";
    buscarFilme(filme.value);
});


