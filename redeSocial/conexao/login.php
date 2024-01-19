<?php
require "./minhaConexao.php";
require "./funcoes.php";

$login = htmlspecialchars($_POST["nome"]);
$senha = $_POST["senha"];

$usuarios = consultarDadosUsuario($login);

if ($usuarios) {
    if ($usuarios["login"] == $login && password_verify($senha, $usuarios["senha"])) {
        echo "Login bem sucedido";
        header("location: ../principal/index.html");
        exit();
    } else {
        echo "Falha no login";
    }
} else {
    echo "Usuário não encontrado";
}
?>
