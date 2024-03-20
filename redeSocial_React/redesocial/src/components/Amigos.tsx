import imagem from '../../imgs/foto-fake1.jpg';
import imagem2 from '../../imgs/foto-fake2.jpg';
import imagem3 from '../../imgs/foto-fake3.jpg';
import imagem4 from '../../imgs/foto-fake4.jpg';
import imagem5 from '../../imgs/foto-fake5.jpg';
import imagem6 from '../../imgs/foto-fake6.jpg';
import imagem7 from '../../imgs/foto-fake7.jpg';
import imagem8 from '../../imgs/foto-fake8.jpg';
import imagem9 from '../../imgs/foto-fake9.jpg';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


export default function Amigos() {

    const contarAmigos = (a: any) => {
        return a.keys().map(a);
    }

    const contarImagens = contarAmigos((require as any).context('../../imgs/', false, /\.(png|jpe?g|svg)$/)); // importa todas as imagens da pasta imgs e o false é pra não ser recursivo ou seja não importar imagens de subpastas

    const [amigos, setAmigos] = useState<number>(0);

    useEffect(() => {
        setAmigos(contarImagens.length);
    }, [contarImagens.length]);


    return (
        <div>
            <h2 >Amigos({amigos})</h2>
            <div className="input-group">
                <div>
                    <input type="search" id="form1" className="border border-black border-1  form-control w-[90%]" placeholder='Procurar amigo' />
                    <label className="form-label" htmlFor="form1"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></label>
                </div>

            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank">
                        <Image className='foto' src={imagem} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="img_forest.jpg">
                        <Image className='foto' src={imagem2} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="img_lights.jpg">
                        <Image className='foto' src={imagem3} alt="Cinque Terre" width={60} height={40} />
                    </a>
                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" >
                        <Image className='foto' src={imagem4} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" >
                        <Image className='foto' src={imagem5} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>

            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" >
                        <Image className='foto' src={imagem6} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" >
                        <Image className='foto' src={imagem7} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                        <Image className='foto' src={imagem8} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" >
                        <Image className='foto' src={imagem9} alt="Cinque Terre" width={60} height={40} />
                    </a>

                </div>
            </div>

            <div className="clearfix"></div>
        </div>
    )
}
