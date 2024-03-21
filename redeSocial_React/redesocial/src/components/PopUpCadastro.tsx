import { useState, ChangeEvent, useEffect } from "react";
import Axios from "axios";
import { buscarCep, regexCelular } from "../../servidor/cadastroBack/cadastroBack";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface CadastroPopupProps {
  fechado: () => void;
}

const CadastroPopup: React.FC<CadastroPopupProps> = ({ fechado }) => {
  const [valores, setValores] = useState<any>({});
  const [cep, setCep] = useState<any>({});

  useEffect(() => {
    if (Object.keys(cep).length !== 0) { // se o cep não estiver vazio que no caso é a chave chamada cep que contem os valores de cidade e endereco
      setValores((valorAnterior: any) => ({
        ...valorAnterior,
        cidade: cep.cidade,  // cidade e endereco são preenchidos automaticamente por isso não precisam ser preenchidos pelo usuário
        endereco: cep.endereco,
      }));
    }
  }, [cep]);  // este efeito será sempre executado quando o cep for alterado

  const mudancaValores = (valor: ChangeEvent<HTMLInputElement>) => {
    setValores((valorAnterior: any) => ({
      ...(valorAnterior || {}),
      [valor.target.name]: valor.target.value,
    }));
  };

  const pegarEnvio = async () => {

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
    

    try {
      const resposta = await Axios.post(
        "http://localhost:3001/autenticacao/cadastro",
        valores
      );

      if (resposta.status === 201) {
        toast.success("Cadastro feito com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);

      toast.error("Erro ao fazer cadastro. Por favor, tente novamente.");

      if ((error as any).response) {
        switch ((error as any).response.status) {
          case 409: {
            toast.error("E-mail já cadastrado.");

            break;
          }
          default:
            break;
        }
      }
      toast.error("Erro ao fazer cadastro. Por favor, tente novamente.");
    }
  };


  return (
    <div className= "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-md ">
        <span
          className="text-2xl font-bold cursor-pointer flex float-right text-red-700 transition-transform transform hover:scale-110"
          onClick={fechado}
        >
          &times;
        </span>
        <h2 className="text-2xl mb-4">Formulário de Cadastro</h2>
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
          }
          }
          
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
          value={cep.cidade || ""}
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
          value={cep.endereco || ""}
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
          value={valores.telefone ||  ""}
          
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
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={pegarEnvio}
        >
          Cadastrar
        </button>
        
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CadastroPopup;
