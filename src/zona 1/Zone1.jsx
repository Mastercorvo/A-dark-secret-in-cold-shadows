
import './zone1.css';

import { useRef, useEffect, useState } from 'react';

import ReactPlayer from 'react-player';

const NOTA_TEXT = 'Para que no se me olvide los números son... La cantidad de libros rojos en el librero. El segundo número de mi cumpleaños. La cantidad de árboles en el pueblo. Y un número que solo yo sé  >:)'

function Zone1({inputText, addItem, currentAnyText, inventario, setFINAL, ObjetImages, zone, setZonesArrow}) {

    function tronoHandler(){

      inputText([{
      text:['— Selena: ','No puedo creer que sentarse en ese trono le de tanto poder a una persona...'], img:'SelenaHablaSeria'}, 
      {text:['— Selena: ','Ahí debería estar el papá de Nicolás y Nicole pero realmente nunca lo he visto en persona.'], img:'SelenaHablaTriste'}])

    }

    function alfombraHandler(){

      inputText([{
        text:['— Selena: ','El suelo debajo de esta alfombra se siente hueco, revisaré más tarde.'], img:'SelenaHablaSeria'}])

    }

    const [showNota, setShowNota] = useState(false);

    function notaHandler(){

      if(currentAnyText.current) return false;

      setShowNota(()=>true);

    }

    function closeNota(){

      setShowNota(()=>false);

      if(inventario['nota']) return false;

      addItem('nota', NOTA_TEXT, 'Nota de la sal del trono')

      inputText([{
        text:['— Selena: ','Tal ves esta información me sirva luego.'], img:'SelenaHablaSeria'}])

    }

    useEffect(()=>{

      if(zone === 'trono') setZonesArrow(()=>['sala', 'pueblo']);

    },[zone])

    if(zone !== 'trono') return false;

    return (<div className="Zone1">

      <div className="nota" onClick={closeNota} style={{display:showNota?'flex':'none'}}>

        <p>{NOTA_TEXT}</p>

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