import { useState } from "react";
import Footer from "../../components/Footer";
import Axios from "axios";
import Notificacao from "@/components/NotificacaoSucesso";
import NotificacaoErro from "@/components/NotificacaoErro";

import {
  buscarCep,
  regexCelular,
} from "../../../servidor/cadastroBack/cadastroBack";

export default function Cadastro() {
  const [msg, setMensagem] = useState<string>("");
  const [msgerro, setMensagemErro] = useState<string>("");
  const [aberto, setAberto] = useState(false);
  const [abertoErro, setAbertoErro] = useState(false);
  const [valores, setValores] = useState<any>({});
  const [cep, setCep] = useState<any>({});

  const mudancaValores = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValores((valoresAnteriores: any) => ({
      ...valoresAnteriores,
      [name]: value,
    }));
  };

  const pegarEnvio = async () => {
    try {
      const resposta = await Axios.post(
        "http://localhost:3001/cadastro",
        valores
      );

      if (resposta.status === 201) {
        setAberto(true);
        setMensagem("Cadastro feito com sucesso!");
        setTimeout(() => { setAberto(false); window.location.reload(); }, 3000);
      }
    } catch (error: any) {
      console.error("Erro ao fazer cadastro:", error);
      

      setMensagemErro("Erro ao fazer cadastro. Por favor, tente novamente.");

      if (error.response) {
        const status = error.response.status;
        if (status === 409) {
          setMensagemErro("E-mail já cadastrado.");
          setAbertoErro(true);
          setTimeout(() => setAbertoErro(false), 3000);


        }
      }

      setAbertoErro(true);
      setTimeout(() => setAbertoErro(false), 3000);

    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <form className="w-full max-w-md p-10 m-10 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-center mb-6">Cadastro</h1>
          <label className="block mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome completo"
            onChange={mudancaValores}
          />
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Seu email"
            onChange={mudancaValores}
          />
          <label className="block mb-2" htmlFor="cep">
            CEP:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP"
            onChange={mudancaValores}
            onBlur={async (e) => {
              const valor = e.target.value;
              if (valor.length === 8) {
                const resposta = buscarCep(valor, setCep);
                setCep(resposta);
              }
            }}
          />
          <label className="block mb-2" htmlFor="cidade">
            Cidade:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade"
            readOnly
            value={cep.cidade}
            onChange={mudancaValores}
          />
          <label className="block mb-2" htmlFor="endereco">
            Endereço:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Endereço"
            readOnly
            value={cep.endereco}
            onChange={mudancaValores}
          />
          <label className="block mb-2" htmlFor="telefone">
            Telefone(celular):
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Telefone"
            onChange={(e) => {
              const valor = e.target.value;

              const telefoneFormatado = regexCelular(valor, cep.ddd);

              setValores((valorAnterior: any) => ({
                ...(valorAnterior || {}),
                telefone: telefoneFormatado,
              }));
            }}
            value={valores.telefone || ""}
          />

          <label className="block mb-2" htmlFor="senha">
            Senha:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            onChange={mudancaValores}
          />
          <label className="block mb-2" htmlFor="confirmarSenha">
            Confirmar Senha:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            onChange={mudancaValores}
          />

          <button
            className="w-full px-4 py-2 mt-4 bg-gray-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-600"
            type="button"
            onClick={pegarEnvio}
          >
            Cadastrar
          </button>
        </form>
        <Notificacao mensagem={msg} aberto={aberto}></Notificacao>
        <NotificacaoErro mensagem={msgerro} aberto={abertoErro}></NotificacaoErro>
      </div>

      <Footer />
    </div>
  );
}
