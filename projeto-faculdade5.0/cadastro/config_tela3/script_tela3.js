

function ajustaCpf(v) {
  v.value = v.value.replace(/\D/g, "");
  v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
  v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
  v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function ajustaTelefone(v) {
  v.value = v.value.replace(/\D/g, ""); // remove todos os caracteres que não são dígitos
  // Insere o sinal de mais e os parênteses no código do país
  v.value = v.value.replace(/^(\d{2})(\d)/g, "(+$1) $2");
  // Insere o hífen depois do DDD e depois dos primeiros 5 dígitos do número
  v.value = v.value.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
}
function ajustaCelular(v) {
  v.value = v.value.replace(/\D/g, ""); // remove todos os caracteres que não são dígitos
  // Insere o sinal de mais e o parênteses no código do país
  v.value = v.value.replace(/^(\d{2})(\d)/g, "(+$1) $2");
  // Insere o hífen depois do DDD e depois dos primeiros 5 dígitos do número
  v.value = v.value.replace(/(\d{2})(\d{5})(\d{4})/, "$1-$2-$3");
}





let cep = document.getElementById('cep');
let endereco = document.getElementById('endereco');
let bairro = document.getElementById('bairro');
let estado = document.getElementById('estado');

cep.addEventListener("blur", () => {
  let valorCep = cep.value;
  let url = "https://viacep.com.br/ws/" + valorCep + "/json/";

  axios.get(url)
    .then(response => {
      let data = response.data;
      if (data.erro) {
        // CEP não encontrado, exibe uma mensagem de erro
        document.getElementById('mensagemErro').textContent = "CEP não encontrado";
      } else {
        // Preenche os campos com os dados do CEP
        endereco.value = data.logradouro;
        bairro.value = data.bairro;
        estado.value = data.uf;
        // Limpa a mensagem de erro
        document.getElementById('mensagemErro').textContent = "";
      }
    })
    .catch(error => {
      // Trate qualquer erro que ocorra
      console.error("Erro na requisição: " + error);
    });
});
