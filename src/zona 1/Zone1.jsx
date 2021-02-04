
import './zone1.css';

import { useRef, useEffect, useState } from 'react';

import ReactPlayer from "react-player";

const NOTA_TEXT = 'Para que no se me olvide los números son... La cantidad de libros amarillos en el librero. El segundo número de mi cumpleaños. La cantidad de árboles en el pueblo. Y un número que solo yo sé  >:)'

function Zone1({inputText, addItem, currentAnyText, inventario, salida, ObjetImages, zone, setZonesArrow, postText, disableAll}) {

    function tronoHandler(){

      inputText([{
      text:['— Selena: ','No puedo creer que sentarse en ese trono le de tanto poder a una persona...'], img:'SelenaHablaSeria'}, 
      {text:['— Selena: ','Ahí debería estar el papá de Nicolás y Nicole pero realmente nunca lo he visto en persona.'], img:'SelenaHablaTriste'}])

    }

    const [showModal, setShowModal] = useState(false);

    const touchCompuerta = useRef(false);;

    function alfombraHandler(){

      // inputText([{
      //   text:['— Selena: ','El suelo debajo de esta alfombra se siente hueco, revisaré más tarde.'], img:'SelenaHablaSeria'}])

      if(currentAnyText.current) return false;

      if(!touchCompuerta.current){

        touchCompuerta.current = true;

        inputText([{
          text:['— Selena: ',' No encuentro una cerradura para esta llave...'], img:'SelenaHablaTriste'}, 
          {text:['— Selena: ','Creo que ya es hora de revisar que hay debajo de la alfombra.'], img:'SelenaHablaTriste'},{text:['','— Selena revisa debajo de la alfombras sigilosamente, encontrando una compuerta bastante escondida.'], img: 'moment'},
          {text:['— Selena: ','¿Eh? ¿Que se supone que hace esto aquí?'], img:'SelenaDesconfia'},
          {text:['','— Selena introduce la llave, parece encajar a la perfección.'], img: 'moment'}
        ]);
  
        postText.current.push(()=>{
  
          setShowModal(true);
  
        });

      }else{

        setShowModal(true);

      }

    }

    const [dark, setDark] = useState('');

    function yesModal(){

      setShowModal(false);

      inputText([{text:['','— Selena entra por la compuerta, con cuidado de que nadie la vea.'], img:'moment'}])

      postText.current.push(()=>{

        setDark('dark');

        disableAll()

      });

    }

    const [showNota, setShowNota] = useState(false);

    function notaHandler(){

      if(currentAnyText.current) return false;

      setShowNota(()=>true);

    }

    function closeNota(){

      setShowNota(()=>false);

      const name = 'Nota de la sala del trono'

      if(Object.keys(inventario).includes(name)) return false;

      addItem('nota', NOTA_TEXT, name)

      inputText([{text:['— Selena: ','Tal ves esta información me sirva luego.'], img:'SelenaHablaSeria'}])

    }

    useEffect(()=>{

      if(zone === 'trono') setZonesArrow(()=>['sala', 'pueblo']);

    },[zone])

    const [fin, setFin] = useState('');

    const one = useRef(false)

    function animationEnd() {
      
      if(dark !== 'dark') return false;

      if(one.current) return false;

      one.current = true;

      inputText([{text:['','— Selena entra por el pasillo secreto, un recorrido oscuro y largo, después de caminar un poco puede escuchar voces al fondo, tomando cuidado y escondiéndose.'], img:'moment'},
      {text:['','Al asomarse solo puede ver tres siluetas, intentar inspeccionar más de cerca seria peligroso.'], img:'moment'},
      {text:['','Las siluetas hablan, al concentrarse Selena puede distinguir la voz de... ¡Nicole! Acompañada de dos hombres.'], img:'moment'},
      {text:['','— Te hemos estado ayudando a conseguir la corona y aún así no nos has entregado a ninguno de los elementales de fuego'], img:'quien'},
      {text:['','— ¡Si, aún no nos has dado a esa traidora de Selena!'], img:'quien'},
      {text:['','— Nicole: Paciencia caballeros, es necesario que todo vaya a la perfección, una vez sea la reina del reino de hielo mi hermano no podrá liberar a esos dos entrometido como ha hecho antes.'], img:'quien'},
      {text:['','— ¿Así que lo harás? ¿Finalmente acabar con tu hermano?'], img:'quien'},
      {text:['','— Nicole: Ese ha sido el plan desde el principio, ¡Si tan solo mi padre entendiera a razones o la corte pudiera entender que soy la más digna para este trabajo!'], img:'quien'},
      {text:['','— Las reunión continua hablando sobre sus planes y especialmente sobre lo que harán al conseguir el poder, revelando que habrá un nuevo intento de asesinato muy pronto.'], img:'moment'},
      {text:['— Selena: ','Toda esta información... ¡Nicolás debe saberlo!'], img:'SelenaEnojada'},
      {text:['','— Selena escapa con cautela y de dirige a ver a Nicolás con todas las pruebas en mano, decidida a desenmascarar la verdad.'], img:'moment'}
    ])

    postText.current.push(()=>{

      setFin('fin');

    });

    }

    const maxScroll = useRef(0);

    const credits = useRef(undefined);

    useEffect(()=>{

      credits.current.scrollTo(0, credits.current.scrollHeight);

      maxScroll.current = credits.current.scrollTop;

      credits.current.scrollTo(0, 0);

    }, []);

    const [overflow, setOverflow] = useState('hidden')

    function scrolling() {

      setCastilloSong(true)
      
      for(let i = credits.current.scrollTop; i <= maxScroll.current; i++){

        setTimeout(()=>{

          credits.current.scrollTo(0, i)

          if(i === maxScroll.current){

            setOverflow('scroll')

          }

        }, (i-credits.current.scrollTop) * 40);

      }

    }

    function finHandler(){

      setEle('elevation');

    }

    const [ele, setEle] = useState('');

    const [castilloSongVolumen, setCastilloSongVolumen] = useState(1);

    const [castilloSong, setCastilloSong] = useState(false);
  
    const castilloSongElement = useRef(undefined);

    if(zone !== 'trono') return false;

    return (<div className={"Zone1 " + dark} onAnimationEnd={animationEnd}>

        <ReactPlayer volume={castilloSongVolumen} url='https://soundcloud.com/shadry-xeaton/nier-ost-grandma' playing={castilloSong} width="0" height="0" onEnded={()=>{
          castilloSongElement.current.seekTo(0, 0);

            setCastilloSong(false)
            setTimeout(()=>{
              
              setCastilloSong(true)
            
            }, 0)
          
          }} ref={castilloSongElement}/>

      <div className="modal" style={{display:showModal?'flex':'none'}}>

        <div className="container">

          <h5>¿Quieres entrar por la compuerta?</h5>

          <p onClick={yesModal}>Sí.</p> <p onClick={()=>setShowModal(false)}>No.</p>

        </div>


      </div>

      <div className={"oscuro " + dark} style={{display:(dark === 'dark')?'flex':'none'}}>
        <p className={fin} onAnimationEnd={finHandler}>Fin</p>
      </div>

      <div className={"credits " + ele} onAnimationEnd={scrolling}>

        <div className="background" style={{backgroundImage: `url(${ObjetImages.current['credits']})`}}></div>

          <div className="container-credits" style={{overflowY:overflow}} ref={credits}>

          <div className="Daria-Cohen"></div>

          <p><span>Dirección:</span> <br/>
          ZouponFox - @ZouponFox <br/>
          Ed Farcevol - @Ed_Farcevol <br/>
          Mastercorvo - <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE/">Facebook</a> <br/> <br/> </p>

          <p><span>Artistas involucrados:</span> <br/>
          ZouponFox - @ZouponFox <br/>
          Ed Farcevol - @Ed_Farcevol <br/>
          PlzKillMe - @plzkillme_plz <br/> <br/></p>

          <p><span>Canciones usadas:</span> <br/>
          <a href="https://soundcloud.com/breitkopf-haertel/1-movement-from-brandenburg-concerto-no-3-in-g-major-bwv-1048-by-johann-sebastian-bach">Música del castillo</a> <br/>
          <a href="https://soundcloud.com/video-background-music/cold-isolation-sad-dramatic-background-music-piano-and-violin">Música del pueblo</a> <br/>
          <a href="https://www.youtube.com/watch?v=UxOW4hBKU3A">Música del menu</a><br/>
          <a href="https://www.youtube.com/watch?v=Gm-X7KBBacM">Música de los créditos</a> <br/> <br/></p>

          <p><span>Programador:</span> <br/>
          Mastercorvo - <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE/">Facebook</a> <br/> <br/></p>

          <p> <span>Guionistas y escritores:</span> <br/>
          ZouponFox - @ZouponFox <br/>
          Ed Farcevol - @Ed_Farcevol <br/> <br/></p>

          <p> <span>Personajes nombrados:</span> <br/>
          Selena Mulciber <br/>
          Vulnos Alejandrino <br/>
          Nicolás Borea <br/>
          Nicole Borea <br/>
          Guardia genérico <br/>
          Waiber Hayan Borea <br/>
          Eduar Telem Sinn <br/>
          Noel Borea III <br/>
          Namellia de Borea <br/> <br/></p>

          <p><span>Programas usados:</span> <br/>
          Visual Studio Code <br/>
          React Js (Con la unica librería "react-player")<br/>
          Inkscape <br/>
          Clip Studio Paint <br/> <br/> <br/></p>

          <p><span>Libro de Pertenecientes al Fuego</span> <br/>
          <a href="https://www.wattpad.com/story/217737997-pertenecientes-al-fuego">https://www.wattpad.com/story/217737997-pertenecientes-al-fuego</a>
          <br/> <br/></p>

          <p><span>Canal de Telegram</span> <br/> 
          <a href="t.me/PertenecientesAlFuego">t.me/PertenecientesAlFuego</a>
          <br/> <br/></p>

          <p> <span>Gracias por jugar. Volveremos con más :)</span> <br/> <br/> </p>
          <p> <span>Recarga la pagina para jugar de nuevo</span> <br/> <br/> </p>
        </div>

      </div>

      <div className="nota" onClick={closeNota} style={{display:showNota?'flex':'none'}}>

        <div style={{backgroundImage:`url(${ObjetImages.current['notat']})`}}></div>

      </div>
      
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="1920"
      height="1080"
      version="1.1"
      viewBox="0 0 508 285.75"
      className="main-svg"
    >
      <image
          id="image860"
          width="508"
          height="285.75"
          x="0"
          y="0"
          fill="none"
          stroke="none"
          preserveAspectRatio="none"
          href={ObjetImages.current['trono']}
      ></image>
      <g
        id="layer1"
        fill="#000"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="0.265"
      >
        <path
          id="trono"
          onClick={tronoHandler}
          d="M250.22 66.146l-16.253 9.071-21.166 20.789-3.024 26.836 5.67 34.018-13.23 6.048-1.512 18.899.756 33.64 16.631 5.67 44.223-.379 35.908-.756 2.646-34.018-3.78-24.946-13.607-.756 4.914-51.405-14.363-28.726-9.45.378z"
          opacity="0"
        ></path>
        <path
          id="alfombra"
          onClick={alfombraHandler}
          d="M316.185 285.75l-25.658-63.916-75.637.267-28.063 63.649z"
          opacity="0"
        ></path>
        <path
          id="nota"
          onClick={notaHandler}
          d="M433.066 101.96l-3.969 1.133-1.511 7.843 2.362 7.37 4.725-.094.189-13.418z"
          opacity="0"
        ></path>
        <path
          id="puerta"
          d="M157.238 105.455l-4.82.378.095 32.979 5.009 3.118z"
          opacity="0"
        ></path>
      </g>
    </svg>


    </div>)
    
}

export default Zone1;