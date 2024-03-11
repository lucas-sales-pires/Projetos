import React from "react";
import PaginaDeslogado from "./paginaDeslogado/PaginaDeslogado";
import Home from "../components/Home";

export default function Principal() {
  const Logado = typeof window !== "undefined" && !!localStorage.getItem("token");

  return (
    <main>
      {Logado ? (
        <div>
          <Home />
        </div>
      ) : (
        <PaginaDeslogado />
      )}
    </main>
  );
}
