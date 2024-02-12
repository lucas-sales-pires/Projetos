const conteudo = document.querySelector(".conteudo");
const tbody = document.querySelector("tbody");
let qnt = 0;

function melhor() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkyOWU2NzhmNzA1MWI4YzlkYTk4ZWEwYWZhZjRkYyIsInN1YiI6IjY1YzkyOGI1Y2U2YzRjMDE0OWI5NjY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TiCKuI_0yEbhUsXtCK7e51O0Jno4GKA4WHB2XnwDsjo'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(resposta => resposta.json())
        .then(data => {
            data.results.forEach(item => {
                qnt += 1;
                const lugar = document.createElement("td")
                lugar.innerText = qnt + "º";
                const filme = document.createElement("tr");
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
