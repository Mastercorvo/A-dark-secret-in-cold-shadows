
import './pueblo.css';

import { useEffect, useRef, useState } from 'react';

import Reloj from './svg/reloj.svg';

import ReactPlayer from 'react-player';

let Rumore = ["¿Has visto al principe Nicolás? ¡Es muy agradable y carismático! Pero a cambio la princesa Nicole... Me da mala espina.",
"Escuché de los guardias que la princesa guarda algo tras las pinturas del castillo.",
"¿Esa no es una de los peligrosos Elementales de Fuego? ¿Que hace aquí? No se acerquen a ella", "¡Me gané la lotería!",
"¿Ya viste al guardia de cabello negro y blanco? Se parece mucho a Nicolás y Nicole, jaja que loco ¿No?", 
"El otro día ví a la princesa Nicole viajando al Reino de Electricidad ¿Crees que por fin traigan teléfonos Chiaomi al reino?",
"No vuelvo a viajar al reino de agua, todo está siempre mojado.", 
"El otro día un amigo del Reino de Tierra me vino a visitar.... Rompió la mesa de la casa...", "¿Ya viste la nueva temporada de la Rosa de Elementalupe?",
"¡AH! !ES LA ELEMENTAL DE FUEGO! Tengan cuidado, quema y corta",
"Escuché que el reino eléctrico estaba creado un nuevo teléfono celular, yo sigo esperando a que bajen los precios del primero.", 
"Ah... Cómo extraño a la reina... ¡Era tan hermosa! Es increíble como su hija se parece tanto a ella", "La herrería de al lado está hecha de hielo, no se le derrite con el horno?",
"¡Me encanta oír las campanas de la tarde! Hmmm... ¿Cuantas veces es que sonaban?"];

Rumore = [...Rumore, Rumore[1], Rumore[1], Rumore[1], Rumore[1], Rumore[1]];

