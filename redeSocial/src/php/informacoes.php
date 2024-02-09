<?php
require "conexao.php";
$email = $_SESSION["email"];
$sql = $conexao->query("SELECT email FROM usuarios where email = '$email'");
if ($sql->rowCount() > 0) {
    $valor = $sql->fetch();
    echo $valor["email"];
}
