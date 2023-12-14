<?php
require '../../php/conexao.php';
require '../../php/funcoes.php';
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Problemas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>
<?php
$email = $_POST["email"];
$senha = $_POST["senha"];

$usuario = new Usuario($conexao, $email);

$dadosUsuario = $usuario->consultaUsuario();
$_SESSION["loginUsuarioAtual"] = $dadosUsuario["login"];
$_SESSION["emailUsuarioAtual"] = $email;
$_SESSION["senhaUsuarioAtual"] = $senha;

if ($dadosUsuario !== null) {
    $emailDoBanco = $dadosUsuario["email"];
    $senhaDoBanco = $dadosUsuario["senha"];

    if ($email == $emailDoBanco && $senha == $senhaDoBanco) {
        $_SESSION["loginUsuarioAtual"] = $dadosUsuario["login"];
        $_SESSION["emailUsuarioAtual"] = $emailDoBanco;
        $_SESSION["senhaUsuarioAtual"] = $senha;
        header("location: ../../principal/index.html");
        exit;
    }

    $mensagem = ($senha != $senhaDoBanco ) ? "Senha Incorreta" : null;
} else {
    $mensagem = "Email não cadastrado";
}

echo "
    <div class='text-center'>
        <div class='alert alert-warning p-5' role='alert'> 
            <h1>$mensagem</h1> 
        </div>
    </div>
";
?>

    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>

</html>