function Pueblo({ObjetImages, zone, setZonesArrow, inputText, addItem, currentAnyText, postText, setActions, setSuperTime, salida, globalVolumen}) {

    useEffect(() => {
      if(zone === 'pueblo') setZonesArrow(()=>['trono', undefined]);
    },[zone]);

    const [showPersona, setShowPersona] = useState(true);

    const [modalChild, setModalChild] = useState('');

    const touchIglu = useRef(false);

    const executeAny = useRef([()=>{

      if(!campanadas.current) return false;

      campanadas.current.seekTo(8, 0);

      setCampanadasPlay(true);

    }]);

    function igluHandler(){

      if(currentAnyText.current) return false;

      if(touchIglu.current) return false;

      touchIglu.current = true;

      inputText([{text:['','— Selena se encuentra un papel en la entrada de la herrería.'], img:'moment'},
      {text:['', 'Es de un pedido, armas para los guardias. Tiene un sello de completado y la firma de Nicole junto a su letra con caligrafía tan delicada e inconfundible.'], img:'moment'}, {text:['— Selena: ','Selena: Oh... Me quedaré con esto..'], img: 'SelenaDesconfia'}, {text:['— Selena: ','Cada pista es útil.'], img: 'SelenaDesconfia'}]);

      addItem('recibo', 'Un pedido con la firma y delicada ortografía de Nicole.', 'Recibo encontrado en la herrería');

    }

    const touchPersona = useRef(false);

    const [showModal, setShowModal] = useState(false);

    const [background, setBackground] = useState('pueblo')

    const [defaultHour, setDefaultHour] = useState(480);
    const [atardecer, setAtardecer] = useState(0)
    const timeOutsContainer = useRef([]);
    const [manecilla1, setManecilla1] = useState(-90);
    const [manecilla2, setManecilla2] = useState(-90);
    const [light, setLight] = useState(0.2);

    const [atardecerOpacity, setAtardecerOpacity] = useState(0);
    const [anochecerOpacity, setAnochecerOpacity] = useState(0);
    const [amanecerOpacity, setAmanecerOpacity] = useState(0)

    function overlordTime(TIME){

      const time = Number(TIME)

      setSuperTime(time)

      for(let i = 0; i < timeOutsContainer.current.length;i++){

        clearTimeout(timeOutsContainer.current[i]);

      }

      timeOutsContainer.current = [];

      for(let i = time; i <= 1440; i++){

        timeOutsContainer.current.push(setTimeout(()=>{

          setSuperTime(i);

          setManecilla2(()=>{

            return (i*6) -90
          
          });

          setManecilla1(()=>{

            return (i * (720/1440))-90;
          
          });

          if((i >= 360) && (i <= 480)){

            setLight(((i-336)*(1/120) >= 1)?1:(i-336)*(1/120));
            setAmanecerOpacity((i-360)*(1/120));
            setAnochecerOpacity(1-((i-360)*(1/120)));

          }

          if((i >= 480) && (i <= 540)){

            setAmanecerOpacity(1-((i-480)*(1/60)));

          }

          if((i >= 1080) && (i <= 1140)){

            setAtardecer((i-1080) * (1/60));
            setAtardecerOpacity((i-1080) * (1/60))

          }

          if((i >= 1020) && (i <= 1080)){

            if(executeAny.current.length === 1){

              if(!executeAny.current) return false;

              executeAny.current.shift()()

            }

          }

          if(i >= 1140 && i <= 1200){

            setAtardecer(1-((i-1140) * (1/60)));
            setAtardecerOpacity(1-((i-1140) * (1/60)))

            setAnochecerOpacity((i-1140)*(1/60));

            setLight(1-((i-1140)*(0.8/60)));

          }

          if(i <= 360 || i >= 1200){

            if(showPersona === true){

              setShowPersona(false)

            }

          }else if(showPersona === false) setShowPersona(true);

          if(i === 1440){

            overlordTime(0);

            setAmanecerOpacity(0)
            setAtardecerOpacity(0)

            if(executeAny.current.length === 0){

              executeAny.current.push(()=>{

                if(!campanadas.current) return false;

                campanadas.current.seekTo(8, 0);
          
                setCampanadasPlay(true);
          
              })

            }

          }

          }, (i-time) * (((60*30)/1440) * 1000))
        );

      }

    }

    useEffect(() => {

      if((defaultHour >= 480) && (defaultHour <= 1200)){

        setAnochecerOpacity(0);
        
        setLight(1);

      }else{

        setAnochecerOpacity(1);
        setLight(0.2);
        
      } 

      overlordTime(defaultHour);

    }, []);

    function personaHandler(){

      if(currentAnyText.current) return false;

      if(touchPersona.current) return false;

      setBackground('puebloSinSombra');

      touchPersona.current = true;

      inputText([{text:['— Selena: ','¡¿Que fué eso?!'], img: 'SelenaHabla'},
      {text:['','Selena encuentra una extraña carta al inspeccionar el lugar donde estaba la sombra.'], img:'moment'},{text:['— Selena: ','¿Que es esto?'], img:'SelenaDesconfia'}]);

      addItem('nota', `Tus órdenes son simples, asesinar al príncipe del reino de hielo, ese científico me debe suficiente como para que estés obligado a hacer este trabajo para mi. 
      Debes ser discreto, no quiero que mis planes sean arruinados porque un asesino de quinta como tú sea atrapado en el acto
      - Doncella del norte -`, 'Una carta "extraña"');

      postText.current.push(()=>{

        setModalChild(
          <>
          <div className="center" onClick={()=>setShowModal(false)}>
            <div className="text" style={{backgroundImage:`url(${ObjetImages.current['carta']})`}}></div>
    
            <p className="close">Click para cerrar</p>
          </div>
          </>)

        setShowModal(true);

      });

    }

    const touchTinto = useRef(false);
    const getPrenda = useRef(false);

    function yesInspection() {

      setShowModal(false);

      inputText([{text:['','— Selena inspecciona la prenda y encuentra una llave muy pequeña. '], img: 'moment'},
      {text:['— Selena: ','Que llave tan pequeña.'], img: 'SelenaHablaSeria'}]);

      addItem('smallKey', 'Una llave pequeña encontrada en la tintorería.', 'Una llave pequeña');

      getPrenda.current = true;

    }

    function tintoreriaHandler(){

      if(currentAnyText.current) return false;

      if(!touchTinto.current){

        touchTinto.current = true;

        inputText([{text:['— Selena: ','Parece ser una tintorería. '], img: 'SelenaHablaSeria'},
        {text:['', 'Selena entra y reconoce una prenda de Nicole.'], img: 'moment'}]);
  
        postText.current.push(()=>{
  
          setShowModal(true);
  
          setModalChild(<>
          
            <div className="check">
  
              <h5>¿Decides inspeccionarla? </h5>
  
              <p onClick={yesInspection}>Sí.</p>
              <p onClick={()=>setShowModal(false)}>No.</p>
  
            </div>
  
          </>)
  
        });
  
      }else if(!getPrenda.current){

        setShowModal(true);

        setModalChild(<>
        
          <div className="check">

            <h5>¿Deseas inspeccionar la prenda de Nicole? </h5>

            <p onClick={yesInspection}>Sí.</p>
            <p onClick={()=>setShowModal(false)}>No.</p>

          </div>

        </>);

      }

    }

    function casaHandler(){

      if(currentAnyText.current) return false;

      const numberX = Math.floor(Math.random() * Rumore.length);

      if(Rumore[1] === Rumore[numberX]) setActions(value=>{

        console.log(value);

        const copy = {...value};

        copy.cuadro = 1;

        return copy;

      });

      inputText([{text:['— Escuchado rumores: ',Rumore[numberX]], img: 'moment'}])

    }

    function herreriaHandler(){

      inputText([{text:['— Selena: ','¡La herrería! De ahí obtuve mi grandiosa armadura~ '], img: 'SelenaFeliz'}])

    }

    const [hours, setHour] = useState('')

    function hoursHandler({target}){

      const value = Number(target.value);

      if(/\D/.test(value)) return false;

      if( value >= 12) return setHour(12);

      setHour(Number(value))

    }

    const [minutes, setMinutes] = useState('')

    function minutesHandler({target}){

      const value = Number(target.value);

      if(/\D/.test(value)) return false;

      if(value >= 60) return setMinutes(60);

      setMinutes(Number(value))

    }

    const [showModal2, setShowModal2] = useState(false)

    function timerHandler(){

      if(currentAnyText.current) return false;

      setShowModal2(true);

    }

    const [horary, setHorary] = useState('1');

    const [showWait, setShowWait] = useState(false);
    const [waitAnimationName, setWaitAnimationName] = useState('');

    function prueba({target}){

      setHorary(target.value)

    }

    const campanadas = useRef(undefined);

    const [campanasPlay, setCampanadasPlay] = useState(false);

    useEffect(() => {

      salida.current.push(()=>{

        setShowModal(false);
        setShowModal2(false);

      });

    }, [])

    if(zone !== 'pueblo') return false;
    
    return (<div className="Pueblo">

      <ReactPlayer url="https://www.youtube.com/watch?v=Oc_b8hy6L7E" volume={globalVolumen} playing={campanasPlay} width="0" height="0" ref={campanadas} onPlay={()=>{

        setTimeout(()=>{

          setCampanadasPlay(false);

          inputText([{text:['— Selena: ', '5 veces...'], img:'SelenaDesconfia'}])

        }, 8000);

      }}/>

      <div className="modal" style={{display:showModal?'flex':'none'}}>

        {modalChild}

      </div>
      <div className="modal" style={{display:showModal2?'flex':'none'}}>

        <div className="timer">

          <p className="title">Cambia la hora</p>

          <div className="inputs">

            <label>H<input type="text" placeholder="00" value={hours} onChange={hoursHandler}/></label>
            <label>m<input type="text" placeholder="00" value={minutes} onChange={minutesHandler}/></label>

            <select name="select" defaultValue="1" onChange={prueba}>
              <option value="1" >AM.</option>
              <option value="2" >PM.</option>
            </select>

          </div>

          <div className="button" onClick={()=>{

            let HOURS = (hours + (horary === '1'?0:12)) * 60;

            if(hours === 12) HOURS = (horary === '1'?0:12)*60;

            overlordTime(minutes+HOURS)

            if(((minutes+HOURS) >= 480) && (((minutes + HOURS) <= 1200))){

              setLight(1);
              setAnochecerOpacity(0);
            
            } else {

              setLight(0.2);
              setAnochecerOpacity(1);
            
            }
            setAtardecer(0);
            setAmanecerOpacity(0);
            setAtardecerOpacity(0);

            setShowModal2(false);
            setShowWait(true);
            setWaitAnimationName('wait')

            if(executeAny.current.length === 0){

              executeAny.current.push(()=>{

                if(!campanadas.current) return false;

                campanadas.current.seekTo(8, 0);
          
                setCampanadasPlay(true);
          
              })

            }

          }}></div>

          <p className="close" onClick={()=>setShowModal2(false)}>Cerrar</p>

        </div>

      </div>
      <div className="wait" onAnimationEnd={()=>{

        setShowWait(false);
        setWaitAnimationName('')

      }} style={{display:showWait?'flex':'none', animationName:waitAnimationName}}>Esperando la hora...</div>
      <div className="reloj" style={{backgroundImage:`url(${Reloj})`}} onClick={timerHandler}></div>
    <div className="background" style={{filter:`brightness(${light})`}}>
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
              href={ObjetImages.current[background]}
        ></image>
        <image
              id="image860"
              width="508"
              height="285.75"
              x="0"
              y="0"
              fill="none"
              stroke="none"
              preserveAspectRatio="none"
              href={ObjetImages.current['puebloN']}
              style={{opacity: anochecerOpacity}}
        ></image>
        <image
              id="image860"
              width="508"
              height="285.75"
              x="0"
              y="0"
              fill="none"
              stroke="none"
              preserveAspectRatio="none"
              href={ObjetImages.current['puebloA']}
              style={{opacity: amanecerOpacity}}
        ></image>
        <image
              id="image860"
              width="508"
              height="285.75"
              x="0"
              y="0"
              fill="none"
              stroke="none"
              preserveAspectRatio="none"
              href={ObjetImages.current['puebloT']}
              style={{opacity: atardecerOpacity}}
        ></image>
              <g id="reloj" style={{userSelect:'none'}}>
          <circle
            id="path872"
            cx="173.208"
            cy="81.17"
            r="19.334"
            fill="#fff"
            fillOpacity="1"
            strokeWidth="1.176"
            opacity="1"
          ></circle>
          <path
            id="path874-9"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M173.34 61.836v5.633"
          ></path>
          <path
            id="path874"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M153.873 81.17h5.633"
          ></path>
          <path
            id="path874-5"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M186.91 81.038h5.632"
          ></path>
          <path
            id="path874-9-5"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M173.208 94.872v5.633"
          ></path>
          <circle
            id="path912"
            cx="173.208"
            cy="81.17"
            r="1.795"
            fill="#000"
            fillOpacity="1"
            strokeWidth="0.514"
            opacity="1"
          ></circle>
          <text
            xmlSpace="preserve"
            style={{ lineHeight: "1.25", InkscapeFontSpecification: "Roboto" }}
            id="text874"
            x="169.742"
            y="72.679"
            strokeWidth="0.153"
            fontFamily="Roboto"
            fontSize="6.102"
          >
            <tspan id="tspan872" x="169.742" y="72.679" strokeWidth="0.153">
              XII
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ lineHeight: "1.25", InkscapeFontSpecification: "Roboto" }}
            id="text874-8"
            x="170.483"
            y="93.261"
            strokeWidth="0.153"
            fontFamily="Roboto"
            fontSize="6.101"
          >
            <tspan id="tspan872-6" x="170.483" y="93.261" strokeWidth="0.153">
              VI
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ lineHeight: "1.25", InkscapeFontSpecification: "Roboto" }}
            id="text874-8-6"
            x="180.872"
            y="82.961"
            strokeWidth="0.153"
            fontFamily="Roboto"
            fontSize="6.101"
          >
            <tspan id="tspan872-6-1" x="180.872" y="82.961" strokeWidth="0.153">
              III
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            style={{ lineHeight: "1.25", InkscapeFontSpecification: "Roboto" }}
            id="text874-8-0"
            x="158.949"
            y="82.3"
            strokeWidth="0.153"
            fontFamily="Roboto"
            fontSize="6.101"
          >
            <tspan id="tspan872-6-4" x="158.949" y="82.3" strokeWidth="0.153">
              IX
            </tspan>
          </text>
          <path
            id="path927"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M186.879 94.842l-2.805-2.805"
          ></path>
          <path
            id="path927-1"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M186.879 67.499l-2.805 2.805"
          ></path>
          <path
            id="path927-1-7"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M162.34 92.037l-2.804 2.805"
          ></path>
          <path
            id="path927-5"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.265"
            d="M162.34 70.304l-2.804-2.805"
          ></path>
          <foreignObject className="manecilla1-container" width="50" height="50" x="153.87337" y="61.836163">
            <body style={{width:"38.668591px", height:"38.668468px"}}>
              <div className="manecilla1" style={{transform: `translateX(3px) rotate(${manecilla1}deg)`}} ></div>
              <div className="manecilla2" style={{transform: `translateX(4px) rotate(${manecilla2}deg)`}} ></div>
            </body>
          </foreignObject>
        </g>
      </svg>
      <div className="background-2" style={{opacity:`${atardecer}`}}></div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="1920"
      height="1080"
      version="1.1"
      viewBox="0 0 508 285.75"
      className="main-svg"
      style={{filter:`brightness(${light})`}}
    >

      <g id="layer1" strokeOpacity="1">
        <path
          id="persona"
          style={{display: showPersona?'block':'none'}}
          onClick={personaHandler}
          fill="red"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M40.491 208.47l.401 30.736 13.915-.23-3.591-35z"
          opacity="0"
        ></path>
        <path
          id="casa5"
          onClick={casaHandler}
          fill="#00c3ff"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M303.704 239.259l2.268-25.702-3.78-.945 10.949-18.096-18.13.898-5.103 3.874-10.962 16.725 1.323 4.064 2.835-1.985-1.7 19.844 5.48-3.307 4.441 3.024.19 1.228z"
          opacity="0"
        ></path>
        <path
          id="iglu"
          onClick={igluHandler}
          fill="#fe0"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M131.764 209.005l.534 30.736 46.505-.802 10.157-5.613s1.336-12.829 1.336-16.838-1.336-20.58-2.406-21.114c-1.069-.535-4.81-2.138-4.81-2.138l2.672-5.613 1.337-.802 1.069 5.079 9.621.801 5.613-1.336 1.07-5.613s-1.337-12.027-1.337-13.096c0-1.069 2.673-5.88-1.336-5.88-4.01 0-12.028 1.871-12.028 1.871l-5.345-19.51-9.354-2.406.801-18.442-14.967-.267s.802 6.147.802 7.216c0 1.07-.267 4.811-.267 4.811l4.276 4.811s-1.069 1.604-2.405 2.138c-1.337.535-4.544.802-8.82 2.138-4.277 1.337-9.89-2.672-9.89-2.672l2.94 5.345s4.01 4.544 1.872 4.544-10.958-4.811-10.958-4.811l5.88 5.078 8.285 3.474 9.354 7.751 4.277 6.147s-6.682 1.604-7.751 1.337c-1.07-.267-2.673-1.07-2.673-1.07l1.871 4.01s-2.138-.535-5.345-.802c-3.208-.267-10.424-5.345-10.424-5.345l8.018 9.354-.802 2.673 11.76 7.483s8.018 5.346 7.751 6.415c-.267 1.069-9.889 1.87-9.889 1.87s3.475 4.811 0 4.811c-3.474 0-10.156-5.345-11.76-5.345-1.603 0-2.672-1.069-2.672-1.069s7.216 5.613 7.216 6.949c0 1.336-6.682 2.673-6.682 2.673l-3.207-3.742s1.336 4.009-.267 4.009h-4.01c-1.069 0-1.336-.535-2.138.535-.801 1.069-3.474.267-3.474.267z"
          opacity="0"
        ></path>
        <path
          id="casa1"
          onClick={tintoreriaHandler}
          fill="#ff0300"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M188.96 233.326l-5.079 2.807 22.451-.401 16.838.534-.534-23.52 2.138-2.94-4.544-15.234 5.88.535 1.87 17.907 5.079 2.405 6.415-1.603 2.138-2.94-.802-18.976-17.64-1.07-2.405.268s-.802-10.424-1.871-10.424c-1.07 0-15.012-.234-15.012-.234l.58 5.312-1.07 5.613-5.613 1.336-9.621-.801-1.737-4.678-3.341 6.014 4.81 2.138 2.406 21.114z"
          opacity="0"
        ></path>
        <path
          id="casa2"
          onClick={casaHandler}
          fill="#00c3ff"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M241.612 210.876l.668 8.419-1.871.801.267 15.903-17.506.267-.534-23.52 2.138-2.94-4.544-15.234 5.88.535 1.87 17.907 5.079 2.405 6.415-1.603z"
          opacity="0"
        ></path>
        <path
          id="casa4"
          fill="#fa0"
          onClick={casaHandler}
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M376.316 238.939c-.048-2.585-48.044.509-48.044.509l1.134-34.018-5.102-.945 1.511-4.725 16.82-25.89 10.183-.33-5.368 7.401 2.406 4.01 9.087-5.079.267 6.682 5.88-1.336-17.64 20.312.535 4.811 8.82-3.474 1.603 5.078 6.682-.268 1.337 8.286 6.949-1.604 2.405-8.285z"
          opacity="0"
        ></path>
        <path
          id="casa3"
          onClick={casaHandler}
          fill="#ff0017"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M328.272 239.448l-24.568-.19 2.268-25.701-3.78-.945 13.607-22.49 18.426-3.307-8.41 12.945-1.511 4.725 5.102.945z"
          opacity="0"
        ></path>
        <g
          id="nube4"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.3367 -.03503 .03983 .29615 236.323 109.819)"
        >
          <path
            id="path924"
            fill="#fff"
            className="nube5-prueba"
            d="M193.146-282.726c-11.994-2.71-18.324 1.346-53.295 14.363-34.97 13.017-18.899 35.53-21.922 41.577-3.024 6.048 5.266 31.587 21.922 43.846 16.656 12.258 52.498-15.41 75.595-14.364 23.098 1.047 31.194-15.914 52.917-18.898 21.723-2.985 57.704 18.846 74.083 5.291 16.38-13.555 40.448-24.468 34.774-41.577-5.674-17.109-71.06-2.268-74.839-2.268-3.78 0 18.083-22.132-50.649-22.679-68.732-.546-48.734 3.808-37.797-3.023 10.936-6.831-8.796.441-20.79-2.268z"
          ></path>
          <path
            id="path926"
            fill="#d2d2d2"
            className="nube5-prueba"
            d="M374.196-229.054c-8.345-9.827-30.826-3.158-46.113-3.023-15.287.135-41.2 3.78-45.357 3.78-4.158 0-80.385-7.092-107.345 0-26.96 7.091-42.333 26.458-52.16 29.482-9.828 3.023-10.088 10.384 4.535 22.678s57.42 5.505 91.47 2.268c34.051-3.237 85.515-21.435 111.125-24.19 25.61-2.756 31.939 8.058 40.822 0 8.883-8.06 11.369-21.168 3.023-30.995z"
          ></path>
        </g>
        <g
          id="nube3"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.33288 0 0 .1952 128.366 134.246)"
        >
          <path
            id="path932"
            fill="#fff"
            className="nube4-prueba"
            d="M300.411-359.21c-13.665.625-31.065 8.321-39.556 18.174-8.491 9.853-7.483 25.658-9.622 33.142-2.138 7.483-4.276 33.14-14.967 51.315-10.69 18.175-22.183 14.25-20.312 26.727 1.871 12.477 27.796 24.589 34.21 24.589 6.415 0 35.714 3.418 42.763 9.622 7.05 6.204-12.62-2.246 4.277 11.76 16.896 14.005 85.526 9.621 86.595 2.138 1.07-7.484 27.067-7.414 35.28-12.83 8.212-5.415 9.621-6.414 27.796 7.484 18.174 13.898 38.486 8.553 47.04-1.069 8.552-9.621 12.828-8.552 18.173-21.381 5.346-12.83 40.978-38.261 45.97-51.316 4.993-13.055 0-11.76 0-14.967 0-3.207 29.935-4.276-1.068-31.003-31.004-26.727-72.698-53.454-80.181-56.662-7.484-3.207-19.97 14.499-34.21 18.175-14.241 3.676-25.659-16.036-40.626-12.83-14.967 3.208-47.801 13.164-65.213 11.76-17.413-1.403-22.684-13.453-36.349-12.828z"
          ></path>
          <path
            id="path934"
            fill="#d3d3d3"
            className="nube4-prueba"
            d="M570.888-276.891c-1.604 2.138-85.476 10.907-109.046 16.036-23.57 5.13-4.277 9.622-33.142 9.622-28.865 0-24.588 8.552-37.417 0-12.83-8.553-24.59-12.83-33.142-28.865-8.552-16.037-6.414-23.52-19.243-23.52-12.83 0-13.898 6.414-20.313 11.76-6.414 5.345-8.335 8.525-11.76 18.174-3.424 9.65 1.07 34.21-4.276 39.556-5.345 5.345-33.141 11.76-49.177 12.829-16.037 1.069-14.968 2.138-17.106 6.414-2.138 4.277-5.345 18.175 6.415 27.796 11.76 9.622-2.138 6.415 38.487 7.484s120.805 20.312 125.082 21.381c4.276 1.07 91.94 0 94.079-5.345 2.138-5.345 20.312 4.276 27.796-12.829 7.483-17.105 31.003-19.243 31.003-33.141s20.606-36.966 20.312-49.178c-.294-12.212-6.949-20.312-8.552-18.174z"
          ></path>
        </g>
        <g
          id="nube2"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.7942 -.08637 .0982 .69853 -68.103 221.414)"
        >
          <path
          className="nube2-prueba"
            id="path940"
            fill="#fff"
            d="M293.73-223.437c.305-2.362-1.616-6.248.534-8.82 2.15-2.573 8.889-.039 10.958-2.673 2.069-2.634 2.94-8.82 0-8.82s-5.91-2.184-9.355-4.276c-3.445-2.092-8.82-8.018-10.958-8.553-2.138-.534-12.554.203-15.234 3.207-2.68 3.005 2.846 5.758-.802 8.553-3.648 2.795-13.096-3.207-18.709-3.207-5.612 0-34.351 2.747-46.772 4.81-12.42 2.064-23.078 1.982-27.796 6.415s-6.27 4.502-2.94 9.89c3.33 5.387 18.289 4.3 27.262 4.81 8.972.51 15.198-1.786 26.192-1.604 10.994.183 28.461 2.833 39.556 3.742 11.095.91 22.688 5.16 26.994 1.871 4.307-3.288.763-2.984 1.07-5.345z"
          ></path>
          <path
          className="nube2-prueba"
            id="path942"
            fill="#d3d3d3"
            d="M304.687-233.059c.194-3.382-2.762-6.84-5.345-7.216-2.583-.377-2.406 2.672-5.346 4.009-2.94 1.336-8.74 2.314-11.76 4.009-3.018 1.695-3.213 4.956-6.414 5.345-3.2.39-5.345-4.009-9.889-4.81-4.543-.802-7.072 3.515-9.889 4.276-2.816.76-2.405.801-6.682.801-4.276 0-16.036-4.009-17.64-4.009-1.603 0-5.88 2.94-11.492 2.94-5.613 0-34.886-5.31-40.358.802-5.471 6.113-2.026 6.092.802 8.82 2.829 2.728 11.45.533 14.7.802s3.742 0 4.81.534c1.07.535 13.782-1.902 17.64-1.603 3.86.298 2.614.53 5.346 1.336s5.17 2.882 10.958 3.742c5.789.86 17.46-.699 23.52-.802 6.06-.103 10.423.267 12.829 0 2.405-.267 24.076 2.365 27.796-2.405 3.72-4.77-2.296-5.14-1.337-8.286.96-3.146 7.557-4.903 7.751-8.285z"
          ></path>
        </g>
        <g
          id="nube5"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.83655 0 0 .73578 71.625 194.045)"
        >
          <path
            id="path944"
            fill="#fff"
            className="nube3-prueba"
            d="M483.49-163.569c1.363-2.983 6.28-6.019 3.742-10.156-2.538-4.137-16.036-2.673-18.174-2.138-2.138.534-19.187 1.884-24.322 1.069-5.134-.815-6.19.124-6.414-2.406-.223-2.53 5.167-2.685 7.216-4.276 2.05-1.591 5.848-1.917 5.078-5.078-.769-3.162 3.475-2.94-11.76-3.742-15.234-.802-30.2-3.207-31.805-2.138-1.603 1.069-2.94 7.483-4.543 7.483-1.604 0-23.253 0-25.658.802-2.405.802-10.423 5.078-10.958 6.147-.535 1.07-4.09-.373-2.94 4.277s19.778 10.423 20.847 10.958c1.07.534 18.453 4.182 24.054 5.613 5.602 1.43 8.286 1.069 9.622 2.672 1.336 1.604 12.027 7.484 13.63 7.484 1.604 0 17.106 1.87 18.175 1.87 1.07 0 17.907-4.543 18.976-4.81 1.07-.267 8.435-3.386 10.958-5.88 2.524-2.494 2.914-4.768 4.277-7.751z"
          ></path>
          <path
            className="nube3-prueba"
            id="path946"
            fill="#d3d3d3"
            d="M401.172-175.863c8.453.8 9.96-.207 12.027 1.87 2.066 2.078.012 3.712.802 5.346.789 1.634-.803 1.738 3.741 4.009 4.545 2.271 22.18-1.815 24.856 2.673 2.676 4.488-4.237 3.151-2.405 5.88 1.832 2.728 10.283.549 13.363 0 3.081-.55-.688-.2 5.079-1.871 5.767-1.671 24.453-8.904 29.934-6.415 5.48 2.49 2.748 3.352 2.672 4.811-.075 1.46-1.71 1.478-1.87 2.673-.161 1.195 1.695 2.272 1.336 3.742-.36 1.47-2.584 1.959-3.742 3.474-1.158 1.515 7.821-1.296-2.94 5.613-10.76 6.908-59.703 9.37-70.292 3.741-10.588-5.628.535-1.336-.802-1.336-1.336 0-8.417-4.165-8.82-6.682-.402-2.516 2.878-1.51 2.406-3.474-.472-1.964-3.22-2.767-6.949-3.742-3.73-.975-12.19 1.57-15.234-.267-3.046-1.837-1.322-3.893-2.94-5.346-1.62-1.452-5.678-1.007-6.415-2.672-.736-1.665 2.918-1.2 1.337-3.742-1.582-2.542-11.128.45-13.898-1.604-2.771-2.053-3.124-4.548-2.673-6.147.45-1.598-4.045.12 2.673-1.87 6.717-1.992 30.3.535 38.754 1.336z"
          ></path>
        </g>
        <g
          id="nubeAlfa"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.172"
          transform="matrix(.8329 0 0 .8329 84.908 -9.835)"
        >
          <path
            id="path873"
            fill="#fff"
            className="nubeAlfa"
            d="M371.15 90.928c-4.632-.994-11.115-.994-15 .492s.246-.984-7.623 6.393c-7.87 7.378-7.623 9.837-9.59 11.558-1.968 1.721-4.427 1.967-8.361 3.689-3.935 1.72-4.426 3.688-4.426 4.918s-.246 1.967 1.72 5.164c1.968 3.196 5.41 6.147 10.575 6.393 5.164.246 22.131-4.672 25.082-4.18 2.95.492 9.098 7.869 13.279 9.59 4.18 1.721 11.066 2.95 13.279 2.95 2.213 0 4.672 1.476 9.836 0 5.164-1.475 8.852-.491 12.787-2.95 3.934-2.459 6.147-1.967 7.869-3.934 1.721-1.968 0-6.394 3.442-3.197 3.443 3.197 2.557 6.4 5.164 5.901 2.608-.498 2.705-6.393 2.705-7.623 0-1.23.738-5.164 1.476-6.393.737-1.23 1.721-1.475 1.721-3.689 0-2.213 4.18-5.655-3.934-6.147-8.115-.492-13.033.246-17.951.983-4.918.738-11.312-2.213-12.787-4.672-1.476-2.459-1.346-3.42-2.46-4.672-1.113-1.253 3.69-1.23-3.934-2.705-7.623-1.475-9.098-1.475-10.82-1.967-1.721-.492-7.417-4.908-12.049-5.902z"
          ></path>
          <path
          className="nubeAlfa"
            id="path875"
            fill="#d3d3d3"
            d="M320.74 126.092c4.795.861 14.754 3.689 17.213-.491 2.459-4.18 1.23-6.148 6.64-6.148s12.786-3.197 16.23-3.689c3.442-.491 10.081-1.229 12.54-1.229 2.46 0 10.82-3.197 17.213 0 6.394 3.197 23.361 5.41 26.312 5.41 2.951 0 5.656-.984 7.377 0 1.722.983 2.46-.246 6.394 3.443 3.934 3.688 6.147 6.393 6.885 7.623.738 1.23 1.721 3.934 1.721 5.41 0 1.475 1.23 3.442-4.672 3.688-5.901.246-9.59.492-17.213-1.475-7.623-1.968-6.393 1.23-11.803-4.427-5.41-5.655-3.689-6.393-6.394-5.901-2.705.491.492 1.23-6.885 2.95-7.377 1.722-10.082 1.476-15.246 2.46-5.164.983-16.476.737-18.689.983-2.213.246-.984 1.23-7.131 2.213-6.148.984-7.623.492-11.558.984-3.934.492-1.475.738-8.36.492-6.886-.246-14.753-1.134-17.214-4.427-2.46-3.292-1.233-5.221.246-6.885 1.48-1.664 1.599-1.844 6.394-.984z"
          ></path>
        </g>
        <g
          id="nubeBeta"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          transform="translate(-78.958 1.02) scale(.4489)"
        >
          <path
            id="path881"
            fill="#fff"
            className="nubeBeta"
            d="M464.533 162.908c-9.072-8.316-50.649-13.23-57.83-9.072-7.182 4.158-12.76 3.685-26.367 1.04-13.607-2.647-17.01-7.938-33.262.755-16.253 8.694-18.521 10.962-25.325 18.143-6.803 7.182-11.717 11.717-16.63 21.545-4.914 9.827-1.982 18.994-1.226 23.53.756 4.535 11.34 7.937 18.143 4.535 6.803-3.402 18.677 13.87 28.348 14.363 9.671.493 14.741-8.693 24.568-9.45 9.828-.755 19.277-1.133 30.238-6.803 10.962-5.67 36.664-3.024 41.956 6.048 5.292 9.071 4.914 18.898 15.497 9.827 4.965-4.942 16.962-5.853 16.63-12.851V209.02c0-4.158.379-17.765 1.135-19.277.756-1.512-7.938-8.693-11.34-8.315-3.401.378 4.536-10.206-4.535-18.521z"
          ></path>
          <path
            id="path883"
            className="nubeBeta"
            fill="#e9e9e9"
            d="M300.87 238.881c2.864-5.532 15.874-2.268 27.591-14.741 11.718-12.473 28.727-28.726 29.104-30.238.378-1.512-6.803-4.158 5.292-3.024 12.095 1.134 63.5 20.789 75.595 10.583 12.096-10.205 9.072-10.583 13.23-10.583 4.157 0 9.071-1.512 12.095 3.78 3.024 5.291 9.45 20.788 11.717 24.946 2.268 4.158 1.89 2.646 6.804 10.961 4.913 8.316 5.67 11.718 6.803 16.253 1.134 4.536-27.592 11.34-47.247 4.914-19.655-6.425-55.184-26.08-62.366-21.167-7.181 4.914.378 7.56-19.655 17.01-20.032 9.449-20.788 16.63-35.53 10.205-14.74-6.426-19.697-8.397-22.678-12.851-2.981-4.455-3.621-.516-.756-6.048z"
          ></path>
        </g>
        <g id="nube1" transform="matrix(.8448 0 0 .74304 50.37 155.213)">
          <g
            id="g958"
            className="nube1-prueba"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            transform="translate(-.802 1.07)"
          >
            <path
              id="path954"
              fill="#fff"
              d="M103.376-110.558c-1.432-1.67-.755-2.646-5.48-2.646-4.725 0-10.266 1.538-15.686 2.079-5.42.541-16.064 1.134-16.82 1.134-.756 0 .504-1.028-5.859-1.323-6.362-.295-27.062.61-31.939 4.158-4.876 3.547.685 2.057-1.7 3.59-2.386 1.534-8.95-.61-13.04.19-4.092.8-8.803 2.91-11.151 4.346-2.348 1.437-.64 1.526-3.402 3.024-2.762 1.499-11.689 1.2-13.796 3.78-2.107 2.58-.378 4.913-.378 5.67 0 .755-.76 2.622 2.268 4.157C-10.58-80.864-.19-84.478 1.89-84.478c2.079 0 27.403-5.48 31.56-5.48 4.159 0 22.301-1.134 25.325-1.701 3.024-.567 21.14-2.71 28.915-4.914 7.776-2.204 15.88-3.229 17.765-7.181 1.886-3.953-.646-5.134-2.079-6.804z"
            ></path>
            <path
              id="path952"
              fill="#d3d3d3"
              d="M108.48-103.565c1.414-3.904-.373-6.895-4.537-8.316-4.163-1.42-12.095 6.804-15.497 6.804-3.401 0-16.117.738-18.52 4.157-2.404 3.42 2.83 3.492.756 6.048s-12.096 1.512-13.608 1.134c-1.511-.378-2.583-.138-4.157-1.512-1.575-1.374 1.512-9.071-3.78-7.182-5.292 1.89-10.376 3.183-13.607 5.292-3.232 2.109-4.536 5.67-6.048 6.048-1.512.378-36.997-.386-40.443 7.181-3.446 7.568 2.268 7.56 4.535 7.56 2.268 0 13.663-1.952 20.411-3.402 6.748-1.45 14.547-4.58 20.033-5.292 5.486-.712 7.243.105 12.473 0 5.23-.104 11.04.244 18.899-.756 7.858-.999 24.064-1.78 27.97-6.047 3.906-4.268-1.443-3.211.756-6.048 2.2-2.836 12.948-1.766 14.363-5.67z"
            ></path>
          </g>
          <path
          
            id="path962"
            fill="#fff"
            className="nube1-prueba"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            d="M152.745-127.621l4.276-1.203 4.41-2.004s-.535-3.341-1.871-3.341h-5.613c-2.004 0-10.022 1.47-11.359 1.87-1.336.401-2.138-.133-2.271-1.47-.134-1.336-.268-4.677-3.876-4.677-3.608 0-13.764 5.747-15.502 5.88-1.737.134-7.75 2.54-8.018 3.876-.267 1.336.936 7.617.936 7.617s5.88 3.207 7.617 3.34c1.737.134 15.1-.4 15.1-.4l11.894-.535s10.557-3.207 11.092-3.073c.534.133 3.074-4.01 2.539-4.41-.535-.401-6.548-1.337-6.548-1.337z"
          ></path>
          <path
            id="path960"
            className="nube1-prueba"
            fill="#d3d3d3"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            d="M157.823-118.133c2.485-2.365 2.055-2.346 1.069-3.876-.987-1.529-4.528-.449-6.816-1.069-2.287-.62-4.824-1.551-6.815-2.672-1.99-1.121-4.41-3.876-5.078-3.876-.668 0-18.977 3.904-21.916 7.35-2.94 3.447-2.18 2.299-.668 4.01 1.51 1.71 7.026-1.097 9.621-.402 2.595.695 3.407 3.214 5.48 3.475 2.071.26 4.083-2.17 5.746-1.871 1.662.298 2.539 3.074 3.207 2.539.668-.535 13.684-1.243 16.17-3.608z"
          ></path>
          <circle
            className="nube1-prueba"
            id="path964"
            cx="170.384"
            cy="-132.031"
            r="1.871"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeWidth="1"
          ></circle>
          <path
            className="nube1-prueba"
            id="path966"
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="5.292"
            d="M187.222-139.782c-1.202.535-11.76 5.212-11.76 5.212"
            filter="url(#filter968)"
          ></path>
        </g>
          <path
          id="herreria"
          onClick={herreriaHandler}
          fill="#ffa800"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.265"
          d="M203.882 180.44l.58 5.312-1.07 5.613-5.613 1.336-9.621-.801-1.738-4.678.669-15.1-7.35-.802-1.737.668-.268-5.613 1.737.535.134.935 23.653.268.401 2.539z"
          opacity="0"
        ></path>
      </g>
    </svg>

    </div>)

}

export default Pueblo;