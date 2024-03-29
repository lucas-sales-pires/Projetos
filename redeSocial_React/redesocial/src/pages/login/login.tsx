import React, { useState } from "react";
import Axios from "axios";
import CadastroPopup from "@/components/PopUpCadastro";
import { useRouter } from "next/router";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [popupVisivel, setpopupVisivel] = useState<boolean>(false);

  const abrirPopup = () => {
    setpopupVisivel(true);
  };

  const fecharPopup = () => {
    setpopupVisivel(false);
  };
  const router = useRouter();

  const [valores, setValores] = useState<any>({});

  const mudancaValores = (valor: React.ChangeEvent<HTMLInputElement>) => {
    setValores((valorAnterior: any) => ({
      ...valorAnterior,
      [valor.target.name]: valor.target.value,
    }));
  };


  const pegarEnvio = async () => {
    try {
      const { email, senha, confirmar } = valores;

      if (!email || !senha || !confirmar) {
        toast.error("Preencha todos os campos");
        return;
      }

      if (senha !== confirmar) {
        toast.error("Senhas não conferem");
        return;
      }

      const resposta = await Axios.post("http://localhost:3001/autenticacao/login", {
        email,
        senha,
        confirmar,
      });

      if (resposta.status === 200) {
        localStorage.setItem("token", resposta.data.token);
        toast.success("Login realizado com sucesso!");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error: any) {

      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case 404:
            toast.error("Email não cadastrado, faça seu cadastro");
            break;
          case 401:
            toast.error("Senha incorreta, tente novamente");
            break;
          case 500:
            toast.error("Erro interno, tente novamente mais tarde");
            break;
          default:
            toast.error("Erro ao fazer login, tente novamente");
            break;
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-1/3 bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Seu email"
              onChange={mudancaValores}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="senha"
              className="block text-gray-700 font-bold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Sua senha"
              onChange={mudancaValores}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmar"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Confirme sua senha"
              onChange={mudancaValores}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={pegarEnvio}
          >
            Login
          </button>
          <Link href={"../../recuperarConta/recuperar"} className="block text-center mt-4 text-blue-500">
            Esqueci minha senha
          </Link>
        </form>
      </div>
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={abrirPopup}
      >
        Cadastre-se
      </button>

      {popupVisivel && <CadastroPopup fechado={fecharPopup} />}
      
      <ToastContainer />
    </div>
  );
}
