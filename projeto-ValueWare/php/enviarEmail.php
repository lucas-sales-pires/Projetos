<?php
require '../vendor/autoload.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $empresa = $_POST['empresa'];
    $cargo = $_POST['cargo'];
    $mensagem = $_POST['mensagem'];

    $destinatario = 'contato@valueware.com.br';
    
    $transporter = new \PHPMailer\PHPMailer\PHPMailer();
    $transporter->isSMTP();
    $transporter->Host = 'smtp.office365.com';
    $transporter->SMTPAuth = true;
    $transporter->Username = $email;
    $transporter->Password = 'Diego2017';
    $transporter->SMTPSecure = 'tls';
    $transporter->Port = 587;

    $transporter->setFrom('diegofrancosales@outlook.com', 'Telecall-Recuperação');
    $transporter->addAddress($destinatario);
    $transporter->Subject = 'Nova Mensagem do Formulário de Contato';
    $transporter->Body = "Nome: $nome\nTelefone: $telefone\nEmail: $email\nEmpresa: $empresa\nCargo: $cargo\nMensagem: $mensagem";

    // Enviar e-mail
    if ($transporter->send()) {
        echo '<p id="verifique">Mensagem enviada com sucesso!</p>';
    } else {
        echo 'Erro ao enviar a mensagem: ' . $transporter->ErrorInfo;
    }
}
?>


