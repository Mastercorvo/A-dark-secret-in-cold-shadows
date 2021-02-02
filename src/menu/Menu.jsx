
import './menu.css';

import { useState } from 'react'

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
    return (<div className="containerTop" style={{display:showPlayScreen?'flex':'none'}}>
    <div className="backPoint" onMouseMove={moveSkew}></div>
    <div className="logo-menu">
        <div className="container-menu-logo">
            <div className="background" style={{backgroundImage:`url(${ObjetImages.current['logoP']})`}}></div>
            <div className={"four " + endA}></div>
            <div className={"three " + endA}></div>
            <div className={"two " + endA}></div>
            <div className={"one " + endA} onAnimationEnd={move}></div>
        </div>

    <div className="title">A dark secret in cold shadows</div>

    </div>
    <div className="menu">
      <div className="option" onClick={buttonPlayHandler}><p>Jugar</p></div>
      <div className="option"><p>Tutorial</p> </div>
      <div className="option"><p>Créditos</p></div>
    </div>
    <div className="container" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['fondoMenu']})`}}>
      <div className="nube" style={{transform:`rotateX(${y}deg) rotateY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['nubesM']})`}}></div>
      <div className="selena" style={{transform:`skewX(${y}deg) skewY(${x}deg)`, backgroundImage:`url(${ObjetImages.current['selenaM']})`}}></div>
    </div>
  </div>)

}

export default Menu;