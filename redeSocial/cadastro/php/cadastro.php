<?php
require "../../php/conexao.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $login = $_POST["login"];
    $email = $_POST["email"];
    $cep = $_POST["cep"];
    $endereco = $_POST["endereco"];
    $celular = $_POST["celular"];
    $senha = $_POST["senha"];
    $nascimento = $_POST["nascimento"];

    $sql = "INSERT INTO usuarios (nome,login,email,cep,endereco,celular,senha,nascimento) VALUES(:nome,:login,:email,:cep,:endereco,:celular,:senha,:nascimento);";
    $consulta = $conexao->prepare($sql);
    $consulta->bindParam(":nome", $nome, PDO::PARAM_STR);
    $consulta->bindParam(":login", $login, PDO::PARAM_STR);
    $consulta->bindParam(":email", $email, PDO::PARAM_STR);
    $consulta->bindParam(":cep", $cep, PDO::PARAM_STR);
    $consulta->bindParam(":endereco", $endereco, PDO::PARAM_STR);
    $consulta->bindParam(":celular", $celular, PDO::PARAM_STR);
    $consulta->bindParam(":senha", $senha, PDO::PARAM_STR);
    $consulta->bindParam(":nascimento", $nascimento, PDO::PARAM_STR);

    $consulta->execute();
}else{
    echo "Estamos com uma instabilidade no sistema, Lamentamos.";
}
