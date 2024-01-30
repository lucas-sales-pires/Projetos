const li = document.querySelector("li")
const perguntas = [...document.querySelector(".perguntas_frequentes")]

perguntas.forEach(element => {
    element.addEventListener("click",()=>{
        alert("ola")
    })
});
