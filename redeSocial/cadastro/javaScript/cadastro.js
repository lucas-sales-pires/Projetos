let cep = document.getElementById("cep");

cep.addEventListener("input",async ()=>{
    try{
        let valorCep = cep.value; 
        let viaCep = "https://viacep.com.br/ws/" + valorCep + "/json/";
        let resposta = await fetch(viaCep);
        if(resposta.ok){
            let dados = await resposta.json();
            let celular = document.getElementById("celular");
            celular.value = dados.ddd+" "||"";
        }

    }catch(error){
        console.log(error)
    }
})

function ajustaCelular(v) {
    
    v.value = v.value.replace(/\D/g, "");
    v.value = v.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    v.value = v.value.replace(/(\d{4,5})(\d)/, "$1-$2");
}

document.getElementById("nascimento").addEventListener("blur", () => {
    let dataInput = document.getElementById("nascimento");
    let dataValor = dataInput.value;
    let dataNascimento = new Date(dataValor);
    let dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade >= 18 && idade <= 105) {
        console.log("Idade válida: " + idade + " anos");
    } else {
        console.log("Idade inválida");
    }
});


    
    

    




































