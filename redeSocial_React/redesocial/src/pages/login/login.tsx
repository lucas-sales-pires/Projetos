import React, { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import CadastroPopup from "@/components/PopUpCadastro";
import Notificacao from "@/components/NotificacaoSucesso";
import NotificacaoErro from "@/components/NotificacaoErro";

export default function Login() {
  const [loginErro, setLoginErro] = useState(false);
  const [loginSucesso, setLoginSucesso] = useState(false);
  const [popupVisivel, setpopupVisivel] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

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

      if (!valores.email || !valores.senha || !valores.confirmar) {
        setTimeout(() => {
          setLoginErro(false);
        }, 3000);
        setMsg("Preencha todos os campos");
        setLoginErro(true);
        return;
      }

      if (senha !== confirmar) {
        setTimeout(() => {
          setLoginErro(false);
        }, 3000);
        setMsg("Senhas não conferem");
        setLoginErro(true);

        return;
      }

      const resposta = await Axios.post("http://localhost:3001/login", {
        email,
        senha,
        confirmar,
      });

      if (resposta.status === 200) {
        localStorage.setItem("token", resposta.data.token);
        setLoginSucesso(true);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);

      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          setTimeout(() => {
            setLoginErro(false);
          }, 3000);
          setMsg("Email não cadastrado, faça seu cadastro");
          setLoginErro(true);
        } else if (status === 500) {
          setTimeout(() => {
            setLoginErro(false);
          }, 3000);
          setMsg("Erro interno, tente novamente mais tarde");
          setLoginErro(true);
        } else {
          setTimeout(() => {
            setLoginErro(false);
          }, 3000);
          setMsg("Erro ao fazer login, tente novamente");
          setLoginErro(true);
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
        </form>
      </div>
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={abrirPopup}
      >
        Cadastre-se
      </button>
      {loginErro && <NotificacaoErro aberto mensagem={msg} />}
      {loginSucesso && (
        <Notificacao aberto mensagem="Login realizado com sucesso!" />
      )}

      {popupVisivel && <CadastroPopup fechado={fecharPopup} />}
    </div>
  );
}
