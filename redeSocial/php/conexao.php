<?php
session_start();

$host = "localhost";
$banco = "redesocial";
$usuario = "root";
$senha = "";

try {
    $dsn = "mysql:host=$host;dbname=$banco;charset=utf8";
    $conexao = new PDO($dsn, $usuario, $senha);
    $conexao->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ATTR_ERRMODE);
} catch (PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
}
