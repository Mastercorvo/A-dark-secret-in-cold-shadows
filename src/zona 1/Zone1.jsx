
import './zone1.css';

import { useRef, useEffect, useState } from 'react';

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

        inputText([{
          text:['— Selena: ',' No encuentro una cerradura para esta llave...'], img:'SelenaHablaTriste'}, 
          {text:['— Selena: ','Creo que ya es hora de revisar que hay debajo de la alfombra.'], img:'SelenaHablaTriste'},{text:['','— Selena revisa debajo de la alfombras sigilosamente, encontrando una compuerta bastante escondida.'], img: 'moment'},
          {text:['— Selena: ','¿Eh? ¿Que se supone que hace esto aquí?'], img:'SelenaDesconfia'},
          {text:['','— Selena introduce la llave, parece encajar a la perfección.'], img: 'moment'}
        ]);
  
        postText.current.push(()=>{
  
          showModal(true);
  
        });

      }else{

        showModal(true);

      }

    }

    const [dark, setDark] = useState('');

    function yesModal(){

      showModal(false);

      inputText([{text:['','— Selena entra por la compuerta, con cuidado de que nadie la vea.'], img:'SelenaHablaSeria'}])

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

    function animationEnd() {
      
      if(dark !== 'dark') return false;

      inputText([{text:['','— Selena entra por el pasillo secreto, un recorrido oscuro y largo, después de caminar un poco puede escuchar voces al fondo, tomando cuidado y escondiéndose.'], img:'moment'},
      {text:['','Al asomarse solo puede ver tres siluetas, intentar inspeccionar más de cerca seria peligroso.'], img:'moment'},
      {text:['','Las siluetas hablan, al concentrarse Selena puede distinguir la voz de... ¡Nicole! Acompañada de dos hombres.'], img:'moment'},
      {text:['','— Te hemos estado ayudando a conseguir la corona y aún así no nos has entregado a ninguno de los elementales de fuego'], img:'quien'},
      {text:['','— ¡Si, aún no nos has dado a esa traidora de Selena!'], img:'quien'},
      {text:['','— Nicole: Paciencia caballeros, es necesario que todo vaya a la perfección, una vez sea la reina del reino de hielo mi hermano no podrá liberar a esos dos entrometido como ha hecho antes.'], img:'quien'},
      {text:['','— ¿Así que lo harás? ¿Finalmente acabar con tu hermano?'], img:'quien'},
      {text:['','— Nicole: Ese ha sido el plan desde el principio, ¡Si tan solo mi padre entendiera a razones o la corte pudiera entender que soy la más digna para este trabajo!'], img:'quien'},
      {text:['','— Las reunión continua hablando sobre sus planes y especialmente sobre lo que harán al conseguir el poder, revelando que habrá un nuevo intento de asesinato muy pronto.'], img:'moment'},
      {text:['— Selena','— Las reunión continua hablando sobre sus planes y especialmente sobre lo que harán al conseguir el poder, revelando que habrá un nuevo intento de asesinato muy pronto.'], img:'moment'}
    ])

    }

    if(zone !== 'trono') return false;

    return (<div className={"Zone1 " + dark} onAnimationEnd={animationEnd}>

      <div className="modal" style={{display:showModal?'flex':'none'}}>

        <div className="container">

          <h5>¿Quieres entrar por la compuerta?</h5>

          <p onClick={yesModal}>Sí.</p> <p onClick={()=>setShowModal(false)}>No.</p>

        </div>


      </div>

      <div className={"oscuro " + dark} hidden={dark === 'dark'}></div>

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