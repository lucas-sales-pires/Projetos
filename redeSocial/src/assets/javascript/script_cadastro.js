let formularioCadastro = document.querySelector("#cadastro");

formularioCadastro.addEventListener("submit", (e) => {
    let senha = document.querySelector("#senha").value;
    let confirmar = document.querySelector("#confirmarSenha").value;

    if (senha !== confirmar) {
        e.preventDefault();
        alert("Senhas não coincidem!");
    } else {
    
        window.location.href = "../../php/cadastro.php";
    }
});
