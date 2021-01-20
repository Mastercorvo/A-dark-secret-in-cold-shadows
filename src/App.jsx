
import './App.css';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';

import ReactPlayer from 'react-player';

import Zone1 from "./zona 1/Zone1";

import System from './system.svg';

// Selena

const SelenaHabla = 'https://i.ibb.co/4f6dxLH/selena1.png';
const SelenaHablaSeria = 'https://i.ibb.co/dgP6TZY/selena10.png';
const SelenaHablaTriste = 'https://i.ibb.co/6RWdPkq/selena7.png';
const SelenaDesconfia = 'https://i.ibb.co/vYX4mcJ/selena9.png';
const SelenaAvergonzada = 'https://i.ibb.co/jRD33qx/selena2.png';
const SelenaFeliz = 'https://i.ibb.co/zZPGCFG/selena3.png';

// Nicolas

const NicolasEncantado = 'https://i.ibb.co/Wgw9VkY/nicolas-4.png';
const NicolasFeliz = 'https://i.ibb.co/QfGsSJV/nicolas-3.png';
const NicolasHabla = 'https://i.ibb.co/FWYsVqC/nicolas-2.png';
const NicolasHablaFeliz = 'https://i.ibb.co/3CkQXt1/nicolas-1.png';

const Espada = 'https://i.ibb.co/Ss0yPFx/espadaselena.png';

// Random

const Flecha = 'https://i.ibb.co/2ZFSfRC/Chavez-Official-portrait-photo.jpg';

//Escenarios

const Trono = 'https://i.ibb.co/n8G4hnq/trono-full.png';

const Images =[[SelenaHabla, 'SelenaHabla'], [SelenaHablaSeria, 'SelenaHablaSeria'],[SelenaHablaTriste,'SelenaHablaTriste'], [SelenaDesconfia, 'SelenaDesconfia'], [SelenaAvergonzada, 'SelenaAvergonzada'],
[System, 'system'],[Trono, 'trono'], [NicolasEncantado, 'NicolasEncantado'], [NicolasFeliz, 'NicolasFeliz'],
[NicolasHabla, 'NicolasHabla'], [NicolasHablaFeliz,'NicolasHablaFeliz'],[SelenaFeliz, 'SelenaFeliz'],
[Flecha, 'flecha'], [Espada, 'espada']];

