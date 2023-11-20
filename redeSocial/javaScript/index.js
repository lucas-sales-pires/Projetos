function adicionarPublicacao(nomeAutor, conteudo) {
    let feed = document.getElementById('publicacoes');

    let postagem = document.createElement('div');
    postagem.className = 'postagem';

    let autor = document.createElement('p');
    autor.className = 'autor';
    autor.innerText = nomeAutor;

    let conteudoPostagem = document.createElement('p');
    conteudoPostagem.className = 'conteudo';
    conteudoPostagem.innerHTML = conteudo;

    let botao = document.createElement("button");
    botao.className = "curtirBtn";
    botao.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';

    let curtir = document.createElement('p');
    curtir.className = 'curtir';

    let botaoComentario = document.createElement("button");
    botaoComentario.className = "comentarioBtn";
    botaoComentario.innerHTML = '<i class="fa-regular fa-comment"></i>';

    let curtida = 0;


    let curtidas = document.createElement("p");
    curtidas.innerHTML = curtida
    curtidas.style.display = "none";




    postagem.appendChild(autor);
    postagem.appendChild(conteudoPostagem);
    postagem.appendChild(botao);
    postagem.appendChild(botaoComentario).style.marginLeft = "2%";
    postagem.appendChild(curtidas);

    feed.appendChild(postagem);
   
    botao.addEventListener("click", () => {
        botao.classList.toggle("curtido");
        curtida = botao.classList.contains("curtido") ? curtida + 1 : curtida - 1;
        curtidas.innerHTML = "curtidas : " + curtida;
        curtida == 0 ? curtidas.style.display = "none" : curtidas.style.display = "inline-block";
        curtidas.style.margin = "auto";
        curtidas.innerHTML = "curtidas: " + curtida;
    })

    botaoComentario.addEventListener("click", () => {
        postagem.style.height = (postagem.style.height == '20rem') ? 'auto' : '20rem';
    })
}

let imagem = '<img src = "../imagens/redeSocial.jpeg" class="img-fluid"></img>';
let imagem2 = '<img src = "../imagens/mrbean.jpg" class="img-fluid"></img>';
let imagem3 = '<img src = "../imagens/bobEsponja.jpg" class="img-fluid"></img>';

adicionarPublicacao('Lucas Postou:', imagem);
adicionarPublicacao('Márcio Postou:', imagem2);
adicionarPublicacao('José Postou:', imagem3);


