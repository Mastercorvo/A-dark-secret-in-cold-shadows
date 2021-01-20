
import './App.css';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';

import ReactPlayer from 'react-player';

import Zone1 from "./zona 1/Zone1";

import System from './system.svg';

const SelenaHabla = 'https://i.ibb.co/4f6dxLH/selena1.png';
const SelenaHablaSeria = 'https://i.ibb.co/dgP6TZY/selena10.png';
const SelenaHablaTriste = 'https://i.ibb.co/6RWdPkq/selena7.png';
const SelenaDesconfia = 'https://i.ibb.co/vYX4mcJ/selena9.png';
const SelenaAvergonzada = 'https://i.ibb.co/jRD33qx/selena2.png';

const Trono = 'https://i.ibb.co/n8G4hnq/trono-full.png';

const Images =[[SelenaHabla, 'SelenaHabla'], [SelenaHablaSeria, 'SelenaHablaSeria'],[SelenaHablaTriste,'SelenaHablaTriste'], [SelenaDesconfia, 'SelenaDesconfia'], [SelenaAvergonzada, 'SelenaAvergonzada'],
[System, 'system'],[Trono, 'trono']];

function App() {

  const ObjetImages = useRef({});

  const [isLoad, setIsLoad] = useState(true);
  const [countImages, setCountImages] = useState(0);
  const [countImagesLoad, setCountImagesLoad] = useState(0);

  const [onPlay, setOnplay] = useState(false);

  const [showPlayScreen, setShowPlayScreen] = useState(true);

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

      inputText([{text:['— Selena: ','Haaaa... ¿Dónde estoy?'], img: 'SelenaHablaTriste'},
      {text:['— Selena: ','No sé como llegue aquí, pero debo salir rápido.'], img: 'SelenaHablaSeria'},
      {text:['[SYSTEM] ','Ayuda a Selena a salir de aquí.']}]);

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
  const [menuMusic, setMenuMusic] = useState(false);

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
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=PAb74twuW58" loop playing={!showPlayScreen && !FINAL} width="0" height="0"/> */}

        <div className="play"style={{display:showPlayScreen?'flex':'none'}} onClick={()=>{

          setShowPlayScreen(false);
          
          first();

        }}><p hidden={!onPlay} onMouseOut={()=>setTextPlay('READY?')} onMouseOver={()=>setTextPlay('GO!')} >{textPlay}</p>
  
        </div>
        <div className="inventario-icon" onClick={()=>setShowInventario(true)}></div>
        <div className="inventario" style={{display:showInventario?'block':'none'}}>

          <p className="close" onClick={()=>setShowInventario(false)}>Cerrar</p>

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
