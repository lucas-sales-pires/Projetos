let barraNavegacao = document.querySelector("ul.nav.navbar-nav.navbar-right");

let cadastro = document.createElement('li');
cadastro.innerHTML='<a href="../cadastro/cadastro.html">'+
'<span class="icon-container"><i class="bi bi-file-earmark-text"></i></span>Cadastre-se</a>';

let login = document.createElement('li');
login.innerHTML ='<a href="../login/login.html">'+
'<span class="icon-container"><i class="bi bi-person"></i></span>Login</a>';

let opcoesMaster = document.createElement('li');
opcoesMaster.innerHTML = `
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Opção Master
        <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
        <li><a href="../php/listarUsuarios.php">Listar Usuários</a></li>
        <li><a href="../php/downloadBD.php">Download Banco</a></li>
        <li><a href="../php/gerarPdf.php">Gerar listarUsuarios</a></li>
        <li><a href="../php/pesquisarUsuario.php">Pesquisar Usuario</a></li>
        <li><a href="../php/consultarLogs.php">Consultar Logs</a></li>
    </ul>
`;

barraNavegacao.appendChild(opcoesMaster);


let alterarSenha = document.createElement('li');
alterarSenha.innerHTML = '<a href="../php/trocarSenha.php" id="trocarSenha">'+
'<span class="icon-container"><i class="fa fa-key"></i></span>Alterar Senha</a>';

let modeloBanco = document.createElement('li');
modeloBanco.innerHTML = ' <a href="../modeloDeBanco/modelo.html" id="modelo"><span class="icon-container"><i class="fas fa-database"></i></span>Modelo Banco</a>';

let sair = document.createElement('li');
sair.innerHTML = '<a href="../php/destroySession.php"><span class="icon-container"><i class="fas fa-sign-out-alt"></i></span>Sair</a>';

barraNavegacao.appendChild(login);
barraNavegacao.appendChild(cadastro);
barraNavegacao.appendChild(modeloBanco);
barraNavegacao.appendChild(alterarSenha);
barraNavegacao.appendChild(sair);










