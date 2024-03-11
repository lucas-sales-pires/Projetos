import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComment,
  faStore,
  faBell,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Publicar from "./InputHeader";
import RotaDeProtecao from "./Protecao";

export default function Topo() {
  return (
    <div className="cabecalho flex flex-row justify-between items-center h-[93px] px-28">
      <Link href={"/"}>
        Logo <Publicar></Publicar>
      </Link>

      <nav className="itens-centrais flex flex-row items-center gap-10 w-2/6">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} fontSize={"1.5rem"} />
        </Link>
        <Link href={{}}>
          <FontAwesomeIcon icon={faComment} fontSize={"1.5rem"} />
        </Link>
        <Link href={"/cadastro/cadastro"}>
          <FontAwesomeIcon icon={faStore} fontSize={"1.5rem"} />
        </Link>
        <Link href={"/login/login"}>
          <FontAwesomeIcon icon={faBell} fontSize={"1.5rem"} />
        </Link>
        <RotaDeProtecao>
          <Link href={"/login/login"}>
            <button>Sair</button>
          </Link>
        </RotaDeProtecao>
      </nav>

      <nav className="itens-centrais">
        <Link href={"/inputs/Inputs"}>
          <FontAwesomeIcon icon={faUser} fontSize={"1.5rem"} />
        </Link>
      </nav>

      <nav className="menu-bar md:hidden">
        <FontAwesomeIcon icon={faBars} fontSize={"1.5rem"} />
      </nav>
    </div>
  );
}
