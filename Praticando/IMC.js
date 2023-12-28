/*
IMC	Classificação
Menor que 18,5	Magreza
18,5 a 24,9	Normal
25 a 29,9	Sobrepeso
30 a 34,9	Obesidade grau I
35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III


IMC = peso / (altura x altura).
*/

const resposta = document.querySelector("#telapreta p")
document.querySelector("#botao").addEventListener("click", () => {
    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value
    let imc = peso / (altura * altura)


    if(imc < 18.5){
        resposta.innerHTML = "Seu IMC é baixo, você está magro!"+imc.toFixed(2)
    }
    else if(imc <=24.9){
        resposta.innerHTML = "Seu IMC é normal!"+imc.toFixed(2)
    }
    else if(imc <=29.9){
        resposta.innerHTML = "Você está com sobrepeso, cuidado!"+imc.toFixed(2)        
    }
    else if (imc <=34.9){
        resposta.innerHTML = "Obesidade grau I, procure um medíco!"+imc.toFixed(2)
    }else if (imc <= 39.9){
        resposta.innerHTML = "Obesidade grau II, sua saúde está crítica!"+imc.toFixed(2)
    }else{
        resposta.innerHTML = "Obesidade grau III, se você engordar mais, você morre!"+imc.toFixed(2)
    }

})

