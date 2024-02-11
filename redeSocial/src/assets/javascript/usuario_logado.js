let resposta = document.querySelector(".usuario");

fetch("../php/informacoes.php")
    .then(resposta => resposta.text())
    .then ( json => {
        if(json == "Usuário não conectado"){
            window.location = "../paginas/telaErroLogin.html"
        }
        resposta.innerHTML = json;

    })


// $(function(){
//     $.ajax({
//         url:"../php/informacoes.php",
//         success:function(resposta){
//             if(resposta == "Usuário não conectado"){
//                 window.location = "../paginas/telaErroLogin.html"
//             }
//             $(".usuario").html(resposta)
//         },err: function(){
//             $(".usuario").html("Erro")
//         }
//     })
// })
