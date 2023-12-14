class Album {
    constructor() {
        this.imagens = []
        this.carregarImagens()
    }
    
    carregarImagens() {
        fetch("../../album/albumPhp/album.php")
            .then(resposta => resposta.json())
            .then(data => {
                this.imagens = data.imagensAlbum
                this.indiceAtual = parseInt(localStorage.getItem("indiceAtual")) || 0
                this.exibirImagemAtual()
                this.mostrarBotoes();
            })
    }
    exibirImagemAtual() {
        const album = document.querySelector("#fotos")
        album.innerHTML = ""

        const imagemAtual = document.createElement("img")
        imagemAtual.classList.add("img-fluid")
        imagemAtual.src = this.imagens[this.indiceAtual]
        
        album.appendChild(imagemAtual)


        this.carregarBotoes()
        this.salvarLocalStorageNaSessao()
    }
    mostrarBotoes() {
        const botaoAnterior = document.querySelector("#anterior");
        const botaoProximo = document.querySelector("#proximo");
    
        botaoAnterior.style.display = "inline-block";
        botaoProximo.style.display = "inline-block";
    }
    proximaImagem() {
        if (this.indiceAtual < this.imagens.length - 1) {
            this.indiceAtual++
            this.exibirImagemAtual()
        }
    }
    imagemAnterior() {
        if (this.indiceAtual > 0) {
            this.indiceAtual--
            this.exibirImagemAtual()
        }
    }
    carregarBotoes() {
        const botaoAnterior = document.querySelector("#anterior")
        const botaoProximo = document.querySelector("#proximo")

        botaoAnterior.disabled = this.indiceAtual == 0       
        botaoProximo.disabled = this.indiceAtual == this.imagens.length - 1

    }
    salvarLocalStorageNaSessao() {
        localStorage.setItem("indiceAtual", this.indiceAtual)
    }
}

window.onload = () => {
    const album = new Album()
    document.querySelector("#anterior").addEventListener("click", () => {
        album.imagemAnterior()
    })
   document.querySelector("#proximo").addEventListener("click", () => {
        album.proximaImagem()
    })
}





