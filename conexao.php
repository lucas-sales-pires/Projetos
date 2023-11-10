<?php 
$host= "localhost";
$usuario="root";
$senha="";
$banco="Escolar";
$mysqli=New mysqli($host, $usuario, $senha, $banco);
session_start();
if ($mysqli->error) { // Caso aconteça algum erro para conectar, deve aparecer isso
    die("Falha ao conectar no servidor" . $mysqli->error);
}


$consulta = $mysqli->query("INSERT INTO funcionarios(cargos, nomes, cpf, idade, id) VALUES ('diretor', 'julio', 23456787889, 55, 1);");

?>
