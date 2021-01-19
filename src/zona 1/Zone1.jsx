
import './zone1.css';

import { useRef, useState } from 'react';

function Zone1({inputText, setInventario, currentAnyText, inventario}) {

    const electricidad = useRef(false);

    function cajasHandler() {
      
      if(currentAnyText.current) return false;
        
      if('destornillador' in inventario){

        inputText([{text:['— Selena: ','Ya no hay nada allí.']}]);

        return false;

      }else{

        inputText([{text:['— Selena: ','Encontre un destornillador pero huele feo y raro.'], img: 'SelenaHablaSeria'},
        {text:['— Selena: ','Espera creo que sé dónde estuvo este destornillador *Destornillador obtenido*'], img: 'SelenaAvergonzada'}
      ])

      }

    setInventario(v=>{

      const copy = {...v}

      copy.destornillador = <div> Destonillador </div>;

      return copy

    })

    }

    function cajaElectricaHandler(){

      if(electricidad.current){

        inputText([{text:['— Selena: ','Creo que ya lo repare.']}]);

        return false;

      }

      if('destornillador' in inventario){

        inputText([{text:['— Selena: ','*Abriendo caja electrica* Bien intentare conectar estos clables.']},
        {text:['— Selena: ', 'Bien creo que ya está listo.']}]);

        electricidad.current = true

      } else inputText([{text:['— Selena: ','Es una caja electrica.']}]);

    }

    const [showPantalla, setShowPantalla] = useState(false);
    const [nowPantalla, setNowPantalla] = useState(false);
    const [childPantalla, setChildPantalla] = useState('');
    const [baul, setBaul] = useState(false);
    const [showFinal, setShowFinal] = useState(false);

    function pantallaHanlder(){

      if(currentAnyText.current) return false;

      setShowPantalla(()=>true);

    }

    const electricError = useRef(false);

    function errorChild(){

      electricError.current = true;

      setChildPantalla('ERROR: FALATA ELECTRICIDAD');

    }
    function zones(){

      setNowPantalla(true);

      if(electricidad.current){

        setChildPantalla(<><p>Zona 1: segura</p> <p>Zona 2: Segura</p> <p>Zona 3: Señales extrañas</p> 
        <p onClick={()=>setNowPantalla(()=>false)}>Volver</p></>)

      }else errorChild()

    }

    function pantallaClose(){

      setShowPantalla(()=>false);

      setNowPantalla(()=>false);

      if(electricError.current){

        inputText([{text:['— Selena: ','Vere si puedo reparar la electricidad.'], img: 'SelenaHablaSeria'}])

        electricError.current = false;

      }

    }

    function openBaul(){

      setNowPantalla(true);
      
      if(electricidad.current){
        setBaul(v=>!v);

        setChildPantalla(<><p>{!baul?'Baul Abierto': 'Baul Cerrado'}</p>
        <p onClick={()=>setNowPantalla(()=>false)}>Volver</p></>);

      }else errorChild()

    }

    function checkInfo(){

      setNowPantalla(true);
      
      if(electricidad.current){

        setChildPantalla(<><p>Se han reportados varios muertos. No se sabe que lo causo. Esten todos alertas.</p>
        <p onClick={()=>setNowPantalla(()=>false)}>Volver</p></>);

      }else errorChild()

    }

    function baulHandler(){

      if(baul){

        setShowFinal(true);

      }else{

        inputText([{text:['— Selena: ','Este baul está cerrado. Pero siento que me ayudaria mucho si lo habro.'], img: 'SelenaHablaSeria'}])

      }

    }

    return (<div className="Zone1">

      <div className="final" style={{display:showFinal?'flex':'none'}}>

        <p>Has llegado al final de esta pequeñisima demo. Espero lo hallas disfrutado :D. ATT: Corvo</p>
        <p>Por cierto Selena encontro un telefono para pedir ayuda y fue rescatada.</p>
        <p>Recarga la pagina para iniciar de nuevo.</p>

      </div>

      <div className="pantalla" style={{display:showPantalla?'flex':'none'}}>

        {nowPantalla?childPantalla:<><div onClick={zones} ><p>Zonas</p></div>
        <div onClick={openBaul}><p>Abir baul</p></div>
        <div onClick={checkInfo}><p>Chequeo de información</p></div></>}
        <p className="close" onClick={pantallaClose}>Salir</p>

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
      <defs id="defs2">
        <clipPath id="clipPath878" clipPathUnits="userSpaceOnUse">
          <path
            id="rect880"
            fill="#000"
            fillOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.292"
            d="M297.089 68.792H408.97V180.673H297.089z"
          ></path>
        </clipPath>
        <clipPath id="clipPath878-1" clipPathUnits="userSpaceOnUse">
          <path
            id="rect880-7"
            fill="#000"
            fillOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.292"
            d="M297.089 68.792H408.97V180.673H297.089z"
          ></path>
        </clipPath>
        <clipPath id="clipPath878-1-6" clipPathUnits="userSpaceOnUse">
          <path
            id="rect880-7-8"
            fill="#000"
            fillOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.292"
            d="M297.089 68.792H408.97V180.673H297.089z"
          ></path>
        </clipPath>
        <clipPath id="clipPath878-1-6-2" clipPathUnits="userSpaceOnUse">
          <path
            id="rect880-7-8-1"
            fill="#000"
            fillOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.292"
            d="M297.089 68.792H408.97V180.673H297.089z"
          ></path>
        </clipPath>
        <clipPath id="clipPath878-1-6-2-6" clipPathUnits="userSpaceOnUse">
          <path
            id="rect880-7-8-1-8"
            fill="#000"
            fillOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.292"
            d="M297.089 68.792H408.97V180.673H297.089z"
          ></path>
        </clipPath>
      </defs>
      <g id="layer1">
        <path
          id="rect833"
          fill="#0073ff"
          fillOpacity="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.496"
          d="M0 161.018H508V285.75H0z"
        ></path>
        <path
          id="rect835"
          fill="#00abff"
          fillOpacity="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5.292"
          d="M0 0H508V161.018H0z"
        ></path>
        <g id="caja-electrica" onClick={cajaElectricaHandler} fillOpacity="1" stroke="none" strokeOpacity="1">
          <path
            id="rect1041"
            fill="#6e6e6e"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="14.965"
            d="M57.452 49.893H120.196V116.795H57.452z"
          ></path>
          <path
            id="rect1043"
            fill="#6e6e6e"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="8.025"
            d="M83.722 0H93.92699999999999V49.893H83.722z"
          ></path>
          <path
            id="path1045"
            fill="#fff400"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.069"
            d="M85.108 79.717c-.523.345-7.9 13.736-7.9 13.736L90.63 88.91 78.26 106.197l21.887-9.268-8.775-.02 14.36-16.83-16.003 3.05 6.358-21.085z"
          ></path>
        </g>
        <g
          id="cajas"
          onClick={cajasHandler}
          fillOpacity="1"
          stroke="#c67700"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="13.229"
        >
          <g id="g926" transform="matrix(.58912 0 0 .58912 176.79 175.826)">
            <path
              id="rect839"
              fill="#945900"
              strokeLinejoin="round"
              d="M309.94 -143.631H421.821V-31.75H309.94z"
            ></path>
            <g
              id="g860-9"
              fill="none"
              strokeLinejoin="miter"
              clipPath="url(#clipPath878)"
              transform="translate(12.851 -212.423)"
            >
              <path id="path841-5" d="M298.412 70.115L407.647 179.35"></path>
              <path id="path841-3-1" d="M407.647 70.115L298.412 179.35"></path>
            </g>
          </g>
          <g id="g926-6" transform="matrix(.2991 0 0 .2991 227.344 168.536)">
            <path
              id="rect839-9"
              fill="#945900"
              strokeLinejoin="round"
              d="M309.94 -143.631H421.821V-31.75H309.94z"
            ></path>
            <g
              id="g860-9-5"
              fill="none"
              strokeLinejoin="miter"
              clipPath="url(#clipPath878-1)"
              transform="translate(12.851 -212.423)"
            >
              <path id="path841-5-8" d="M298.412 70.115L407.647 179.35"></path>
              <path
                id="path841-3-1-6"
                d="M407.647 70.115L298.412 179.35"
              ></path>
            </g>
          </g>
          <g id="g926-6-7" transform="matrix(.2991 0 0 .2991 282.907 94.83)">
            <path
              id="rect839-9-2"
              fill="#945900"
              strokeLinejoin="round"
              d="M309.94 -143.631H421.821V-31.75H309.94z"
            ></path>
            <g
              id="g860-9-5-8"
              fill="none"
              strokeLinejoin="miter"
              clipPath="url(#clipPath878-1-6)"
              transform="translate(12.851 -212.423)"
            >
              <path
                id="path841-5-8-7"
                d="M298.412 70.115L407.647 179.35"
              ></path>
              <path
                id="path841-3-1-6-8"
                d="M407.647 70.115L298.412 179.35"
              ></path>
            </g>
          </g>
          <g
            id="g926-6-7-8"
            transform="matrix(.16664 0 0 .16664 377.865 164.427)"
          >
            <path
              id="rect839-9-2-6"
              fill="#945900"
              strokeLinejoin="round"
              d="M309.94 -143.631H421.821V-31.75H309.94z"
            ></path>
            <g
              id="g860-9-5-8-7"
              fill="none"
              strokeLinejoin="miter"
              clipPath="url(#clipPath878-1-6-2)"
              transform="translate(12.851 -212.423)"
            >
              <path
                id="path841-5-8-7-7"
                d="M298.412 70.115L407.647 179.35"
              ></path>
              <path
                id="path841-3-1-6-8-9"
                d="M407.647 70.115L298.412 179.35"
              ></path>
            </g>
          </g>
          <g
            id="g926-6-7-8-5"
            transform="matrix(.16664 0 0 .16664 377.865 143.578)"
          >
            <path
              id="rect839-9-2-6-8"
              fill="#945900"
              strokeLinejoin="round"
              d="M309.94 -143.631H421.821V-31.75H309.94z"
            ></path>
            <g
              id="g860-9-5-8-7-3"
              fill="none"
              strokeLinejoin="miter"
              clipPath="url(#clipPath878-1-6-2-6)"
              transform="translate(12.851 -212.423)"
            >
              <path
                id="path841-5-8-7-7-1"
                d="M298.412 70.115L407.647 179.35"
              ></path>
              <path
                id="path841-3-1-6-8-9-1"
                d="M407.647 70.115L298.412 179.35"
              ></path>
            </g>
          </g>
        </g>
        <g
          id="pantalla"
          onClick={pantallaHanlder}
          strokeDasharray="none"
          strokeLinecap="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
        >
          <rect
            id="rect1080"
            width="84.131"
            height="58.308"
            x="209.911"
            y="21.167"
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeLinejoin="round"
            strokeWidth="13.229"
            ry="7.938"
          ></rect>
          <circle
            id="path1082"
            cx="224.518"
            cy="34.774"
            r="7.938"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeLinejoin="round"
            strokeWidth="13.229"
          ></circle>
          <g
            id="g1144"
            fill="#2bff00"
            fillOpacity="1"
            stroke="none"
            strokeLinejoin="round"
            strokeWidth="13.229"
            transform="translate(0 3.742)"
          >
            <rect
              id="rect1086"
              width="9.827"
              height="9.827"
              x="244.74"
              y="57.641"
              rx="0"
              ry="0"
            ></rect>
            <rect
              id="rect1086-7"
              width="9.827"
              height="9.827"
              x="257.969"
              y="57.641"
              rx="0"
              ry="0"
            ></rect>
            <rect
              id="rect1086-6"
              width="9.827"
              height="9.827"
              x="271.198"
              y="57.641"
              rx="0"
              ry="0"
            ></rect>
          </g>
          <path
            id="path1109"
            fill="none"
            stroke="#2bff00"
            strokeLinejoin="miter"
            strokeWidth="7.938"
            d="M241.338 32.128h31.372"
          ></path>
          <path
            id="path1109-0"
            fill="none"
            stroke="#2bff00"
            strokeLinejoin="miter"
            strokeWidth="7.938"
            d="M241.338 42.144h40.065"
          ></path>
          <path
            id="path1109-6"
            fill="none"
            stroke="#2bff00"
            strokeLinejoin="miter"
            strokeWidth="7.938"
            d="M243.795 51.594h25.135"
          ></path>
        </g>
        <g id="baul" onClick={baulHandler}>
          <g
            id="g1202"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="7.938"
            transform="translate(-46.869 215.006)"
          >
            <path
              id="rect1191"
              fill="#5e5e5e"
              d="M195.909 -105.304H265.666V-53.988H195.909z"
            ></path>
            <path
              id="rect1193"
              fill="#1b2519"
              d="M195.909 -97.019H265.666V-86.328H195.909z"
            ></path>
            <path
              id="rect1197"
              fill="#fff000"
              d="M224.239 -92.876H237.335V-79.78H224.239z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );


    </div>)
    
}

export default Zone1;