const td = document.querySelectorAll("td");
const resposta = document.querySelector("#resposta");
const ranking = document.querySelector(".ranking")
let numerosSorteados = [];

td.forEach((numero) => {
    numero.addEventListener("click", () => {       
         if (numerosSorteados.length <  6) {

        if (numero.classList) numero.classList.toggle("toggle");

        if (numero.classList.contains("toggle") && numerosSorteados.length < 6) {
            numerosSorteados.push(numero.textContent);
        } else {
            numerosSorteados = numerosSorteados.filter((num) => num !== numero.textContent);
        }

        }
        else{
            alert("Escolha no máximo 6 números")

        }
    });
});

const jogadores = [
    {
        nome: "Lucas", bilhetes: [
            { numeros: [5, 3, 20, 17, 34, 60] },
            { numeros: [5, 2, 8, 10, 15, 54] },
            { numeros: [9, 11, 22, 24, 36, 45] },
            { numeros: [1, 7, 40, 56, 30, 18] },
            { numeros: [11, 23, 28, 36, 50, 51] },
            { numeros: [13, 14, 21, 33, 55, 60] }
        ]
    },
    {
        nome: "Alex", bilhetes: [
            { numeros: [1, 5, 12, 34, 36, 58] },
            { numeros: [3, 11, 32, 36, 42, 59] },
            { numeros: [4, 5, 17, 22, 43, 59] },
            { numeros: [2, 5, 12, 17, 34, 48] },
            { numeros: [5, 12, 17, 22, 34, 42] }
        ]
    },
    {
        nome: "Henrique", bilhetes: [
            { numeros: [6,16,41,7,13,30] },
            { numeros: [9,22,42,8,57,25] },
            { numeros: [29,4,12,10,30,6] },
            { numeros: [21,43,51,33,12,41] },
            { numeros: [35,44,29,55,28,47] },
            { numeros: [56,11,25,36,51,30] }
        ]
    },

    {
        nome: "Lais", bilhetes: [
            { numeros: [3, 10, 29, 16, 17, 8] },
            { numeros: [19, 9, 17, 27, 25, 26] },
            { numeros: [11, 12, 4, 31, 32, 55] },
            { numeros: [57, 44, 23, 2, 14, 20] },
            { numeros: [59, 21, 1, 50, 7, 58] },
            { numeros: [39, 43, 6, 24, 30, 24] }
        ]
    }];

    function verificarAcertos() {
        resposta.innerHTML = "";
    
        if (numerosSorteados.length === 6) {
            for (const jogador of jogadores) {
                const nome = jogador.nome;
                
                const bilhetesOrdenados = jogador.bilhetes.slice();
    
                bilhetesOrdenados.sort((a, b) => {
                    const acertosA = contarAcertos(numerosSorteados, a.numeros);
                    const acertosB = contarAcertos(numerosSorteados, b.numeros);
    
                    return acertosB - acertosA;
                });
    
                for (let i = 0; i < bilhetesOrdenados.length; i++) {
                    const numerosEscolhidos = bilhetesOrdenados[i].numeros;
                    const numAcertos = contarAcertos(numerosSorteados, numerosEscolhidos);
    
                    resposta.innerHTML += `${nome} Bilhete ${i + 1} acertou <p style="color: red; font-weight: bold;">${numAcertos} números</p>.<br>`;
                }
            }
        } else {
            alert("Escolha ao menos 6 números");
        }
    }
    

function contarAcertos(numerosSorteados, numerosEscolhidos) {
    return numerosEscolhidos.filter(numero => numerosSorteados.includes(String(numero))).length;
}
