<?php require 'conexao.php';
require 'funcoes.php'; ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opções Master</title>
    <link rel="icon" type="image/x-icon" href="../favicon.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" type="text/css" href="../css/util.css">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" href="../estilosPhp.css">

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
                        <li><a><span class="icon-container"><i class="bi bi-circle-half"></i></span>Acessibilidade</a></li>
                        <li><a href="../cadastro/cadastro.html"><span class="icon-container"><i class="bi bi-file-earmark-text"></i></span>Cadastre-se</a></li>
                        <li><a href="../login/login.html"><span class="icon-container"><i class="bi bi-person"></i></span>Login</a></li>
                        <li class="dropdown" id="opcaoUsuarioMaster">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Opção Master
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="../php/listarUsuarios.php">Listar Usuários</a></li>
                                <li><a href="../php/downloadBD.php">Download Banco</a></li>
                                <li><a href="../php/gerarPdf.php">Gerar listarUsuarios</a></li>
                                <li><a href="../php/pesquisarUsuario.php">Pesquisar Usuario</a></li> <li><a href="../php/consultarLogs.php">ConsultarLogs</a></li>
                            </ul>
                        </li>
                        <li><a href="../php/trocarSenha.php" id="trocarSenha"><span class="icon-container"><i class="fa fa-key"></i></span>Alterar Senha</a></li>
                        <li><a href="../modeloDeBanco/modelo.html" id="modelo"><span class="icon-container"><i class="fas fa-database"></i></span>Modelo Banco</a></li>
                        <li><a href="../php/destroySession.php"><span class="icon-container"><i class="fas fa-sign-out-alt"></i></span>Sair</a></li>
                        <li><span id="msg" class="alert alert-danger" role="alert"></span>
                    </ul>

                </div>
                </li>



                </ul>
            </div>
            </div>
        </nav>         <div id="profile-picture-container">
            <img id="fotoPerfil" src="" alt="Foto de Perfil">
        </div>


    </header>
    <div class="pesquisa">
        <h2>Listar Todos os Usuários</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="formularioMaster" autocomplete="off">
            <input type="submit" name="listarUsuarios" value="Listar Todos os Usuários" class="btn btn-primary">
            <input type="submit" name="listarUsuariosComuns" value="Listar Usuários Comuns" class="btn btn-primary">
            <input type="submit" name="listarUsuariosMaster" value="Listar Usuários Master" class="btn btn-primary">

        </form>
    </div>


    <?php
    if (!isset($_SESSION['usuario'])) {
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
    </div>';
    }
    // Listar todos os usuários
    if (isset($_POST['listarUsuarios'])) {
        listarUsuarios($mysqli);
    }

    // Listar apenas usuários comuns
    if (isset($_POST['listarUsuariosComuns'])) {
        listarUsuariosComuns($mysqli);
    }

    // Listar apenas usuários Master
    if (isset($_POST['listarUsuariosMaster'])) {
        listarUsuariosMaster($mysqli);
    }


    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"> </script>
    <script src="../geral.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</body>

</html>
