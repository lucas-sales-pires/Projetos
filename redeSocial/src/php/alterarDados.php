<?php
require "conexao.php";


if (isset($_SESSION["email"])) {
    $email = $_SESSION["email"];

    try {
        $sql = $conexao->prepare("SELECT * FROM usuarios WHERE email = :email");
        $sql->bindParam(":email", $email);
        $resultado = $sql->execute();
        
        $dadosUsuario = $sql->fetch(PDO::FETCH_ASSOC);

        echo json_encode($dadosUsuario);

    } catch (PDOException $e) {
        echo json_encode(["erro" => "Erro na consulta: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["erro" => "Usuário não conectado"]);
}
?>
