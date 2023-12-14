<?php
$diretorio = "../../imagens/";
$imagens = glob($diretorio.'*.{png,jpg,jpeg,gif}',GLOB_BRACE);

if(!empty($imagens)){
    echo json_encode(["imagensAlbum"=>$imagens]);
}

