
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import './sala.css';

const llaveData = ['otraLlave', 'Una llave misteriosa encontrada en la sala del castillo.', 'Una llave encontrada en la sala del castillo']

function Sala({ObjetImages, zone, setZonesArrow, inputText, currentAnyText, addItem, inventario, setInventario, postText, actions, superTime, salida, setStop}) {

    useEffect(() => {
        if(zone === 'sala') setZonesArrow(()=>['cuarto', 'trono'])
    },[zone])

    const [showFoto, setShowFoto] = useState(false);

    const touchFoto = useRef(false);

    function cuadernoBloqueadoHandler() {

      if(currentAnyText.current) return false;

      if(touchFoto.current){

        setShowFoto(true);

        return false;

      }

      if(Object.keys(inventario).includes('Una llave pequeña')){

        inputText([{text:['','— Selena abre el candado del pequeño diario con la pequeña llave.'], img: 'moment'},
        {text:['','Se encuentra escrituras sin sentido y repentinamente ve una fotografía que llama su atención.'], img: 'moment'}]);

        postText.current.push(()=>{

          setShowFoto(true);

        })
        
      }else{

        inputText([{text:['— Selena: ','Parece ser un mini diario... Tiene un candado especial y ahora... ¿Donde estará la llave?'], img: 'SelenaHablaSeria'},])

      }
      
    }

    function ventana(){

      inputText([{text:['— Selena: ','Una ventana... Se ve una linda vista del reino de hielo.'], img: 'SelenaFeliz'},])

    }

    function silla(){

      inputText([{text:['— Selena: ','No sé porque pero... Se ve muy incómoda.'], img: 'SelenaHablaSeria'},])

    }

    function nota(){

      inputText([{text:['— Selena: ','En esta notita dice las horas que Nicolás no está en el castillo... Curioso.'], img: 'SelenaDesconfia'},])

    }

    function lapices(){

      inputText([{text:['— Selena: ','Dice que es marca mongol.'], img: 'SelenaHablaSeria'}])

    }

    const openChest = useRef(false);

    const OpenLibreria = useRef(false);

    const [showChest, setShowChest] = useState(false);

    const viewChest = useRef(false);

    const [inputChest, setInputChest] = useState('');

    function chestHandler({target}){

      const value = target.value;

      setInputChest(value);

      if(openChest.current){

        setInputChest('DESBLOQUEADO');

        return false;

      }else setInputChest(value);

      if(value === '5'){

        openChest.current = true;

        setInputChest('DESBLOQUEADO');

      }

    }

    const [showCheckChest, setShowCheckChest] = useState(false);

    function libreria(){

      if(currentAnyText.current) return false;

      if(!OpenLibreria.current && Object.keys(inventario).includes('Llave misteriosa del cuarto de Nicolas')){

        OpenLibreria.current = true;

        inputText([{text:['','— Selena abre los gabetines con la llave.'], img: 'moment'},
        {text:['','Se puede ver un pequeño cofre con una pequeña pantalla.'], img: 'moment'},
        {text:['— Selena: ','Huh... Parece algo traído del Reino de Electricidad.'], img: 'SelenaHablaSeria'}]);

        postText.current.push(()=>{

          setShowCheckChest(true)

        });

        setInventario(value=>{

          const copy = {...value};

          delete copy['Llave misteriosa del cuarto de Nicolas'];

          return copy;

        });

      }else if(!OpenLibreria.current){

        inputText([{text:['— Selena: ','Está cerrado... Parece que necesita una llave.'], img: 'SelenaHablaSeria'}]);

      }else if(!openChest.current){

        setShowCheckChest(true);

      }
      
    }

    const [showCaja, setShowCaja] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const touchCajaFuerte = useRef(false);
    
    function marco(){

      if(currentAnyText.current) return false;
      
      if('cuadro' in actions){

        if(!touchCajaFuerte.current){

          touchCajaFuerte.current = true;

          inputText([{text:['— Selena: ','Escuché algo sobre la pintura en el pueblo, voy a revisar. '], img: 'SelenaHablaSeria'}, {text:['','— Selena se encuentra una caja fuerte bastante moderna '], img:'moment'}]);
  
          postText.current.push(()=>{
  
            setShowModal(true);
  
          });

        }else if(block.current || blockCerradura.current){

          setShowModal(true);

        }else setShowCorona(true);

        return false;

      }
      
      inputText([{text:['— Selena: ','Nicole ni siquiera se esforzó por sonreír en la foto. Que horror.'], img: 'SelenaHablaSeria'},])
      
    }

    const countPapelera = useRef(0);

    function papelera(){

      if(currentAnyText.current) return false;

      switch (countPapelera.current) {
        case 0 : 
        inputText([{text:['— Selena: ','No voy a revisar la basura...'], img: 'SelenaHablaSeria'},])
          break;
        case 1 : 
        inputText([{text:['— Selena: ','No, no lo haré...'], img: 'SelenaHabla'},])
          break;
        case 2 : 
        inputText([{text:['— Selena: ','¿Por que quiero hacerlo?'], img: 'SelenaAvergonzada'},])
          break;
        case 3 : 
        inputText([{text:['— Selena: ','Bien... Lo haré, espero nadie me vea.'], img: 'SelenaHablaSeria'},{text:['','— Selena revisa la papelera encontrándose con muchas hojas y facturas con nombres extraños, parecen venir de otros reinos.'], img: 'moment'},
        {text:['— Selena: ','Parecen pagos por la contratación de personas de... ¿¡Un gremio de asesinos!?'], img: 'SelenaHabla'},
        {text:['— Selena: ','Hay una factura del día que secuestraron a Nicolás... Me quedaré con esto.'], img: 'SelenaDesconfia'}])
        addItem('nota', "Muestra un pago a varias personas de un gremio de asesinos para secuestrar a Nicolás", '"Factura misteriosa"')
          break;
      
        default:
          break;
      }

      countPapelera.current +=1

    }

    const [viewMarkBook, setViewMarkBook] = useState(false);

    function libroEspecialHandler(){

      if(currentAnyText.current) return false;

      if(viewMarkBook) return false; 

      inputText([{text:['','Un libro muy interesante, trata sobre un rey antiguo y su subida al trono.'], img: 'moment'}]);

      postText.current.push(()=>{

        setShowCheck(true)

      });

    }

    function yesShowMoreBook(){

      setViewMarkBook(true)

      setShowCheck(false);

      inputText([{text:['— Selena: ','Es un separador muy elegante ¿Será de Nicole o Nicolás?'], img: 'SelenaHablaSeria'}, {text:['','Dentro puedes encontrar páginas hablando sobre dominar el reino y el regicidio para conseguirlo.'], img: 'moment'}, {text:['— Selena: ','Esperemos que nadie se haya inspirado de esto para gobernar.'], img: 'SelenaDesconfia'}, {text:['— Selena: ','Tengo un mal presentimiento.'], img: 'SelenaDesconfia'},{text:['','— Separador añadido al inventario.'], img: 'moment'}]);

      addItem('separador','Un separador de libros que marcaba una sección de páginas hablando sobre dominar el reino y el regicidio para conseguirlo.', 'Un separador elegante');

    }

    const [showCheck, setShowCheck] = useState(false);

    const [amanecerOpacity, setAmanecerOpacity] = useState(0);

    const [atardecerOpacity, setAtardecerOpacity] = useState(0);

    const [anochecerOpacity, setAnochecerOpacity] = useState(0);

    useEffect(() => {

      if((superTime >= 360) && (superTime <= 480)){

        setAnochecerOpacity(1-((superTime-1200)*(1/120)));
        setAmanecerOpacity((superTime-360)*(1/120));

      }

      if((superTime >= 480) && (superTime <= 540)){

        if(anochecerOpacity !== 0) setAnochecerOpacity(0)

        setAmanecerOpacity(1-((superTime-480)*(1/60)))

      }
      
      if(superTime <= 360 && superTime >= 540){

        if(amanecerOpacity !== 0) setAmanecerOpacity(0)
        
      }

      if((superTime >= 540) && (superTime <= 1200)) setAnochecerOpacity(0);

      if((superTime >= 1080) && (superTime <= 1140)){

        setAtardecerOpacity((superTime-1080) * (1/60))

      }

      if((superTime >= 1140) && (superTime <= 1200)){

        setAtardecerOpacity(1-((superTime-1140) * (1/60)));
        
        setAnochecerOpacity((superTime-1140) * (1/60));

      }

      if((superTime <= 1080) && (superTime >= 1200)) setAtardecerOpacity(0);

      if((superTime >= 1200) || (superTime <= 360)) setAnochecerOpacity(1);

    }, [superTime])

    useEffect(() => {

      salida.current.push(()=>{

        setShowCheck(false);

        setShowCheckChest(false);

        setShowModal(false);

      });

    }, []);

    const [password, setPassword] = useState('');

    function passwordHandler({target}){

      const value = target.value;

      if(value === '6967') {
        
        setPassword('DESBLOQUEADO')
      
        return false;

      }

      setPassword(value);

    }

    const block = useRef(true)

    useLayoutEffect(() => {

      if(!block.current){

        setPassword('DESBLOQUEADO')

      }else if(password === '6967'){
        
        setPassword('DESBLOQUEADO');
      
        block.current = false

      }

    }, [password])

    const touchCloseCaja = useRef(false);

    function closeCaja(){

      setShowCaja(false);

      if(touchCloseCaja.current) return false;

      touchCloseCaja.current = true;

      inputText([{text:['— Selena: ','Una caja fuerte que solo pide 4 mineros y una llave.'], img: 'SelenaDesconfia'}]);

    }

    const [showCorona, setShowCorona] = useState(false);

    const getUltimaLlave = useRef(false)

    const blockCerradura = useRef(true);

    function cerraduraHandler(){

      if(getUltimaLlave.current) return false;

      if(block.current) return false;

      if(!Object.keys(inventario).includes('Una llave encontrada en la sala del castillo')) return false;

      getUltimaLlave.current = true;

      blockCerradura.current = true;

      setInventario(value=>{

        const copy = {...value};

        delete copy['Una llave encontrada en la sala del castillo'];

        return copy;

      });

      setShowCaja(false);

      setShowCorona(true);

    }

    const touchCorona = useRef(false);

    function closeCorona(){

      setShowCorona(false);

      if(touchCorona.current) return false;

      setStop(true)

      touchCorona.current = true;

      inputText([{text:['— Selena: ','¿Una corona tan pequeña y delicada? Es tan similar a la de... Ella.'], img:'SelenaDesconfia'}, {text:['','— Selena también encontró una llave.'], img:'moment'}]);

      addItem('ultimaLlave', 'Una llave encontrada en la caja fuerte de la sala.', 'Llave encontrada en la caja fuerte')

    }

    if(zone !== 'sala') return false;

    return (<div className="Sala">

      <div className="modal" onClick={closeCorona} style={{display:showCorona?'flex':'none'}}>

        <div className="close">Cerrar</div>

        <div className="container-foto">
          <div className="foto" style={{backgroundImage:`url(${ObjetImages.current['corona']})`}}></div>
        </div>

      </div>

      <div className="modal" style={{display: showModal?'flex':'none'}}>

        <div className="container">

          <h5>¿Quiere inspeccionar la caja?</h5>
          <p onClick={()=>{

            setShowCaja(true);
            setShowModal(false);

          }}>Sí.</p> <p onClick={()=>setShowModal(false)}>No.</p>
        </div>

      </div>

      <div className="caja-fuerte-container" style={{display: showCaja?'flex':'none'}}>

      <div className="close" onClick={closeCaja}>

        Cerrar

      </div>
      <div className="container">
      <input type="text" placeholder="Contraseña de 4 dígitos" value={password} onChange={passwordHandler}/>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="700"
      height="400"
      version="1.1"
      viewBox="0 0 185.208 105.833"
      className="caja"
    >
      <g id="layer1" fillOpacity="1">
        <path
          id="rect833"
          fill="#9c9c9c"
          strokeDasharray="110.506, 110.506"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.604"
          d="M0 0H185.208V105.833H0z"
        ></path>
        <g id="g1283" transform="matrix(1.91496 0 0 1.91496 -19.198 1.182)">
          <g id="uno" onClick={()=>setPassword(v=>v+'1')} transform="matrix(.53763 0 0 .53763 49.634 -16.583)">
            <path
              id="rect837"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M57.452 67.629H69.169V81.07600000000001H57.452z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text949"
              x="60.988"
              y="78.133"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan947"
                x="60.988"
                y="78.133"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                1
              </tspan>
            </text>
          </g>
          <g id="dos" onClick={()=>setPassword(v=>v+'2')} transform="matrix(.53763 0 0 .53763 49.634 -16.583)">
            <path
              id="rect837-4"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M69.17 67.629H80.887V81.07600000000001H69.17z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text955"
              x="72.01"
              y="78.166"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan953"
                x="72.01"
                y="78.166"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                2
              </tspan>
            </text>
          </g>
          <g id="tres" onClick={()=>setPassword(v=>v+'3')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-4-3"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M143.442 9.043H155.15900000000002V22.49H143.442z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text955-3"
              x="146.43"
              y="19.528"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan953-2"
                x="146.43"
                y="19.528"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                3
              </tspan>
            </text>
          </g>
          <g id="cuatro" onClick={()=>setPassword(v=>v+'4')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-4-7"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M120.007 22.49H131.72400000000002V35.937H120.007z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text977"
              x="122.877"
              y="32.975"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan975"
                x="122.877"
                y="32.975"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                4
              </tspan>
            </text>
          </g>
          <g id="cinco" onClick={()=>setPassword(v=>v+'5')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M131.725 22.49H143.442V35.937H131.725z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text981"
              x="134.423"
              y="32.923"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan979"
                x="134.423"
                y="32.923"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                5
              </tspan>
            </text>
          </g>
          <g id="seis" onClick={()=>setPassword(v=>v+'6')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5-3"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M143.442 22.49H155.15900000000002V35.937H143.442z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text985"
              x="146.241"
              y="32.926"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan983"
                x="146.241"
                y="32.926"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                6
              </tspan>
            </text>
          </g>
          <g id="siete" onClick={()=>setPassword(v=>v+'7')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5-9"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M120.007 35.936H131.72400000000002V49.382999999999996H120.007z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text989"
              x="122.926"
              y="46.422"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan987"
                x="122.926"
                y="46.422"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                7
              </tspan>
            </text>
          </g>
          <g id="ocho" onClick={()=>setPassword(v=>v+'8')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5-6"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M131.725 35.936H143.442V49.382999999999996H131.725z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text993"
              x="134.612"
              y="46.422"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan991"
                x="134.612"
                y="46.422"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                8
              </tspan>
            </text>
          </g>
          <g id="nueve" onClick={()=>setPassword(v=>v+'9')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5-2"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M143.442 35.936H155.15900000000002V49.382999999999996H143.442z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text997"
              x="146.417"
              y="46.471"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan995"
                x="146.417"
                y="46.471"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                9
              </tspan>
            </text>
          </g>
          <g id="cero" onClick={()=>setPassword(v=>v+'0')} transform="matrix(.53763 0 0 .53763 16.002 14.915)">
            <path
              id="rect837-5-6-1"
              fill="#000"
              strokeDasharray="59.0677, 59.0677"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.461"
              d="M131.725 49.383H143.442V62.83H131.725z"
            ></path>
            <text
              xmlSpace="preserve"
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "Roboto",
              }}
              id="text1001"
              x="134.615"
              y="59.868"
              fill="#00ff39"
              strokeWidth="0.265"
              fontFamily="Roboto"
              fontSize="10.583"
            >
              <tspan
                id="tspan999"
                x="134.615"
                y="59.868"
                fill="#00ff39"
                fillOpacity="1"
                strokeWidth="0.265"
              >
                0
              </tspan>
            </text>
          </g>
        </g>
        <g
          id="cerradura"
          strokeLinecap="round"
          transform="matrix(1.67135 0 0 1.67135 5.334 8.318)"
          onClick={cerraduraHandler}
        >
          <g id="g1176" transform="translate(3.59 10.583)">
            <g
              id="g1126"
              fill="#000"
              strokeDasharray="36.0969, 36.0969"
              strokeLinejoin="round"
              strokeWidth="1.504"
            >
              <path
                id="rect1085"
                d="M-7.387 15.313H7.313V30.012999999999998H-7.387z"
                transform="rotate(-45)"
              ></path>
              <path
                id="rect1085-1"
                d="M8.649 8.701H23.348999999999997V23.401H8.649z"
              ></path>
            </g>
            <path
              id="path1102"
              fill="#474747"
              stroke="#616161"
              strokeDasharray="none"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="3.234"
              d="M16.08 12.376v7.677"
            ></path>
            <circle
              id="path1112"
              cx="17.959"
              cy="18.583"
              r="1.96"
              fill="#616161"
              stroke="none"
              strokeDasharray="none"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="3.234"
            ></circle>
          </g>
          <path
            id="rect1178"
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.501"
            d="M5.192 11.806H43.378V41.11H5.192z"
          ></path>
          <path
            id="path1182"
            fill="#9c9c9c"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.323"
            d="M37.325 24.19l19.378-5.192-19.378 12.563"
          ></path>
          <circle
            id="path1180"
            cx="37.325"
            cy="27.876"
            r="3.685"
            fill="#9c9c9c"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1.323"
          ></circle>
        </g>
        <g id="clear" onClick={()=>setPassword('')} strokeLinecap="round">
          <path
            id="rect837-5-6-1-5"
            fill="#000"
            fillOpacity="1"
            strokeDasharray="60.813, 60.813"
            strokeLinejoin="round"
            strokeWidth="2.534"
            d="M159.126 80.585H171.189V94.42899999999999H159.126z"
          ></path>
          <g
            id="g970"
            fill="none"
            stroke="#00ff39"
            strokeDasharray="none"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.117"
            transform="matrix(.47374 0 0 .47374 110.38 48.05)"
          >
            <path id="path951" d="M109.313 76.974l12.629 12.628"></path>
            <path id="path951-1" d="M121.942 76.974l-12.629 12.628"></path>
          </g>
        </g>
        <g id="delete" fillOpacity="1" onClick={()=>setPassword(v=>v.substr(0, v.length-1))}>
          <path
            id="rect837-5-6-1-5-2"
            fill="#000"
            strokeDasharray="60.8129, 60.8129"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.534"
            d="M134.999 80.585H147.06199999999998V94.42899999999999H134.999z"
          ></path>
          <path
            id="path991"
            fill="#00ff39"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.079"
            d="M137.268 84.932h4.351l3.174 2.575-3.174 2.575h-4.351v-5.15"
          ></path>
        </g>
      </g>
    </svg>
    </div>
      </div>

      <div className="check" style={{display:showCheck?'flex':'none'}}>

        <div className="container">

          <h5>Hay un separador dentro ¿Deseas revisar?</h5>

          <div className="option" onClick={yesShowMoreBook}><p>Sí.</p></div> <div className="option" onClick={()=>setShowCheck(false)}><p>No.</p></div>

        </div>

      </div>

      <div className="check" style={{display:showFoto?'flex':'none'}} onClick={()=>{

        setShowFoto(false);

        if(touchFoto.current){

          inputText([{text:['— Selena: ','La pagina 7 está marcada con un circulo rojo.'], img: 'SelenaHablaSeria'}]);

          return false

        }

        touchFoto.current = true;

        inputText([{text:['— Selena: ','Espera... ¿¡ESTÁ NO ES ESA NIÑA QUE NOS INTENTÓ MATAR A MÍ Y A VULNOS HACE UNOS DÍAS?!'], img: 'SelenaAvergonzada'},
        {text:['— Selena: ','¿Que hace una foto de ella aquí? Que miedo.'], img: 'SelenaHablaSeria'},
        {text:['','— Selena revisa por detrás de la fotografía.'], img: 'moment'},
        {text:['— Selena: ','Dice... "Reino de Electricidad, barrios bajo" y lo que creo que es un número de teléfono".'], img: 'SelenaDesconfia'}, 
        {text:['— Selena: ','¿Hm? La página de la hoja parece estar marcada con un circulo rojo... La página 7... Extraño.'], img: 'SelenaHablaSeria'}]);

      }}>

        <div className="foto" style={{backgroundImage:`url(${ObjetImages.current['chica']})`}} ></div>

        <p className="close">Click para cerrar</p>

      </div>

      <div className="check" style={{display:showCheckChest?'flex':'none'}}>

        <div className="container">

          <h5>¿Deseas inspeccionar el cofre?</h5>

          <div className="option" onClick={()=>{
            
            setShowChest(true);

            setShowCheckChest(false);
            
          }}><p>Sí.</p></div> <div className="option" onClick={()=>setShowCheckChest(false)}><p>No.</p></div>

        </div>

      </div>

      <div className="cofre-container" style={{display: showChest?'flex':'none'}}>

        <div className="close" onClick={()=>{
          
          setShowChest(false);
          
          if(!viewChest.current && !openChest.current){

            inputText([{text:['— Selena: ','¿Huh? ¿Pide una contraseña? Que extraña pregunta... Tendré que solucionar el acertijo.'], img:'SelenaDesconfia'}]);

            viewChest.current = true

          }else if(!viewChest.current){

            inputText([{text:['— Selena: ','¡Vaya! adivine la contraseña a la primera.'], img:'SelenaFeliz'}, {text:['', '— Selena ha encontrado una llave.'], img:'moment'}]);

            viewChest.current = true;

            addItem(...llaveData);

          }else if (openChest.current){

            addItem(...llaveData);

            inputText([{text:['— Selena: ','¡Vaya! Lo abri.'], img:'SelenaFeliz'},
            {text:['', '— Selena ha encontrado una llave.'], img:'moment'}]);

          }
          
        }}>Cerrar</div>

        <div className="cofre" style={{backgroundImage:`url(${ObjetImages.current['cofre']})`}}>

          <div className="container">

            <input type="text" value={inputChest} placeholder="Ingrese la contraseña" onChange={chestHandler}/>

            <p>El tiempo dará la respuesta cuando la luz en el cielo comience a esconderse.
  La hermana mayor primero, la hermana menor al final, su canto dará la señal para la llave encontrar.</p>

          </div>

        </div>

      </div>

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
          href={ObjetImages.current['sala']}
      ></image>
        <image
          id="image8601"
          width="508"
          height="285.75"
          x="0"
          y="0"
          fill="none"
          stroke="none"
          preserveAspectRatio="none"
          href={ObjetImages.current['salaA']}
          style={{opacity: amanecerOpacity}}
      ></image>
        <image
          id="image8602"
          width="508"
          height="285.75"
          x="0"
          y="0"
          fill="none"
          stroke="none"
          preserveAspectRatio="none"
          href={ObjetImages.current['salaT']}
          style={{opacity: atardecerOpacity}}
      ></image>
        <image
          id="image8603"
          width="508"
          height="285.75"
          x="0"
          y="0"
          fill="none"
          stroke="none"
          preserveAspectRatio="none"
          href={ObjetImages.current['salaN']}
          style={{opacity: anochecerOpacity}}
      ></image>
      <g
        id="layer1"
        fillOpacity="1"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="0.265"
      >
        <path
          id="mesa"
          fill="#fff"
          d="M190.296 199.116h119.202l-1.87 52.385-116.798-.268z"
          opacity="0"
        ></path>
        <path
          id="silla"
          onClick={silla}
          fill="#000"
          d="M353.786 148.923L330.35 162.53l-3.78 24.19-6.047 25.703 11.34 9.071 1.511 27.214 50.649-.756v-30.994l10.583-15.119-9.071-12.85-14.363-36.287z"
          opacity="0"
        ></path>
        <path
          id="silla1"
          onClick={silla}
          fill="#000"
          d="M172.357 241.905v-20.41l12.095-18.144-6.803-12.095-4.536 1.512-1.512-36.286-30.994-7.56-21.922 29.483 3.78 12.095-9.072 15.875 6.803 5.292 7.56 16.63L127 244.93z"
          opacity="0"
        ></path>
        <path
          id="ventana2"
          onClick={ventana}
          fill="#000"
          d="M375.708 130.024l8.316 12.851 89.202-3.024-23.434-127.756-14.363-6.047-25.703-3.024-15.119 37.041z"
          opacity="0"
        ></path>
        <path
          id="ventana1"
          onClick={ventana}
          fill="#000"
          d="M109.313 141.118V67.085l-39.556 1.069L80.715 27.26l18.71-20.58 18.975 6.682 20.847 46.505 5.88 81.518z"
          opacity="0"
        ></path>
        <path
          id="marco"
          onClick={marco}
          fill="#000"
          d="M310.567 22.985l-111.718.535-1.07 117.598 118.134 1.07z"
          opacity="0"
        ></path>
        <path
          id="papelera"
          onClick={papelera}
          fill="#000"
          d="M430.304 210.608l-22.985 1.604.534 34.745 19.244 5.88 9.621-14.967z"
          opacity="0"
        ></path>
        <path
          id="libreria"
          fill="red"
          onClick={libreria}
          strokeWidth="0.132"
          d="M0 189.595l103.292.09.179 46.819L0 236.549z"
          opacity="0"
        ></path>
        <path
          id="libroEspecial"
          onClick={libroEspecialHandler}
          style={{display:viewMarkBook?'none':'block'}}
          fill="#000"
          d="M0 147.174v13.371l4.394-.094v-13.418z"
          opacity="0"
        ></path>
        <path
          id="cuadernoBloqueado"
          onClick={cuadernoBloqueadoHandler}
          fill="#000"
          d="M294.999 204.06c-1.136-.534-14.032 0-14.032 0l-.2 6.548-1.337 1.003.134 3.207.869.4.133 8.553 14.566.134z"
          opacity="0"
        ></path>
        <path
          id="lapices"
          onClick={lapices}
          fill="#000"
          d="M271.576 203.635l-.19 21.922 6.899-.472-.189-22.017z"
          opacity="0"
        ></path>
        <path
          id="hojas"
          onClick={nota}
          fill="#000"
          d="M268.741 224.14l-.094-21.356-15.497.473-15.686 10.205.944 10.205z"
          opacity="0"
        ></path>
      </g>
    </svg>

    </div>)
    
}

export default Sala;