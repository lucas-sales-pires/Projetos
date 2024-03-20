import React, { useEffect, useState } from "react";
import PaginaDeslogado from "./paginaDeslogado/PaginaDeslogado";
import Home from "../components/Home";

export default function Principal() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogado(!!token);
  }, []); 

  return (
    <main>
      {logado ? (
        <div>
          <Home />
        </div>
      ) : (
        <PaginaDeslogado />
      )}
    </main>
  );
}
