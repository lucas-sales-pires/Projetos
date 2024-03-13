import Axios from 'axios';

// Consulta viaCep
export function buscarCep(cep: any, setCep: any) {
  return async () => {
    try {
      const resposta = await Axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      if (resposta.data && !resposta.data.erro) {
        const { localidade, logradouro,ddd } = resposta.data;
        
        setCep({
          cidade: localidade,
          endereco: logradouro,
          ddd: ddd
        });
      } else {
        console.error('CEP inválido ou não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao consultar o CEP:', error);
    }
  };
}
export function regexCelular(telefone: any, ddd: any) {
  const numeroLimpo = telefone.replace(/\D/g, '');

  const telefoneFormatado = `(${ddd}) ${numeroLimpo.substring(2, 7)}-${numeroLimpo.substring(7, 11)}`;

  return telefoneFormatado;
}
