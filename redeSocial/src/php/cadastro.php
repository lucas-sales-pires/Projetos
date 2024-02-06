<?php 
    require "./conexao.php";

    $cep = $_POST["cep"];
    $endereco = $_POST["endereco"]??"";
    $cidade = $_POST["cidade"]??"";
    $estado = $_POST["estado"]??"não definido";
    $senha = password_hash($_POST["senha"],PASSWORD_DEFAULT);
    $email = $_POST["email"];
    $confirmar = password_hash($_POST["confirmar"],PASSWORD_DEFAULT);

    $sql = $conexao->prepare("INSERT INTO usuarios (cep, endereco, cidade, estado, senha, email) VALUES (:cep, :endereco, :cidade, :estado, :senha, :email)");

    $sql->bindParam(':cep', $cep,PDO::PARAM_STR);
    $sql->bindParam(':endereco', $endereco,PDO::PARAM_STR);
    $sql->bindParam(':cidade', $cidade,PDO::PARAM_STR);
    $sql->bindParam(':estado', $estado,PDO::PARAM_STR);
    $sql->bindParam(':senha', $senha,PDO::PARAM_STR);
    $sql->bindParam(':email', $email,PDO::PARAM_STR);
    try {    
        $sql->execute();
        $numeroLinhas = count($sql->fetchAll());
        if($numeroLinhas > 0){
            var_dump($sql);
        }
    }  catch (PDOException $e) {
            if($e->getCode() == 23000)
            header("location:../paginas/telaErroUsuarioCadastrado.html");
        }
    

    
?>
