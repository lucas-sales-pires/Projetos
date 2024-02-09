<?php
require "./conexao.php";

$emailLogin = $_POST["emailLogin"];
$senhaLogin = $_POST["senhaLogin"];

$sql = $conexao->prepare("SELECT * FROM usuarios WHERE email = :email");
$sql->bindParam(':email', $emailLogin);

try {
    $sql->execute();

    $linha = $sql->fetch(PDO::FETCH_ASSOC);

    if ($linha && password_verify($senhaLogin, $linha["senha"])) {
        $_SESSION["email"] = $emailLogin;
        header("location: ../paginas/conectado.html");
    } else {
        header("location: ../paginas/telaErroLogin.html");
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
