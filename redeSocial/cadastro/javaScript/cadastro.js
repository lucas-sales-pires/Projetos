$("#cep").on("input",async ()=>{
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
    $("#celular").on("blur",()=>{
        if($("#celular").val().length != 15){
            exibirToast("Número incorreto",true)
        }
        else{
            exibirToast("Número correto",false)
        }
    })
}

$("#nascimento").on("blur", () => {
    let dataInput = $("nascimento").val();
    let dataValor = dataInput.value;
    let dataNascimento = new Date(dataValor);
    let dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade >= 18 && idade <= 105) {
        exibirToast("Idade válida: " + idade + " anos");
    } else {
        exibirToast("Idade inválida");
    }
});

function validarIdade() {
    let anoAtual = new Date();
    let dataNascimento = new Date($("#nascimento").val());
  
    let idade = anoAtual.getFullYear() - dataNascimento.getFullYear();
  
    if (anoAtual.getMonth() < dataNascimento.getMonth() || (anoAtual.getMonth() === dataNascimento.getMonth() && anoAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }
  
    if (idade >= 18 && idade <= 100) {
        exibirToast("Idade válida.", false);
    } else {
        exibirToast("Idade inválida.", true);
        document.getElementById('nasc').value = '';
    }
  }
  
  function exibirToast(mensagem, erro) {
    let toast = document.getElementById('toast');
    toast.innerHTML = mensagem;
  
    erro ? toast.classList.add('erro') : toast.classList.remove('erro');
  
    toast.style.display = 'block';
  
    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000);
  }
    
    

    




































