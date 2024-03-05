import Publicar from "./Publicar";
import Conteudo from "./Conteudo"
import perfil from "../../imgs/foto-perfil.jpg";
import publicacao from "../../publicacoes/publicacao1.jpg";

export default function Main() {
  return (
    
    <div className="central flex flex-col" style={{ overflowY: 'scroll',paddingTop:'12px'}}>
        <div>
            <Publicar></Publicar>
        </div>
        <Conteudo foto={perfil} tipo="texto" conteudo="ola" nome="Lucas Sales" hora="18:25"></Conteudo>
        <Conteudo foto={perfil} tipo="video" conteudo="https://www.youtube.com/watch?v=bAIvjg7eqK8&list=RDbAIvjg7eqK8&start_radio=1" nome="Lucas Sales" hora="18:47"></Conteudo>
        <Conteudo foto={perfil} tipo="foto" conteudo={publicacao} nome="Lucas Sales" hora="19:16"></Conteudo>
        <Conteudo></Conteudo>
        <Conteudo></Conteudo>
        <Conteudo></Conteudo>
        <Conteudo></Conteudo>
    </div>
  );
}
