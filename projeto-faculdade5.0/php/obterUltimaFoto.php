<?php
$dir = '../fotosPerfil/';
$imagens = glob($dir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

if (!empty($imagens)) {
    usort($imagens, function ($a, $b) { 
        return filemtime($b) - filemtime($a);// filem junto com o - eu uso pra sortear em ordem decrescente
    });

    $ultimaImagem = $imagens[0]; //pego a primeira deste sorteio feito acima

    echo json_encode(['caminhoImagem' => $ultimaImagem]);
} else {
    echo json_encode(['caminhoImagem' => '../fotoPadrao/pngwing.com.png']);
}
?>
