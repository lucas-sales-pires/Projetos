<?php

require "./php/conection.php";
if ($_SERVER ['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['id_comum'];
    $Cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $celular = $_POST['celular'];

    $sql = "INSERT INTO usuarioComum (ID_comum, cpf, email, senha, celular) VALUES ('$name', '$Cpf', '$email', '$senha', '$celular')";
    var_dump($_REQUEST);


    $mysqli->query($sql);
}
?>
