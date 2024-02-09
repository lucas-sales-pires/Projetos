$(function(){
    $.ajax({
        url:"../php/informacoes.php",
        success:function(resposta){
            $(".usuario").html(resposta)
        },err: function(){
            $(".usuario").html("Erro")
        }
    })
})
