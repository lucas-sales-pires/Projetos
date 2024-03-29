import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  buscarCep,
  regexCelular,
} from "../../../servidor/cadastroBack/cadastroBack";

export default function Cadastro() {
  const [valores, setValores] = useState<any>({ cidade: '', endereco: '' });
  const [cep, setCep] = useState<any>({ cidade: '', endereco: '' });

  useEffect(() => {
    if (Object.keys(cep).length !== 0) { 
      setValores((valorAnterior: any) => ({
        ...valorAnterior,
        cidade: cep.cidade, 
        endereco: cep.endereco,
      }));
    }
  }, [cep]);  

  const mudancaValores = (valor: React.ChangeEvent<HTMLInputElement>) => {
    setValores((valorAnterior: any) => ({
      ...valorAnterior,
      [valor.target.name]: valor.target.value,
    }));
  };
  

  const pegarEnvio = async () => {
    try {

    if (
      !valores.nome ||
      !valores.email ||
      !valores.cep ||
      !cep.cidade ||
      !cep.endereco ||
      !valores.telefone ||
      !valores.senha ||
      !valores.confirmarSenha
    ) {
      toast.error("Por favor, preencha todos os campos.");
      return; 
    }
    if(valores.senha !== valores.confirmarSenha){
      toast.error("Senhas não conferem.");
      return;
    }

      const resposta = await Axios.post(
        "http://localhost:3001/autenticacao/cadastro",
        valores
      );

      if (resposta.status === 201) {
        toast.success("Cadastro feito com sucesso!");
      }
    } catch (error: any) {
      console.error("Erro ao fazer cadastro:", error);

      if (error.response) {
        const status = error.response.status;
        if (status === 409) {
          toast.error("Usuário já cadastrado.");
        }
        if(status === 500 || status === 400 || status === 404){
          toast.error("Erro no servidor. Por favor, tente novamente.");
        }
    }
  }
  };

  return (
    <div className="container mx-auto">
    <div className="flex flex-col items-center">
      <form className="w-full max-w-md p-5 m-10 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-2">Cadastro</h1>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
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
          </div>
          <div className="w-full md:w-1/2 px-2">
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
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
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
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block mb-2" htmlFor="cidade">
              Cidade:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              id="cidade"
              name="cidade"
              placeholder="Cidade"
              value={cep.cidade}
              onChange={mudancaValores}
              required
            />
          </div>
        </div>
          <label className="block mb-2" htmlFor="endereco">
            Endereço:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Endereço"
            value={cep.endereco}
            onChange={mudancaValores}
            required
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
            required
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
            required
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
            required
          />

          <button
            className="w-full px-4 py-2 mt-4 bg-gray-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-600"
            type="button"
            onClick={pegarEnvio}
          >
            Cadastrar
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

