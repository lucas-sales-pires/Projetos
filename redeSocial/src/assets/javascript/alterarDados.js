let email = document.querySelector("#email");
let cep = document.querySelector("#cep");
fetch("../php/alterarDados.php")
    .then(resposta => resposta.json())
    .then(resultado => {
        if (resultado.erro) {
            console.error(resultado.erro);
        } else {
            email.value =  resultado.email 
            cep.value = resultado.cep
                              
        }
    })



