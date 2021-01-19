
import './App.css';

import { useState, useRef, useEffect } from 'react';

import {useImage} from 'react-image';

import Zone1 from "./zona 1/Zone1";

const SelenaHabla = 'https://i.ibb.co/rGM9kQR/Selena-Stickers1.png';
const SelenaHablaSeria = 'https://i.ibb.co/9tVZNgx/Selena-Stickers2.png';
const SelenaHablaTriste = 'https://i.ibb.co/P1k9ph8/Selena-Stickers5.png';
const SelenaDesconfia = 'https://i.ibb.co/5R6tPPQ/Selena-Stickers3.png';
const SelenaAvergonzada = 'https://i.ibb.co/L0TWpy5/Selena-Stickers10.png';

const Selenas ={SelenaHabla, SelenaHablaSeria, SelenaHablaTriste, SelenaDesconfia, SelenaAvergonzada}

function App() {

  useImage({srcList:[SelenaHabla, SelenaHablaSeria, SelenaHablaTriste, SelenaDesconfia, SelenaAvergonzada]});

  const arrayTexts = useRef([]);

  const [TEXT, setTEXT] = useState('');
  const writing = useRef(false);
  const currentText = useRef('');
  const forceText = useRef(false);
  const anyText = useRef(false);
  const [avatar, setAvatar] = useState('');
  const [showText, setShowText] = useState(false)

  const [newFoto, setNewFoto] = useState(false);

  function escribir(_DATA) {

    const DATA = _DATA?_DATA:{text:['','']};

    let { text, speed, wait, img, replace } = DATA;

    setAvatar(()=>Selenas[img])

    if(speed === 'insta'){
      
      setTEXT(()=>text.join``);
      
      return false;
      
    }

    writing.current = true;
    
    if(replace === undefined) replace = true;
    if(speed === undefined) speed = 40;
    if(wait === undefined) wait = 0;

    const textOriginal = text[0];
    
    const texstModify = text[0]+' _';

    if(replace) setTEXT(()=>'');
    
    setTEXT(v=> v+text[0]);

    currentText.current = text.join``;

    for(let i = 0; i <= wait/100; i++){

      setTimeout(()=>{

        if(i%2 === 0){

          setTEXT(()=>texstModify);

        }else {

          setTEXT(()=>textOriginal);
        
        }

        if((wait/100) === i){ 
        
          continueText();
        
        }

      }, 100 * (wait/100));

    }

    function continueText() {

      setTEXT(()=>textOriginal);
      
      for(let i = 0; i < text[1].length; i++){
  
        setTimeout(()=>{
  
          if(!forceText.current) setTEXT(v=>v + text[1][i]); 
  
          if(i === (text[1].length - 1)){
  
            writing.current = false;
            if(arrayTexts.current.length === 0) anyText.current = false
  
          }
  
        }, speed * i);
  
      }

    }

  }

  function inputText(data, purgue){

    if(purgue) arrayTexts.current = [];

    if(anyText.current) return false;

    arrayTexts.current.push(data);
    
  }

  const forceTextCount = useRef(0);

  function outputText(power){

    if(anyText.current && !power) return false;

    setNewFoto(()=>true)
    setShowText(()=>true)

    anyText.current = true;

    forceText.current = false;

    if(writing.current){

      setNewFoto(()=>false);

      forceText.current = true;

      setTEXT(()=>currentText.current);

      if(arrayTexts.current.length === 0) anyText.current = false;

      if(forceTextCount.current === 1) setShowText(false);
      
      if(arrayTexts.current.length === 0) forceTextCount.current = 1;

      return false;

    }

    if(arrayTexts.current.length === 0) setShowText(false);
    
    escribir(arrayTexts.current.shift());
    
  }

  useEffect(()=>{

    inputText({text:['— Selena: ','Haa... ¿Dónde estoy?'], img: 'SelenaHablaTriste'});
    inputText({text:['— Selena: ','No sé como llegue aquí pero debo salir rapido.'], img: 'SelenaHablaSeria'});
    outputText();

  }, [])

  function textHandler(){

    outputText(true);
    
  }

  return (

      <div className="App">
        <Zone1 inputText={inputText} outputText={outputText}/>
        <div className="texto" onClick={textHandler} style={{display:showText?'block':'none'}}>
        {TEXT}
        <div className={'foto ' + (newFoto?'boom':'')} onAnimationEnd={()=>{setNewFoto(()=>false)}} style={{backgroundImage: `url(${avatar})`} }></div>
        </div>

      </div>

  );
}

export default App;
