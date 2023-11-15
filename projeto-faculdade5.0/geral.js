let alterarDados = document.createElement("li");
alterarDados.innerHTML = '<a href="../php/alterarDados.php" id="alterarDados"><span class="icon-container"><i class="fa fa-info-circle"></i></span>Alterar Dados</a>';

let barraNavegacao = document.querySelector("ul.nav.navbar-nav.navbar-right");

let cadastro = document.createElement('li');
cadastro.innerHTML = '<a href="../cadastro/cadastro.html">' +
  '<span class="icon-container"><i class="bi bi-file-earmark-text"></i></span>Cadastre-se</a>';

let mensagem = document.createElement('li');
mensagem.innerHTML = '<span id="msg" class="alert alert-danger" role="alert">';
let msg = document.getElementById("msg");

let login = document.createElement('li');
login.innerHTML = '<a href="../login/login.html">' +
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



let alterarSenha = document.createElement('li');
alterarSenha.innerHTML = '<a href="../php/trocarSenha.php" id="trocarSenha">' +
  '<span class="icon-container"><i class="fa fa-key"></i></span>Alterar Senha</a>';

let modeloBanco = document.createElement('li');
modeloBanco.innerHTML = ' <a href="../modeloDeBanco/modelo.html" id="modelo"><span class="icon-container"><i class="fas fa-database"></i></span>Modelo Banco</a>';

let sair = document.createElement('li');
sair.innerHTML = '<a href="../php/destroySession.php"><span class="icon-container"><i class="fas fa-sign-out-alt"></i></span>Sair</a>';




function verificarSessaoUsuario() {
  axios.get('../php/verificar_sessao.php')
    .then(function (response) {
      if (response.data.usuarioLogado === true) {
        // Usuário comum Logado
        axios.get('../php/pegarNome.php')
          .then(function (nomeResponse) {
            document.getElementById('profile-picture-container').style.display = "block";
            document.getElementById('fotoPerfil').style.display = "block";
            barraNavegacao.appendChild(modeloBanco);
            barraNavegacao.appendChild(alterarSenha);
            barraNavegacao.appendChild(alterarDados);
            barraNavegacao.appendChild(sair);
            barraNavegacao.appendChild(mensagem);
            document.getElementById('msg').textContent = nomeResponse.data;
            document.getElementById('msg').style.display = "block";
            document.querySelector('.pesquisa').style.display = "block";


          }
          )
        //Usuário Não logado
      } else {
        document.getElementById('profile-picture-container').style.display = "block";
        document.getElementById('fotoPerfil').style.display = "none";
        barraNavegacao.appendChild(login);
        barraNavegacao.appendChild(cadastro);
        document.getElementById('msg').textContent = nomeResponse.data;
        document.getElementById('msg').style.display = "none";
        document.querySelector('.pesquisa').style.display = "none";

      }
    })
}

window.onload = verificarSessaoUsuario;

let acessibilidadenav = document.createElement('li');
acessibilidadenav.innerHTML = '    <a><span class="icon-container"><i class="bi bi-circle-half"></i></span>Acessibilidade</a>';
barraNavegacao.appendChild(acessibilidadenav);


const body = document.getElementsByTagName('body')[0];
const elementosAfetados = document.querySelectorAll('form');
const backgroundLoginECadastro = document.querySelector('div.container-login100');
const background = document.querySelector('.container1');
const tituloFormulario = document.querySelector('.login100-form-title');
let inputs = document.querySelectorAll('input:not([type="password"]), input:not([type="text"])');


let modoSite = localStorage.getItem('modoSite') || 0;

function atualizarModoEscuro() {
  if (modoSite == 1) {
    body.style.background = 'black';
    body.style.color = 'white';
    inputs.forEach(function (input) {
      input.style.background = "white";
      input.style.color = "black";
    });

    if (backgroundLoginECadastro) {
      backgroundLoginECadastro.style.background = 'black';
      backgroundLoginECadastro.style.color = 'white';

    }
    if (background) {
      background.style.background = 'black';
      background.style.color = 'white';
    } if (tituloFormulario) {
      tituloFormulario.style.color = 'white';
    }

    elementosAfetados.forEach(elemento => {
      elemento.style.background = 'black';
      elemento.style.color = 'white';
    });
  } else {
    body.style.background = 'white';
    body.style.color = 'black';
    inputs.forEach(function (input) {
      input.style.background = "";
      input.style.color = "";
    });

    if (backgroundLoginECadastro) {
      backgroundLoginECadastro.style.background = 'white';
      backgroundLoginECadastro.style.color = '';
    }
    if (background) {
      background.style.background = '';
      background.style.color = '';
    }
    if (tituloFormulario) {
      tituloFormulario.style.color = '';

    }



    elementosAfetados.forEach(elemento => {
      elemento.style.background = '';
      elemento.style.color = '';
    });
  }
}

atualizarModoEscuro();



acessibilidadenav.addEventListener('click', () => {
  if (modoSite == 0) {
    modoSite = 1;
  } else {
    modoSite = 0;
  }

  localStorage.setItem('modoSite', modoSite);

  atualizarModoEscuro();
});




function AtualizarFoto() {
  axios.get('../php/obterUltimaFoto.php')
    .then(response => {
      const data = response.data;
      if (data && data.caminhoImagem) {
        document.getElementById('fotoPerfil').src = data.caminhoImagem;
      } else {
        console.error('Erro: Caminho da imagem não encontrado.');
      }
    })
    .catch(error => console.error('Erro:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  AtualizarFoto();
});



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































