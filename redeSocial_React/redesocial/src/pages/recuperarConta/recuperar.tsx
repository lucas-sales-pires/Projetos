import Axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RecuperarSenha() {
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [valores, setValores] = useState<any>({});
  const [codigoRecuperacao, setCodigoRecuperacao] = useState<string>("");

  const mudancaValores = (valor: React.ChangeEvent<HTMLInputElement>) => {
    setValores((valorAnterior: any) => ({
      ...valorAnterior,
      [valor.target.name]: valor.target.value,
    }));
  };

  const alterarSenha = async () => {
    if (valores.novaSenha !== "") {
      try {
          console.log(valores.novaSenha)
          const update = await Axios.put("http://localhost:3001/atualizar-senha", {
              email: valores.email,
              novaSenha: valores.novaSenha
          });
  
          if (update.status === 200) {
              toast.success("Senha atualizada com sucesso");
          } else {
              toast.error("Falha ao atualizar senha");
          }
      } catch (error) {
          console.error("Erro ao atualizar senha:", error);
          toast.error("Erro ao atualizar senha. Por favor, tente novamente mais tarde.");
      }
  } else {
      toast.error("Preencha todos os campos");
  }
  }

  const enviarCodigo = async () => {
    try {
      if (!valores.email) {
        alert("Preencha o email");
        return;
      }

      const resposta = await Axios.post(
        "http://localhost:3001/enviar-email",
        valores
      );

      if (resposta.status === 200) {
        toast.success("Código enviado para o email");
        setCodigoEnviado(true);
        setCodigoRecuperacao(resposta.data.numeroAleatorio);
      } else {
        toast.error("Erro ao enviar código de recuperação");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao enviar código de recuperação");
    }

  
  };

  const verificarCodigo = () => {
    if (valores.codigo === codigoRecuperacao) {
      toast.success("Código correto");
    } else {
      toast.error("Código incorreto");
    }
  };

  return (
    <div className="container mx-auto">    
      <div className="flex justify-center items-center h-screen ">
        <div className="w-1/3 bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recuperar Senha</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2 "
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
            {codigoEnviado && (
              <>
                <label
                  htmlFor="codigo"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Código
                </label>
                <input
                  type="text"
                  id="codigo"
                  name="codigo"
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                  placeholder="Código de recuperação"
                  onChange={mudancaValores}
                />
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white p-2 mb-4 rounded"
                  onClick={verificarCodigo}
                >
                  Verificar Código
                </button>
              </>
            )}
            {codigoRecuperacao == valores.codigo &&  codigoEnviado  &&(
              <div className="mb-4">
                <label
                  htmlFor="novaSenha"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nova Senha
                  </label>
                  <input
                    type="password"
                    id="novaSenha"
                    name="novaSenha"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Nova senha"
                    onChange={mudancaValores}
                    onClick={alterarSenha}
                  />

                <button
                  type="button"
                  className="w-full bg-blue-500 text-white p-2 mb-4 my-2 rounded"
                >
                  Enviar
                </button>
              </div>
            )}
            {!codigoEnviado && (
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 mb-4 rounded"
              onClick={enviarCodigo}
            >
              Enviar
            </button>
            )}
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
