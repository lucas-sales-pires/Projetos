<?php
require "conexao.php";


if (isset($_SESSION["email"])) {
    
    $email = $_SESSION["email"];

    try {
        $sql = $conexao->prepare("SELECT email FROM usuarios WHERE email = :email");
        $sql->bindParam(':email', $email);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $valor = $sql->fetch();
            echo $valor["email"];
        } else {
            echo "E-mail não encontrado na base de dados.";
        }
    } catch (PDOException $e) {
        echo "Erro na consulta: " . $e->getMessage();
    }
} else {
    echo "Usuário não conectado";
}
