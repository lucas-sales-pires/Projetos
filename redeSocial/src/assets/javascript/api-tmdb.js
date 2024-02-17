const conteudo = document.querySelector(".conteudo");
const tabela = document.querySelector("table");
const tbody = tabela.querySelector("tbody");
let qnt = 0;
let pagina = 1;
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");

function fetchMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyOWU2NzhmNzA1MWI4YzlkYTk4ZWEwYWZhZjRkYyIsInN1YiI6IjY1YzkyOGI1Y2U2YzRjMDE0OWI5NjY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiCKuI_0yEbhUsXtCK7e51O0Jno4GKA4WHB2XnwDsjo'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=${pagina}`, options)
        .then(resposta => resposta.json())
        .then(data => {
            const filmesOrdenados = data.results.sort((a, b) => b.vote_average - a.vote_average);

            tbody.innerHTML = '';

            filmesOrdenados.forEach((item, index) => {
                const filme = document.createElement("tr");
                const lugar = document.createElement("td")
                lugar.innerText = (index + 1 + (pagina - 1) * 20) + "º"; 
                const titulo = document.createElement("td");
                titulo.classList = "titulo";
                const lancamento = document.createElement("td");
                lancamento.classList = "lancamento";
                const pontuacao = document.createElement("td");
                pontuacao.classList = "pontuacao";
                const votos = document.createElement("td")
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
        })
        .catch(err => console.error(err));
}


proximo.addEventListener("click", function () {
    pagina += 1;
    fetchMovies();
});

anterior.addEventListener("click", function () {
    if (pagina > 1) {
        pagina -= 1;
        qnt = 0; 
        fetchMovies();
    }
});
