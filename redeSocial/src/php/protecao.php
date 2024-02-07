<?php 
require "./conexao.php";
    if(!isset ($_SESSION["email"])){
        $resultado = "Usuário deslogado";
        echo json_encode(['resultado' => $resultado]);
        die("Você deve estar logado para acessar este conteudo");
    }

?>