function App() {

  const ObjetImages = useRef({});

  const [isLoad, setIsLoad] = useState(true);
  const [countImages, setCountImages] = useState(0);
  const [countImagesLoad, setCountImagesLoad] = useState(0);
  const [onPlay, setOnplay] = useState(false);
  const [showPlayScreen, setShowPlayScreen] = useState(true);

  const [inventoryDescription, setInventoryDescription] = useState('');
  const [showInventoryDescription, setShowInventoryDescription] = useState(false);

  const cacheImages = async (arr) =>{

    setCountImages(()=>arr.length)

    const promises = await arr.map(([link, name])=>{
  
      return new Promise((resolve, reject)=>{

        fetch(link).then(result=>{
          
          return result.blob();
        }).then(result=>{
          
          console.log('hola');
          setCountImagesLoad(v=>v+1);
          resolve([name, URL.createObjectURL(result)]);

        })

      })
  
    });

    
    ObjetImages.current = {...Object.fromEntries(await Promise.all(promises)), ...ObjetImages.current}
    
    setOnplay(()=>true);
    
    setIsLoad(false);

  }
  
  useLayoutEffect(()=>{
    
    cacheImages(Images);

  }, []);

  const [TEXT, setTEXT] = useState('');

  const [avatar, setAvatar] = useState('');
  const [newFoto, setNewFoto] = useState(false);
  const [showText, setShowText] = useState(false);

  const writing = useRef(false);
  const arrayTexts = useRef([]);
  const currentText = useRef('');
  const currentNowWriting = useRef(false);
  const arrayOfTimeOuts = useRef([]);

  const [inventario, setInventario] = useState({});

  const [showInventario, setShowInventario] = useState(false);

  const animationAvatarStart = useRef(false);

  const currentAnyText = useRef(false);

  function inputText(array){

    if(writing.current) return false;
    
    currentAnyText.current = true;

    writing.current = true;

    setShowText(true);

    for(let i = 0; i < array.length ;i++){

      arrayTexts.current[i] = ()=>later(array[i]);

    }

    function later(_DATA){

      // Animation code

      setAvatar(()=>{

        if(!img) return ObjetImages.current['system']

        return ObjetImages.current[img]
      
      });

      setTimeout(() => {
        
        setNewFoto(()=>true);

      }, 0);
      animationAvatarStart.current = true;

      // Code

      currentNowWriting.current = true;

      for(let i = 0;i < arrayOfTimeOuts.current.length; i++){
        
        clearTimeout(arrayOfTimeOuts.current[i]);
        
      }
      
      let DATA = _DATA?_DATA:{};
      
      let { text, speed, replace, wait, img } = DATA;
      
      if(speed === undefined) speed = 40;
      if(replace === undefined) replace = true;
      if(replace){

        setTEXT(()=>'');

      }
      if(wait === undefined) wait = 0;
      
      currentText.current = text.join``;

      let textModify = '';

      let textOriginal = ''

      if(replace){

        textModify = text[0] + ' _';
  
        textOriginal = text[0];

      }else{

        textModify = TEXT + text[0] + ' _';
  
        textOriginal = TEXT + text[0];

      }

      for(let i = 0; i <= wait/100 ;i++){

        setTimeout(()=>{

          if((i%2) === 0){

            setTEXT(()=>textModify);

          }else{

            setTEXT(()=>textOriginal);

          }

          if(i === (wait/100)) continueText();

        }, 100 * i);

      }

      function continueText(){

        setTEXT(()=>textOriginal);

        for(let i = 0; i < text[1].length;i++){
    
          arrayOfTimeOuts.current.push(setTimeout(()=>{
    
            setTEXT(v=>v+text[1][i]);
    
            if(i === (text[1].length - 1)){

              currentNowWriting.current = false;

              if(!animationAvatarStart.current) setNewFoto(()=>false);

            }
    
          }, speed * i))
    
        }
  
      }
      
    }
    
    arrayTexts.current.shift()();

  }

    function first(){

      addItem('flecha', 'Un comandante que estará siempre en nuestro corazones.', 'Un Chavez');
      addItem('espada', '¡La legendaria espada de tungsteno! Este objeto no puede ser utilizado aquí.', 'Maekir');

      inputText([{text:['— Nicolás:',' Es un gusto tenerte por aquí Selena, me alegra mucho que vengas a visitar el castillo. '], img: 'NicolasHabla'},
      {text:['— Selena:',' Gracias a ti por dejarme venir.'], img: 'SelenaFeliz'},
      {text:['— Nicolás:',' ¿Que deseas hacer por aquí? '], img: 'NicolasEncantado'},
      {text:['— Selena:',' Vengo a pasear y conocer un poco ¿No hay problema con que camine por el castillo un poco? '], img: 'SelenaFeliz'},
      {text:['— Nicolás:',' ¡No hay ningún problema en lo absoluto! Confío en tí pero solo no vayas a donde los guardias estén en la puerta.'], img: 'NicolasEncantado'},
      {text:['— Nicolás:',' Si necesitas algo házmelo saber, estaré atendiendo unos asuntos. *Nicolás se va* '], img: 'NicolasHabla'},
      {text:['— Selena:',' Bien... Ya es hora de buscar pruebas contra Nicole. '], img: 'SelenaHablaSeria'},])

    }

  const count = useRef(0);

  function textHandler(){

    if(currentNowWriting.current){

      setNewFoto(()=>false);

      for(let i = 0;i < arrayOfTimeOuts.current.length; i++){
        
        clearTimeout(arrayOfTimeOuts.current[i]);
        
      }

      setTEXT(()=>currentText.current);

      currentNowWriting.current = false

      return false;

    }

    if(arrayTexts.current.length === 0) count.current = 1
    
    const Element = arrayTexts.current.shift();
    
    setNewFoto(()=>false);

    Element && Element();

    if(count.current === 1) {

      setShowText(false);

      currentAnyText.current = false

      writing.current = false;

      currentText.current = '';

      count.current = 0;
    
    }

  }

  const [textPlay, setTextPlay] = useState('READY?');
  const [FINAL, setFINAL] = useState(false);

  function addItem(image, description, name){

    function onClick(){

      setInventoryDescription(description);

      setShowInventoryDescription(()=>true);

    }

    setInventario((inv)=>{

      const copy = {...inv}

      copy[image] = (<div className="item" onClick={onClick}>

        <div className="image" style={{backgroundImage:`url(${ObjetImages.current[image]})`}}></div>

        <p className="name">{name}</p>

      </div>);
  
      return copy;
      
  })

  }

  if(isLoad){

    return <div className="load">

      <h1>Unfinished Selena Game (Protoptipe)</h1>

      <span>Un juego original del estudio:</span>
      <div className="container-logos">
        <div className="logo"></div>
        <div className="logo2"></div>
      </div>

      <p>Cargando...</p>

      <div className="bar"><div style={{width:`${(100*countImagesLoad)/countImages}%`}}></div></div>
      
    </div>

  }

  return (

      <div className="App">
        {!showPlayScreen && <ReactPlayer  url="https://www.youtube.com/watch?v=SaCheA6Njc4" loop playing={true} width="0" height="0"/>}

        <div className="play"style={{display:showPlayScreen?'flex':'none'}} onClick={()=>{

          setShowPlayScreen(false);
          
          first();

        }}><p hidden={!onPlay} onMouseOut={()=>setTextPlay('READY?')} onMouseOver={()=>setTextPlay('GO!')} >{textPlay}</p>
  
        </div>
        <div className="inventario-icon" onClick={()=>setShowInventario(true)}></div>
        <div className="inventario" style={{display:showInventario?'flex':'none'}}>

          <div className="description" style={{display:showInventoryDescription?'grid':'none'}} onClick={()=>setShowInventoryDescription(()=>false)}>
            <div className="title"><h3>Descripción:</h3></div>
            <p className="first">{inventoryDescription || 'Example'}</p> 
            <p className="close">Click para cerra la descripción.</p>
            </div>

          <p className="close" onClick={()=>{
            setShowInventario(false);
            setShowInventoryDescription(()=>false);
            }}>Cerrar</p>

          <div className="container">

            {Object.entries(inventario).map(e=>e[1])}

          </div>

        </div>
        <Zone1 ObjetImages={ObjetImages} setFINAL={setFINAL} inputText={inputText} setInventario={setInventario} inventario={inventario} currentAnyText={currentAnyText}/>
        <div className="texto " onClick={textHandler} style={{display:showText?'grid':'none'}}>
        <div className={'foto ' + (newFoto?'boom':'')} onAnimationEnd={()=>{

          setNewFoto(()=>false);

          animationAvatarStart.current = false;
          
          }} style={{backgroundImage: `url(${avatar})`} }></div>

          <div className="text-container"><p>{TEXT}</p></div>

        </div>

      </div>

  );
}

export default App;
