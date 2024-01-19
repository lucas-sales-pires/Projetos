<?php
require "./minhaConexao.php";


function VerificarDados($login, $email)
{
    global $conexao ;
    $sql = "SELECT * FROM usuarios WHERE login = :login OR email = :email ";
    $consulta = $conexao->prepare($sql);
    if($consulta){
        $consulta->bindParam(":login",$login);
        $consulta->bindParam(":email",$email);
        $consulta->execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        return ($resultado !== false);
    }
    else{
        return false;
    }
}
function InserirUsuario($login, $email, $nascimento, $celular, $senha){
    global $conexao;
    try{
        $sql =$conexao->prepare('INSERT INTO usuarios (login, email, nascimento, celular, senha) VALUES (:login, :email, :nascimento, :celular, :senha)');
        $sql -> bindParam(":login",$login,PDO::PARAM_STR);
        $sql -> bindParam(":email",$email,PDO::PARAM_STR);
        $sql -> bindParam(":nascimento",$nascimento);
        $sql -> bindParam(":celular",$celular,PDO::PARAM_STR);
        $sql -> bindParam(":senha",$senha);
        $resultado = $sql -> execute();
        if($resultado){
            echo "Cadastro bem sucedido !";
        }
        else{
            echo "Erro ao cadastrar usuário";
        }

    }
    catch (PDOException $e) {
        echo "ERRO ".$e->getMessage();
    }
}
function consultarDadosUsuario($login) {
    global $conexao;

    try {
        $sql = $conexao->prepare("SELECT * FROM usuarios WHERE login = :login");
        $sql->bindParam(':login', $login);
        $sql->execute();

        $resultados = $sql->fetch(PDO::FETCH_ASSOC);

        if ($resultados) {
            return $resultados;
        } else {
            return false;
        }
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    }
}
