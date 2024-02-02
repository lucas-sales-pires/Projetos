document.addEventListener("click", function (event) {
    let dropdown = document.querySelector(".dropdown");
    dropdown.style.display = dropdown.contains(event.target) ? "block" : "none";
});

fetch("/usuarios").then(resposta => resposta.json()).then((r)=>alert(r))
