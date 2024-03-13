import React, { useState } from 'react';

export default function RecuperarSenha() {
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const [codigoEnviado, setCodigoEnviado] = useState(false);
    
    const enviarCodigo = () => {
        alert('Código enviado para o email');
        setMostrarCodigo(true); 
        setCodigoEnviado(true);
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
