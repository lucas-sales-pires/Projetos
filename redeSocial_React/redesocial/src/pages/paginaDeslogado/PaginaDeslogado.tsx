import Link from "next/link";

export default function PaginaDeslogado() {
  return (
    <div>
      <h1>Seja bem vindo a rede social</h1>
      <p>Para acessar o conteúdo, faça login ou cadastre-se</p>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 mx-2 rounded"
      >
        <Link href={"/login/login"}>Login</Link>
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
      >
        <Link href={"/cadastro/cadastro"}>Cadastro</Link>
      </button>
    </div>
  );
}
