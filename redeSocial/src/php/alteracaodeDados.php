<?php 
    require "conexao.php";

    $emailBanco = $_SESSION["email"];
    $email = $_POST["email"];
    $cep = $_POST["cep"];
    $senha = $_POST["senha"];

    $senhaBanco = $conexao->prepare("SELECT senha from usuarios WHERE email = :email");
    $senhaBanco->bindParam(":email", $emailBanco);
    $senhaBanco->execute();
    $resultado = $senhaBanco->fetch(PDO::FETCH_ASSOC);

    if(password_verify($senha, $resultado["senha"])) {
        try {
            $sql = $conexao->prepare("UPDATE usuarios SET email = :email, cep = :cep WHERE email = :emailBanco");
            $sql->bindParam(":email", $email);
            $sql->bindParam(":cep", $cep);
            $sql->bindParam(":emailBanco", $emailBanco);
            $sql->execute();
            echo "Atualização realizada com sucesso!";
            $_SESSION["email"] = $email;
            var_dump($_SESSION);
        } catch(PDOException $e) {
            echo "Ocorreu um erro: " . $e->getMessage();
        }
    } else {
        echo "Senha incorreta";
    }
?>
