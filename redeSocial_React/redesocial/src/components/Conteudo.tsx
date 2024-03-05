import Image from 'next/image';

export default function Conteudo(props: any) {
  const renderConteudo = () => {
    switch (props.tipo) {
      case 'texto':
        return <p className='ml-4'>{props.conteudo}</p>;
      case 'foto':
        return <Image src={props.conteudo} alt='publicacao1' />;
      case 'video':
        if (props.conteudo && props.conteudo.includes('youtube.com')) {
          const videoId = new URLSearchParams(new URL(props.conteudo).search).get('v'); 
          return (
            <div className="youtube-video">
              <iframe
                title='video'
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              ></iframe>
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full p-2">
      <div className="flex flex-row pb-5">
        <Image
          src={props.foto}
          alt='foto'
          width={50}
          height={50}
          className='rounded-full'
        />
        <div className="flex flex-col">
          <h2>{props.nome}</h2>
          <p>{props.hora}</p>
        </div>
      </div>
      {renderConteudo()}
    </div>
  );
}
