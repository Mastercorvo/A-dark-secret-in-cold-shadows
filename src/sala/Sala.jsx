
import { useEffect, useRef } from 'react';
import './sala.css';

function Sala({ObjetImages, zone, setZonesArrow, inputText, currentAnyText, addItem}) {

    useEffect(() => {
        if(zone === 'sala') setZonesArrow(()=>['cuarto', 'trono'])
    },[zone])

    function cudernoBloqueadoHandler() {
      
      inputText([{text:['— Selena: ','Parece ser un mini diario... Tiene un candado especial y ahora... ¿Donde estará la llave?'], img: 'SelenaHablaSeria'},])

    }

    function ventana(){

      inputText([{text:['— Selena: ','Una ventana... Se ve una linda vista del reino de hielo.'], img: 'SelenaFeliz'},])

    }

    function silla(){

      inputText([{text:['— Selena: ','No sé porque pero... Se ve muy incómoda.'], img: 'SelenaHablaSeria'},])

    }

    function nota(){

      inputText([{text:['— Selena: ','En esta notita dice las horas que Nicolás no está en el castillo... Curioso.'], img: 'SelenaDesconfia'},])

    }

    function lapices(){

      inputText([{text:['— Selena: ','Dice que es marca mongol.'], img: 'SelenaHabla'},])

    }

    function libreria(){

      inputText([{text:['— Selena: ','Está cerrado... Parece que necesita una llave.'], img: 'SelenaHablaSeria'},])
      
    }
    
    function marco(){
      
      inputText([{text:['— Selena: ','Nicole ni siquiera se esforzó por sonreír en la foto. Que horror.'], img: 'SelenaHablaSeria'},])
      
    }

    const countPapelera = useRef(0);

    function papelera(){

      if(currentAnyText.current) return false;

      switch (countPapelera.current) {
        case 0 : 
        inputText([{text:['— Selena: ','No voy a revisar la basura...'], img: 'SelenaHablaSeria'},])
          break;
        case 1 : 
        inputText([{text:['— Selena: ','No, no lo haré...'], img: 'SelenaHabla'},])
          break;
        case 2 : 
        inputText([{text:['— Selena: ','¿Por que quiero hacerlo?'], img: 'SelenaAvergonzada'},])
          break;
        case 3 : 
        inputText([{text:['— Selena: ','Bien... Lo haré, espero nadie me vea.'], img: 'SelenaHablaSeria'},{text:['','— Selena revisa la papelera encontrándose con muchas hojas y facturas con nombres extraños, parecen venir de otros reinos.'], img: 'moment'},
        {text:['— Selena: ','Parecen pagos por la contratación de personas de... ¿¡Un gremio de asesinos!?'], img: 'SelenaHabla'},
        {text:['— Selena: ','Hay una factura del día que secuestraron a Nicolás... Me quedaré con esto.'], img: 'SelenaDesconfia'}])
        addItem('nota', "Muestra un pago a varias personas de un gremio de asesinos para secuestrar a Nicolás", '"Factura misteriosa"')
          break;
      
        default:
          break;
      }

      countPapelera.current +=1

    }

    if(zone !== 'sala') return false;

    return (<div className="Sala">

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
          href={ObjetImages.current['sala']}
      ></image>
      <g
        id="layer1"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="0.265"
      >
        <path
          id="mesa"
          fill="#fff"
          d="M190.296 199.116h119.202l-1.87 52.385-116.798-.268z"
          opacity="0"
        ></path>
        <path
          id="silla"
          onClick={silla}
          fill="#000"
          d="M353.786 148.923L330.35 162.53l-3.78 24.19-6.047 25.703 11.34 9.071 1.511 27.214 50.649-.756v-30.994l10.583-15.119-9.071-12.85-14.363-36.287z"
          opacity="0"
        ></path>
        <path
          id="silla1"
          onClick={silla}
          fill="#000"
          d="M172.357 241.905v-20.41l12.095-18.144-6.803-12.095-4.536 1.512-1.512-36.286-30.994-7.56-21.922 29.483 3.78 12.095-9.072 15.875 6.803 5.292 7.56 16.63L127 244.93z"
          opacity="0"
        ></path>
        <path
          id="ventana2"
          onClick={ventana}
          fill="#000"
          d="M375.708 130.024l8.316 12.851 89.202-3.024-23.434-127.756-14.363-6.047-25.703-3.024-15.119 37.041z"
          opacity="0"
        ></path>
        <path
          id="ventana1"
          onClick={ventana}
          fill="#000"
          d="M109.313 141.118V67.085l-39.556 1.069L80.715 27.26l18.71-20.58 18.975 6.682 20.847 46.505 5.88 81.518z"
          opacity="0"
        ></path>
        <path
          id="marco"
          onClick={marco}
          fill="#000"
          d="M310.567 22.985l-111.718.535-1.07 117.598 118.134 1.07z"
          opacity="0"
        ></path>
        <path
          id="papelera"
          onClick={papelera}
          fill="#000"
          d="M430.304 210.608l-22.985 1.604.534 34.745 19.244 5.88 9.621-14.967z"
          opacity="0"
        ></path>
        <path
          id="libreria"
          onClick={libreria}
          fill="#fff"
          d="M0 67.886l108.952.339.189 177.223L0 245.621z"
          opacity="0"
        ></path>
        <path
          id="libroEspecial"
          fill="#000"
          d="M0 147.174v13.371l4.394-.094v-13.418z"
          opacity="0"
        ></path>
        <path
          id="cudernoBloqueado"
          onClick={cudernoBloqueadoHandler}
          fill="#000"
          d="M294.999 204.06c-1.136-.534-14.032 0-14.032 0l-.2 6.548-1.337 1.003.134 3.207.869.4.133 8.553 14.566.134z"
          opacity="0"
        ></path>
        <path
          id="lapices"
          onClick={lapices}
          fill="#000"
          d="M271.576 203.635l-.19 21.922 6.899-.472-.189-22.017z"
          opacity="0"
        ></path>
        <path
          id="hojas"
          onClick={nota}
          fill="#000"
          d="M268.741 224.14l-.094-21.356-15.497.473-15.686 10.205.944 10.205z"
          opacity="0"
        ></path>
      </g>
    </svg>

    </div>)
    
}

export default Sala;