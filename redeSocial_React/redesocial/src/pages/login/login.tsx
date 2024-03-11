import React, { useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
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

      if (senha !== confirmar) {
        alert('A senha e a confirmação da senha não coincidem.');
        return;
      }

      const resposta = await Axios.post("http://localhost:3001/login", { email, senha, confirmar });

      if (resposta.status === 200) {
        localStorage.setItem('token', resposta.data.token);
        router.push('/');
      } else {
        alert('Erro ao fazer login. ' + resposta.data);
      }
    } catch (error: any) {
      console.error('Erro ao fazer login:', error);

      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          alert('E-mail não cadastrado. Faça o cadastro primeiro.');
        } else if (status === 500) {
          alert('Erro interno durante o login. Tente novamente mais tarde.');
        } else {
          alert('Erro ao fazer login. Por favor, tente novamente.');
        }
      }
    }
  };


  return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/3 bg-white p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Seu email"
                            onChange={mudancaValores}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-gray-700 font-bold mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name='senha'
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Sua senha"
                            onChange={mudancaValores}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmar" className="block text-gray-700 font-bold mb-2">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmar"
                            name='confirmar'
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
        </div>
    );
};


