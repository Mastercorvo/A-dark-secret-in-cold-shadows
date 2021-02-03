
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

    return (<div className="containerTop" style={{display:showPlayScreen?'flex':'none'}}>
        <p className="recommendation">Se recomienda jugar en pantalla completa para una mejor experiencia, presione f11.</p>
        {showPlayScreen && <ReactPlayer volume={castilloSongVolumen} url='https://soundcloud.com/shadry-xeaton/nier-automata-vague-hope-karaoke' playing={castilloSong} width="0" height="0" onEnded={()=>{
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
      <div className="option"><p>Tutorial</p> </div>
      <div className="option"><p>Créditos</p></div>
    </div>
    <div className="container" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['fondoMenu']})`}}>
      <div className="nube" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['nubesM']})`}}></div>
    </div>
      <div className="selena" style={{backgroundImage:`url(${ObjetImages.current['selenaM']})`}}></div>
  </div>)

}

export default Menu;