<?php
require "./conexao.php";
require "./funcoes.php";

$usuario = new Usuario($conexao, $_SESSION["emailUsuarioAtual"]);
$login = $usuario->consultaUsuario()["login"];
$nome = $usuario->consultaUsuario()["nome"];
$partesDoNome = explode(" ", $nome);
$primeiroNome = $partesDoNome[0];

if (isset($_FILES["foto"])) {
    $foto = $_FILES["foto"];
    $comentarios = [];
    $publicacao = $_POST["escrita"];
    $_SESSION["escrita"] = $publicacao;
    $diretorioDestino = "../imagens/";
    $nomeArquivo = $login . "_" . basename($foto["name"]);
    $caminhoCompleto = $diretorioDestino . $nomeArquivo;
    move_uploaded_file($foto["tmp_name"], $diretorioDestino . $nomeArquivo);
    $imagens = glob($diretorioDestino . '*.{png,jpeg,jpg,gif}', GLOB_BRACE);
    $ultima = end($imagens);
    array_push($comentarios, $publicacao);



    if (!empty($imagens)) {
        $dados= ['ultimaImagem' => $ultima,'caminhoImagem' => $imagens, 'comentarios' => $comentarios,'primeiroNome' => $primeiroNome ];
        echo json_encode($dados);
    } else {
        echo json_encode(['erro' => 'Nenhuma imagem encontrada no diretório.']);
    }
} else {
    echo json_encode(['erro' => 'Nenhum arquivo enviado.']);
}
