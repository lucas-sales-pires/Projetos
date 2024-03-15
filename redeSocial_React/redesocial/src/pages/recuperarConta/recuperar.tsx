import Axios from 'axios';
import React, { useState } from 'react';

export default function RecuperarSenha() {
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    const [valores, setValores] = useState<any>({});

    const mudancaValores = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setValores((valorAnterior: any) => ({
          ...valorAnterior,
          [valor.target.name]: valor.target.value,
        }));
    };

    const enviarCodigo = async () => {
        console.log(valores)
        try {
            if (!valores.email) {
                alert('Preencha o email');
                return;
            }

            const assunto = "Recuperação de senha";
            const codigoRecuperacao = Math.floor(100000 + Math.random() * 900000).toString(); 
            const mensagem = `Seu código de recuperação é: ${codigoRecuperacao}`;
            valores.assunto = assunto;
            valores.mensagem = mensagem;

            alert('Código enviado para o email');
            setCodigoEnviado(true);

            const resposta = await Axios.post("http://localhost:3001/enviar-email", valores);

            if (resposta.status === 201) {
                alert('Código enviado para o email');
                setCodigoEnviado(true);
            }

            if(resposta.status === 400) {
                alert('Erro ao enviar código de recuperação');
            }

            if(resposta.status === 500) {
                alert('Erro ao enviar código de recuperação');
                console.log(resposta)
            }

        } catch (error) {
            console.log(error);
            alert('Erro ao enviar código de recuperação');
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className="w-1/3 bg-white p-8 shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Recuperar Senha</h2>
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
                        {codigoEnviado && ( 
                            <>
                                <label htmlFor="codigo" className="block text-gray-700 font-bold mb-2">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    id="codigo"
                                    name="codigo"
                                    className="w-full border border-gray-300 p-2 rounded mb-4"
                                    placeholder="Código de recuperação"
                                />
                            </>
                        )}
                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white p-2 rounded"
                            onClick={enviarCodigo}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
