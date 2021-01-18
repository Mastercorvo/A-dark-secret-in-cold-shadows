
import './App.css';

import { useState, useRef } from 'react';

function App() {

  const arrayTexts = useRef([]);

  const [TEXT, setTEXT] = useState('');
  const writing = useRef(false);

  function escribir(DATA) {

    let { text, speed, wait, img, replace } = DATA;

    if(speed === 'insta'){
      
      setTEXT(()=>text.join``)
      
      return false;
      
    }

    writing.current = true;
    
    if(replace === undefined) replace = true;
    if(speed === undefined) speed = 30;
    if(wait === undefined) wait = 0;

    const textOriginal = text[0];
    
    const texstModify = text[0]+' _';

    if(replace) setTEXT(()=>'');
    
    setTEXT(v=> v+text[0]);

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
  
          setTEXT(v=>v + text[1][i]); 
  
          if(i === (text[1].length - 1)){
  
            writing.current = false;
  
          }
  
        }, speed * i);
  
      }

    }

  }

  function inputText(data){

    arrayTexts.current.push(data);
    
  }

  function outputText(purgue){

    escribir(arrayTexts.current.shift());
    
  }

  function textHandler(){

    inputText({text:['hola','amigos']});
    inputText({text:['hola','amigos']});
    outputText();
    
  }

  return (
    <div className="App">

      <div className="texto" onClick={textHandler}>{TEXT}</div>

    </div>
  );
}

export default App;
