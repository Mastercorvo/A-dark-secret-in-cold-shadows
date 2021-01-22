
import './cuarto.css';

import { useEffect, useRef, useState, useLayoutEffect } from 'react';

function Cuarto({inputText, ObjetImages, zone, setZonesArrow, currentAnyText, inventario, addItem}){

    useEffect(() => {
        if(zone === 'cuarto') setZonesArrow(()=>[undefined, 'sala'])
    },[zone])

    const [imageZone, setImageZone] = useState(ObjetImages.current['cuarto']);

    const countObject = useRef(0);

    function llaveHandler(){

      if(currentAnyText.current) return false;

      if(Object.keys(inventario).find(v=>v==='Llave misteriosa del cuarto de Nicolas')) return false;

      setImageZone(()=>ObjetImages.current['cuartoSinLlave']);

      addItem('llave', 'Una llave misteriosa.', 'Llave misteriosa del cuarto de Nicolas');

      inputText([{text:['','— Selena ha encontrado una llave misteriosa.'], img:'moment'}]);

      countObject.current += 1;

    }

    function dulcesHandler(){

      if(currentAnyText.current) return false;

      const objeto = 'Unos dulces'

      if(Object.keys(inventario).find(v=>v===objeto)) return false;

      setImageZone(()=>ObjetImages.current['cuartoSinDulces']);

      addItem('dulces', 'Unos dulces con mal sabor', objeto);

      inputText([
        {text:['— Selena: ','Oh, unos dulces. Parece que Nicole se los dió a Nicolás. '], img:'SelenaHablaSeria'},{text:['— Selena: ','...'], img:'SelenaHablaSeria'}, {text:['','— Selena se mete uno de los dulces en la boca. '], img:'moment'},{text:['','... [Expresión de desagrado] '], img:'moment'}, {text:['','Escupe el dulce al instante.'], img:'moment'},
        {text:['— Selena: ','¡Esto sabe horrible! ¡Cómo si estuviera envenenado!'], img:'SelenaHabla'},
        {text:['— Selena: ','Debería llevármelos, por la seguridad de Nicolás'], img:'SelenaHabla'}]);

      countObject.current += 1;

    }

    useLayoutEffect(()=>{

      if(countObject.current === 2) setImageZone(()=>ObjetImages.current['cuartoSinNada']);

    }, [countObject.current])

    if(zone !== 'cuarto') return false;
    
    return (<div className="Cuarto">
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
        href={imageZone}
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
          id="foto"
          d="M332.62 14.647c-.851 0-18.616 1.417-18.616 1.417l3.307 5.292s9.922 5.102 10.3 5.197c.378.094 19.655-2.646 19.655-2.646l-3.024-3.874z"
          opacity="0"
        ></path>
        <path
          id="calendario"
          d="M434.848 124.548l.267-51.85-52.118 2.405 1.07 50.514z"
          opacity="0"
        ></path>
        <path
          id="dulces"
          onClick={dulcesHandler}
          d="M56.127 117.331c-2.673-1.069-12.028-3.741-12.028-3.741l-4.276-3.074-8.953.267v3.074l-6.682 2.405v5.078l7.884 6.548 18.442-.935z"
          opacity="0"
        ></path>
        <path
          id="diario"
          d="M60.937 212.212l-3.608-3.875H46.104l-7.617 4.142-7.216 23.92 16.303 6.415 6.682-.534 8.953-26.46z"
          opacity="0"
        ></path>
        <path
          onClick={llaveHandler}
          id="llave"
          d="M201.272 178.405l.756 2.457-5.858 2.74-3.024-5.103-6.898-10.3.85-3.59 4.725-.378 1.512 2.457z"
          opacity="0"
        ></path>
      </g>
    </svg>

    </div>)

}

export default Cuarto;