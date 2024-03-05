import Main from "./Main";
import Amigos from "./Amigos";
import Image from 'next/image';
import perfil from "../../imgs/foto-perfil.jpg";

export default function Asides() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="aside-esquerdo w-4/12" style={{ display: 'flex', flexDirection: 'column' }}>
        <aside
          className="aside-esquerdo flex float-left p-2  w-full border-b-8"
          

        >
        <Image className='foto' src={perfil} alt="Cinque Terre" width={600} height={100} />

        </aside>
        <aside
          className="aside-esquerdo flex float-left p-[33%] h-[35vh] w-full"
          
        >
          Olá
        </aside>
      </div>

      <div className="central w-4/12" style={{ display: 'flex', flexDirection: 'column' }}>
        <Main /> 
      </div>

      <div className="aside-direito w-4/12" style={{ display: 'flex', flexDirection: 'column' }}>
        <aside
          className="aside-direito flex float-right p-2  w-full border-b-8 "
          
        >
          <Amigos></Amigos>
          
        </aside>
        <aside
          className="aside-direito flex float-right p-[33%]  h-[35vh] w-full"
          
        >
          Olá
        </aside>
      </div>
    </div>
  );
}
