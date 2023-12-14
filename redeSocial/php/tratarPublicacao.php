<?php
require "./conexao.php";
require "./funcoes.php";

$usuario = new Usuario($conexao, $_SESSION["emailUsuarioAtual"]);
$login = $usuario->consultaUsuario()["login"];
if (isset($_FILES["foto"])) {
    $foto = $_FILES["foto"];
    $publicacao = $_POST["escrita"];
    $diretorioDestino = "../imagens/";
    $nomeArquivo = $login . "_" . basename($foto["name"]);
    $caminhoCompleto = $diretorioDestino . $nomeArquivo;
    move_uploaded_file($foto["tmp_name"], $diretorioDestino . $nomeArquivo);
    $imagens = glob($diretorioDestino . '*.{png,jpeg,jpg,gif}', GLOB_BRACE);


    if (!empty($imagens)) {
        usort($imagens, function ($a, $b) {
            return filemtime($b) - filemtime($a);
        });

        $ultimaImagem = $imagens[0];

        echo json_encode(['caminhoImagem' => $ultimaImagem, 'caminhoPublicacao' => $publicacao]);
    } else {
        echo json_encode(['erro' => 'Nenhuma imagem encontrada no diretório.']);
    }
} else {
    echo json_encode(['erro' => 'Nenhum arquivo enviado.']);
}
