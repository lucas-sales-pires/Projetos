import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faStore, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Publicar from './InputHeader';

export default function Topo() {
  const [telaPequena, settelaPequena] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      settelaPequena(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='cabecalho flex flex-row justify-between items-center h-[93px] px-28'>
      <Link href={"/"}>Logo <Publicar></Publicar></Link>

      {!telaPequena && (
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
          <Link href={"/usestate/Usestate"}>
            <FontAwesomeIcon icon={faBell} fontSize={"1.5rem"} />
          </Link>
        </nav>
      )}

      <nav className="itens-centrais">
        <Link href={"/inputs/Inputs"}>
          <FontAwesomeIcon icon={faUser} fontSize={"1.5rem"} />
        </Link>
      </nav>

      {telaPequena && (
        <nav className="menu-bar">
          <FontAwesomeIcon icon={faBars} fontSize={"1.5rem"} />
          
        </nav>
      )}
    </div>
  );
}
