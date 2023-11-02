<?php
// Import PHPMailer classes into the global namespace

use PHPMailer\PHPMailer\PHPMailer;



// Load Composer's autoloader
require 'vendor/autoload.php';

// Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through (Gmail)
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'diegophp07@gmail.com';                 // SMTP username (seu e-mail)
    $mail->Password   = 'Diego2018';                           // SMTP password (sua senha)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption
    $mail->Port       = 587;                                    // TCP port for Gmail SMTP

    // Recipients
    $mail->setFrom('diegophp07@gmail.com', 'Seu Nome');           // Seu endereço de e-mail
    $mail->addAddress('saleslucas2009@gmail.com', 'Lucas Sales'); // Endereço do destinatário

    // Content
    $mail->isHTML(true);                                       // Set email format to HTML
    $mail->Subject = 'Aqui está o assunto';
    $mail->Body    = 'Esta é a mensagem HTML <b>em negrito!</b>';
    $mail->AltBody = 'Esta é a mensagem em texto simples para clientes de e-mail que não suportam HTML';

    $mail->send();
    echo 'A mensagem foi enviada';
} catch (Exception $e) {
    echo "A mensagem não pôde ser enviada. Erro do Mailer: {$mail->ErrorInfo}";
}
?>
