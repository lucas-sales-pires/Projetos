<?php
require "conexao.php";


if (isset($_SESSION["email"])) {
    $email = $_SESSION["email"];

    try {
        $stmt = $conexao->prepare("SELECT email FROM usuarios WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $valor = $stmt->fetch();
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
