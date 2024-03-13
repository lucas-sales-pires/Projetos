import React, { useState, useEffect } from 'react';

interface NotificacaoProps {
  mensagem: string;
  aberto: boolean;
}

const Notificacao: React.FC<NotificacaoProps> = ({ mensagem, aberto }) => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    setVisivel(aberto);
  }, [aberto]);

  const fechar = () => {
    setVisivel(false);
  };

  return (
    <div x-data="{ open: false }">
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
      />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
        integrity="sha256-A5ePakA3F2P0kiH2JbEOgyFJ8yZnZUB+nU+DoQ1NgaE="
        crossOrigin="anonymous"
      ></script>

      <main
        x-data="app"
        className="min-w-screen grid min-h-screen place-items-center"
      >
        <button
          type="button"
          onClick={fechar}
          style={{ display: visivel ? 'block' : 'none' }}
          className="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
        >
          <div className="flex items-center space-x-2">
            <span className="text-3xl">
              <i className="bx bx-check"></i>
            </span>
            <p className="font-bold">{mensagem}</p>
          </div>
        </button>
      </main>
    </div>
  );
};

export default Notificacao;

