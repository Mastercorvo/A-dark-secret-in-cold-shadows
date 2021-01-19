
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

  const [TEXT, setTEXT] = useState('');

  const [avatar, setAvatar] = useState('');
  const [newFoto, setNewFoto] = useState(false);
  const [showText, setShowText] = useState(false);

  const writing = useRef(false);

  const arrayTexts = useRef([]);

  const currentText = useRef('');

  const currentNowWriting = useRef(false);

  const arrayOfTimeOuts = useRef([])

  function inputText(array){

    if(writing.current) return false;

    writing.current = true;

    setShowText(true);

    for(let i = 0; i < array.length ;i++){

      arrayTexts.current[i] = ()=>later(array[i]);

    }

    function later(_DATA){

      currentNowWriting.current = true;

      for(let i = 0;i < arrayOfTimeOuts.current.length; i++){
        
        clearTimeout(arrayOfTimeOuts.current[i]);
        
      }
      
      let DATA = _DATA?_DATA:{};
      
      let { text, speed, replace, wait } = DATA;
      
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

            }
    
          }, speed * i))
    
        }
  
      }
      
    }
    
    arrayTexts.current.shift()();

  }

  useEffect(()=>{

    inputText([{text:['— Selena: ','Haa... ¿Dónde estoy?'], img: 'SelenaHablaTriste'},
    {text:['— Selena: ','Haa... ¿Dónde232323 estoy?'], img: 'SelenaHablaTriste'},
  {text:['— Selena: ','No sé como llegue aquí pero debo salir rapido.'], img: 'SelenaHablaSeria'}])

  }, []);

  const count = useRef(0);

  function textHandler(){

    if(currentNowWriting.current){

      for(let i = 0;i < arrayOfTimeOuts.current.length; i++){
        
        clearTimeout(arrayOfTimeOuts.current[i]);
        
      }

      setTEXT(()=>currentText.current);

      currentNowWriting.current = false

      return false;

    }

    const Element = arrayTexts.current.shift();

    Element && Element();

    if(count.current === 1) {

      setShowText(false);

      writing.current = false;

      currentText.current = '';
    
    }

    if(arrayTexts.current.length === 0) count.current = 1

  }

  return (

      <div className="App">
        <Zone1 inputText={inputText}/>
        <div className="texto" onClick={textHandler} style={{display:showText?'block':'none'}}>
        {TEXT}
        <div className={'foto ' + (newFoto?'boom':'')} onAnimationEnd={()=>{setNewFoto(()=>false)}} style={{backgroundImage: `url(${avatar})`} }></div>
        </div>

      </div>

  );
}

export default App;
