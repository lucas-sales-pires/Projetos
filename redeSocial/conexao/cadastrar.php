<?php
require "./minhaConexao.php";
require "./funcoes.php";

$login = htmlspecialchars($_POST["login"]);
$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$nascimento = $_POST["nascimento"];
$celular = $_POST["celular"];
$senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);

if (VerificarDados($login, $email)) {
    echo "Usuário já cadastrado !";
} else {
    try {
        InserirUsuario($login, $email, $nascimento, $celular, $senha);
    } catch (PDOException $e) {
        echo "erro" . $e->getMessage();
    }
}
