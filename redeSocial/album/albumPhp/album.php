<?php
require "../../php/conexao.php";
require "../../php/funcoes.php";

$diretorio = "../../imagens/";
$usuario = new Usuario($conexao, $_SESSION["emailUsuarioAtual"]);
$id = $usuario->consultaUsuario()["id"];

$login = $usuario->consultaUsuario()["login"];
$imagens = glob($diretorio.$login."_".'*.{png,jpg,jpeg,gif}',GLOB_BRACE);


if(!empty($imagens)){
    echo json_encode(["imagensAlbum"=>$imagens]);
    
}

