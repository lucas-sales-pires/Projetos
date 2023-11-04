<?php require 'funcoes.php' 
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alterar Senha</title>
    <link rel="icon" type="image/x-icon" href="../favicon.png">
    <link rel="icon" type="image/x-icon" href="../favicon.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" type="text/css" href="../css/util.css">
    <link rel="stylesheet" type="text/css" href="../css/main.css">


</head>

<body>
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="../principal/index.html"><img src="../imagens/logo-hdr.png" alt=""></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="../principal/index.html">Home</a></li>
                        <li><a href="../2FA/2FA.html">2FA</a></li>
                        <li><a href="../mascara/numeroMascara.html">Numero de Máscara</a></li>
                        <li><a href="../cpaas/cpaas.html">CPAAS</a></li>
                        <li><a href="../google_verified/google_verified.html">Google-Verified</a></li>
                        <li><a href="../sms_programavel/sms_programavel.html">Sms-Programável</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">

                        <li><a><span><i class="bi bi-circle-half"></i>
                                </span>Acessibilidade</a>
                        </li>

        


                        <li><a href="../php/listarUsuarios.php" id="opcaoUsuarioMaster"><span><i class="fa fa-desktop"></i>
                                    </i> Opcoes-Master</span></a></li>

                        <li><a href="../php/trocarSenha.php" id="trocarSenha"><span><i class="fa fa-key"></i>
                                    </i> Alterar Senha</span></a></li>

                        <li><a href="../php/destroySession.php"><span><i class="fas fa-sign-out-alt"></i></span>Sair</a></li>


                        <li><span id="msg" class="alert alert-danger" role="alert"></span>
                </div>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
    <?php
    require 'conexao.php';
    if(isset($_SESSION['perfil'])){
            $perfil = $_SESSION['perfil'];

    }

    if (isset($_SESSION['usuario']) && isset($_SESSION['senha'])) {
        $usuario = $_SESSION['usuario']; //Aqui eu pego o usuario logado 
        $senha = $_POST['Senha']; //Aqui eu pego a senha utilizada para o login
        $dadosUsuario = consultaUsuario($mysqli, $usuario, $perfil);
        $dadosUsuarioSenha = consultarSenha($mysqli, $usuario, $perfil);

        if ($dadosUsuario['usuario'] == $_SESSION['usuario'] && password_verify($senha, $dadosUsuarioSenha)) {
            echo '<!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mudar Senha</title>
    </head>
    
    <body>
    <div class="limiter">
    <div class="container-login100">
        <div class="container2">
        <form action="../php/atualizar.php" method="post" onsubmit="return validarSenhas()" autocomplete="off">
        <div>
        <div class="form-group mt-3">
        <div class="wrap-input100 validate-input" >
            <label for="senhaNova">Nova Senha:</label>
            <input type="password" placeholder="Digite a nova senha" id="senhaNova" name="novaSenha" maxlength="8" minlength="8"  pattern="^[A-Za-z]+$"
            required class="input100">
            <span class="focus-input100"></span>
        <span class="symbol-input100"></span></div>
    
        <div>
        <div class="form-group mt-3">
        <div class="wrap-input100 validate-input" >                      
            <label for="confirmarSenha">Confirmar Senha:</label>
            <input type="password" placeholder="Repita a nova senha" id="confirmarSenha" name="confirmarSenha" maxlength="8" minlength="8"  pattern="^[A-Za-z]+$"
            required class="input100">
        <span class="focus-input100"></span>
        <span class="symbol-input100"></span></div>
    
            <button type="submit" class="btn btn-primary">Enviar</button>
            <button class="btn btn-secundary"><a href="../php/trocarSenha.php">Voltar</a></button>

            <div class="alert alert-danger mt-3" id="erroSenha" style="display: none;">
  As senhas não coincidem. Por favor, verifique.
</div>
<div class="alert alert-success mt-3" id="sucessoSenha" style="display: none;">
  Senha alterada com sucesso.
</div>

        </form>
        </div>
        </div>
    </div>
    
        <script>
        function validarSenhas() {
          let senhaNova = document.getElementById("senhaNova").value;
          let confirmarSenha = document.getElementById("confirmarSenha").value;
      
          if (senhaNova !== confirmarSenha) {
            document.getElementById("erroSenha").style.display = "block";
            return false;
          }
      
          document.getElementById("sucessoSenha").style.display = "block";
      
          setTimeout(function () {
            document.getElementById("sucessoSenha").style.display = "none";
          }, 3000); 
      
          return true;
        }
      </script>
      
    </body>
    
    </html>
    
    ';
        } else {
            echo '<div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="alert alert-danger text-center">
                        <h2>Senha inválida</h2>
                        <p>Infelizmente a senha está incorreta.</p>
                        <a href="../php/trocarSenha.php" class="btn btn-primary">Tentar Novamente.</a>
                    </div>
                </div>
            </div>
        </div>';
        }
    } else {
        echo '<div class="container">
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <div class="alert alert-danger text-center">
                <h2>Ops! Você deslogou.</h2>
                <p>Lamentamos que você tenha saído. Você pode fazer o login novamente clicando no botão abaixo.</p>
                <a href="../login/login.html" class="btn btn-primary">Fazer Login</a>
            </div>
        </div>
    </div>
</div>
';
    }
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"> </script>
    <script src="../geral.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</body>

</html>
