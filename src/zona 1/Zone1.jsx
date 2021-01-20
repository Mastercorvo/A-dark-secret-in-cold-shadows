
import './zone1.css';

import { useRef, useState } from 'react';

import ReactPlayer from 'react-player'

function Zone1({inputText, setInventario, currentAnyText, inventario, setFINAL}) {

    function tronoHanlder(){

      alert('hola')

    }

    const [play, setPlay] = useState(true)

    return (<div className="Zone1" onClick={()=>setPlay(v=>{console.log('yes'); return !v})}>
      
    {play && <ReactPlayer url="https://www.youtube.com/watch?v=OJXi5BvR_DU" width="0" height="0" playing={true}/>}

    <div className="backgroung" ></div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="1920"
      height="1080"
      version="1.1"
      viewBox="0 0 508 285.75"
      className="main-svg"
    >
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
          onClick={tronoHanlder}
          d="M250.22 66.146l-16.253 9.071-21.166 20.789-3.024 26.836 5.67 34.018-13.23 6.048-1.512 18.899.756 33.64 16.631 5.67 44.223-.379 35.908-.756 2.646-34.018-3.78-24.946-13.607-.756 4.914-51.405-14.363-28.726-9.45.378z"
          opacity="0"
        ></path>
        <path
          id="alfombra"
          d="M316.185 285.75l-25.658-63.916-75.637.267-28.063 63.649z"
          opacity="0"
        ></path>
        <path
          id="nota"
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
  );


    </div>)
    
}

export default Zone1;