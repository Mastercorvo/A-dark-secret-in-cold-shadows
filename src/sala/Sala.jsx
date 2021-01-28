
import { useEffect, useRef, useState } from 'react';
import './sala.css';

const llaveData = ['otraLlave', 'Una llave misteriosa encontrada en la sala del castillo.', 'Una llave encontrada en la sala del castillo']

function Sala({ObjetImages, zone, setZonesArrow, inputText, currentAnyText, addItem, inventario, setInventario, postText, actions, superTime}) {

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
    
    function marco(){
      
      if('cuadro' in actions){

        alert('¡ALTO AHÍ HERMANO! ¿Eri gei?');

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
    const [amanecer, setAmanecer] = useState(true);

    const [atardecerOpacity, setAtardecerOpacity] = useState(0)
    const [atardecer, setAtardecer] = useState(true)

    const [anochecerOpacity, setAnochecerOpacity] = useState(0)
    const [anochecer, setAnochecer] = useState(true)

    useEffect(() => {

      console.log(superTime);

      if((superTime >= 360) && (superTime <= 480)){

        console.log(1);
        setAmanecerOpacity(((superTime-336)*(1/120) >= 1)?1:(superTime-336)*(1/120))

      }

      if((superTime >= 1080) && (superTime <= 1200)){

        console.log(2);
        setAtardecerOpacity((superTime-1080) * (1/120))

      }

      if((superTime >= 1200) && (superTime <= 1260)){

        setAtardecerOpacity(1-((superTime-1200) * (1/60)));
        
        setAnochecerOpacity(((superTime-1200)*(1/60)));

      }

      if((superTime >= 1260) || (superTime <= 360)) setAtardecerOpacity(1);



    }, [superTime])

    if(zone !== 'sala') return false;

    return (<div className="Sala">

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