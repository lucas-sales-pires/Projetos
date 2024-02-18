const url = "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=12"
function noticias (url) {
    fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
        data.items.forEach((item) => {
            const noticia = document.createElement("div");
            noticia.classList = "noticia";;
            const titulo = document.createElement("h3");
            titulo.textContent = item.titulo;
            const descricao = document.createElement("p");
            descricao.textContent = item.introducao;
            noticia.appendChild(titulo);
            noticia.appendChild(descricao);
            document.querySelector(".noticias").appendChild(noticia);
        });
    })
    .catch(err => console.error(err));
    
}
noticias(url)
