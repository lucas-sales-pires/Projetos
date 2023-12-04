const pastaFotos = "..imagens/";

const extensoesPermitidas = ['.jpg', '.jpeg', '.png', '.gif'];

function extensaoPermitida(nomeArquivo) {
    return extensoesPermitidas.some(extensao => nomeArquivo.toLowerCase().endsWith(extensao));
}

function carregarFotos() {
    const divFotos = document.getElementById("fotos");
    const body = document.querySelector("body");

    for (let i = 1; i <= 10; i++) {
        const img = document.createElement("img");
        const nomeArquivo = `foto${i}`;
        
        if (extensaoPermitida(nomeArquivo)) {
            img.src = `${pastaFotos}/${nomeArquivo}.jpg`; 
            img.alt = `Foto ${i}`;
            divFotos.appendChild(img);
            body.appendChild(divFotos)
        }
    }
}


window.onload = carregarFotos;
