import { useState } from "react";
import Footer from "../../components/Footer";
import Axios from "axios";

export default function Login() {
  const [valores, setValores] = useState<any>({});

  const mudancaValores = (valor: React.ChangeEvent<HTMLInputElement>) => {
    setValores((valorAnterior: any) => ({
      ...(valorAnterior || {}),
      [valor.target.name]: valor.target.value,
    }));
  };

  const pegarEnvio = async () => {
    try {
      const resposta = await Axios.post("http://localhost:3001/cadastro", valores);

      if (resposta.status === 201) {
        alert('Cadastro feito com sucesso!');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);

      let mensagemErro = 'Erro ao fazer cadastro. Por favor, tente novamente.';

      if ((error as any).response) {
        switch ((error as any).response.status) {
          case 404:;case 409:;case 500:{
            mensagemErro = 'E-mail já cadastrado.';
            break;
          }
         
          default:
            break;
        }
      }

      alert(mensagemErro);
    }
  };
  
  return (
    <div className="container">
      <div className="flex flex-col items-center">
          <form className="w-3/6 p-10 m-10 rounded-2xl shadow-2xl flex flex-col">
          <h1 className="text-4xl font-bold text-center p-2">Cadastro</h1>
          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white"
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome de usuário"
            onChange={mudancaValores}
            required
          />
          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={mudancaValores}
            required
          />

          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
            onChange={mudancaValores}
            required
          />

          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="text"
            name="cidade"
            id="cidade"
            placeholder="Cidade"
            onChange={mudancaValores}
            required
          />

          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço"
            onChange={mudancaValores}
            required
          />

          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Telefone"
            onChange={mudancaValores}
            required
          />

          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            onChange={mudancaValores}
            required
          />
          <input
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            placeholder="Confirmar senha"
            onChange={mudancaValores}
            required
          />

          <button
            className="p-2 my-1 bg-gray-500 placeholder:text-white "
            type="button" onClick={pegarEnvio}
          >
            Entrar
          </button>
        </form>

      </div>

      <Footer></Footer>
    </div>
  );
}
