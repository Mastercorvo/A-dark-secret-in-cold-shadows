
import './menu.css';

import ReactPlayer from 'react-player';

import { useState, useRef } from 'react'

function Menu({buttonPlayHandler, ObjetImages, showPlayScreen}){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
  
    function moveSkew(data){
  
      // setY(v=>v+data.movementY)
      
      const resultX = data.nativeEvent.offsetX - Math.floor(data.target.offsetWidth/2);
      
      setX(((resultX*20)/Math.floor(data.target.offsetWidth/2)).toFixed(2));
  
      const resultY = data.nativeEvent.offsetY - Math.floor(data.target.offsetHeight/2);
      
      setY((((resultY*20)/Math.floor(data.target.offsetHeight/2))*-1).toFixed(2));
  
    }
  
    const [endA, setEndA] = useState('part')
  
    function move(){
  
      setEndA(v=>v==='part'?'reverse':'part')
  
    }

    const [castilloSongVolumen, setCastilloSongVolumen] = useState(1);

    const [castilloSong, setCastilloSong] = useState(true);
  
    const castilloSongElement = useRef(undefined);

    const [showModal, setShowModal] = useState(false)

    return (<div className="containerTop" style={{display:showPlayScreen?'flex':'none'}}>
      <div className="modal" style={{display: showModal?'flex':'none'}}>

        <div className="container">

          <div className="box"></div>

          <h5>Todo el equipo conformado por:</h5>

          <p>ZouponFox - <a href="https://twitter.com/ZouponFox?s=09">@ZouponFox</a> </p>
          <p>Ed Farcevol - <a href="https://twitter.com/Ed_Farcevol?s=09">@Ed_Farcevol</a></p>
          <p>Mastercorvo - <a href="https://www.facebook.com/GIGA.KIWI.FRUITPALACE">Facebook</a></p>
          <p>PlzKillMe - <a href="https://twitter.com/plzkillme_plz?s=09">@plzkillme_plz</a></p>
          <span onClick={()=>setShowModal(false)}>Click para cerrar.</span>

        </div>

      </div>
        <p className="recommendation">Se recomienda jugar en pantalla completa para una mejor experiencia, presione f11.</p>
        {showPlayScreen && <ReactPlayer volume={castilloSongVolumen} url='https://soundcloud.com/shadry-xeaton/nier-automata-vague-hope-karaoke' muted={false} playing={castilloSong} width="0" height="0" onEnded={()=>{
          castilloSongElement.current.seekTo(0, 0);

            setCastilloSong(false)
            setTimeout(()=>setCastilloSong(true), 0)
          
          }} ref={castilloSongElement}/>
        }
    <div className="backPoint" ></div>
    <div className="logo-menu" style={{backgroundImage:`url(${ObjetImages.current['logoGame']})`}}>

    <div className="title-container"></div>
    <div className="title"><p>Un juego original de</p>         
        <div className="container-menu-logo">
            <div className="background" style={{backgroundImage:`url(${ObjetImages.current['logoP']})`}}></div>
        </div>
    </div>

    </div>
    <div className="menu">
      <div className="option" onClick={buttonPlayHandler}><p>Jugar</p></div>
      <div className="option" onClick={()=>setShowModal(true)}><p>Créditos</p></div>
    </div>
    <div className="container" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['fondoMenu']})`}}>
      <div className="nube" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['nubesM']})`}}></div>
    </div>
      <div className="selena" style={{backgroundImage:`url(${ObjetImages.current['selenaM']})`}}></div>
  </div>)

}

export default Menu;