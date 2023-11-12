const acessibilidade = document.querySelector('ul.nav.navbar-nav.navbar-right li:first-child a');
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



acessibilidade.addEventListener('click', () => {
  if (modoSite == 0) {
    modoSite = 1;
  } else {
    modoSite = 0;
  }

  localStorage.setItem('modoSite', modoSite);

  atualizarModoEscuro();
});




/* NESTA FUNÇÃO, EU COMEÇO FAZENDO UMA REQUISIÇÃO UTILIZANDO A BIBLIOTECA AXIOS, PEGANDO O ARQUIVO VERIFICAR_SESSAO.PHP QUE TEM A FUNÇÃO DE SABER SE EXISTE UM USUARIO LOGADO COMO TRUE. SE A RESPOSTA FOR POSITIVA EU FAÇO OUTRA REQUISIÇÃO PARA O ARQUIVO PEGARNOME.PHP QUE SIMPLESMENTE TRAZ UMA MENSAGEM DE BOAS VINDAS AO USUARIO QUE ESTÁ NA SESSION[USUARIO] E UTILIZANDO O DOM EU ESCOLHO O NTH:CHILD(3) QUE É O LOGIN E FAÇO ELE SUMIR EM CASO DO USUARIOLOGADO ESTAR FALSE MEU SAIR NAO APARECE. E O MESMO É FEITO COM O USUARIO MASTER. NO FIM USO O WINDOW.ONLOAD QUE É O MESMO QUE " document.addEventListener('DOMContentLoaded', function() { "
*/
function ocultarAlterarSenha() {
  var links = document.querySelectorAll("ul.nav.navbar-nav.navbar-right li a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].textContent.trim() === "Alterar Senha") {
      links[i].style.display = "none";
    }
  }
}
function mostrarAlterarSenha() {
  let links = document.querySelectorAll("ul.nav.navbar-nav.navbar-right li a");
  for (let i = 0; i < links.length; i++) {
    if (links[i].textContent.trim() === "Alterar Senha") {
      links[i].style.display = "block";
    }
  }
}


function verificarSessaoUsuario() {
  axios.get('../php/verificar_sessao.php')
    .then(function (response) {
      if (response.data.usuarioLogado === true) {
        // Usuário comum
        axios.get('../php/pegarNome.php')
          .then(function (nomeResponse) {
            document.getElementById('msg').textContent = nomeResponse.data;
            document.getElementById('msg').style.display = "block";
            document.getElementById('profile-picture-container').style.display="block";
            document.getElementById('fotoPerfil').style.display = "block";

            let alterarDados = document.createElement("li");
            alterarDados.innerHTML = '<a href="../php/alterarDados.php" id="alterarDados"><span class="icon-container"><i class="fa fa-info-circle"></i></span>Alterar Dados</a>';
            
            // Adicionar o novo elemento antes do elemento com nth-child(6)
            let elementoNthChild6 = document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(6)");
            
            if (elementoNthChild6) {
              elementoNthChild6.parentNode.insertBefore(alterarDados, elementoNthChild6);
            }
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(3) a").style.display = "none";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(7) a").style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(5) a").style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(2) a").style.display = "none";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(6) a").style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(8) a").style.display = "block";

            mostrarAlterarSenha();

            if (document.querySelector(".pesquisaComum")) {
              document.querySelector(".pesquisaComum").style.display = "block";
            }
          })
          .catch(function (nomeError) {
            console.error('Não está funcionando', nomeError);
          });
      } else {
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(7) a").style.display = "none";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(5) a").style.display = "none";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(2) a").style.display = "block";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(6) a").style.display = "none";
        document.getElementById('profile-picture-container').style.display="none";
        document.getElementById('fotoPerfil').style.display="none";
        if (document.querySelector(".pesquisaComum")) {
          document.querySelector(".pesquisaComum").style.display = "none";
        }
        if (document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(8) a")) {
          document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(8) a").remove();
        }

        ocultarAlterarSenha();





      }
      if (response.data.usuarioMasterLogado === true) {
        // Usuário master
        document.getElementById('opcaoUsuarioMaster').style.display = 'block';
        axios.get('../php/pegarNome.php')
          .then(function (nomeResponse) {
            document.getElementById('msg').textContent = nomeResponse.data;
            document.getElementById('msg').style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(3) a").style.display = "none";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(7) a").style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(5) a").style.display = "block";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(2) a").style.display = "none";
            document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(6) a").style.display = "block";
            document.querySelector('.pesquisa').style.display = "block";
            ocultarAlterarSenha();



          })
          .catch(function (nomeError) {
            console.error('Não está funcionando'.error);
          });
      } else {
        // Usuário não logado
        document.getElementById('msg').style.display = 'none';
        document.getElementById('opcaoUsuarioMaster').style.display = 'none';
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(7) a").style.display = "none";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(5) a").style.display = "none";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(2) a").style.display = "block";
        document.querySelector("ul.nav.navbar-nav.navbar-right li:nth-child(6) a").style.display = "none";
        ocultarAlterarSenha();




        document.querySelector('.pesquisa').style.display = "none";



      }
    })

}

window.onload = verificarSessaoUsuario;


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

document.addEventListener('DOMContentLoaded', function() {
  AtualizarFoto();
});
    
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































