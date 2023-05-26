
import { Header } from './componts/Header';
import { estilos, opacity } from "./logic/estilos";
import { NuevaNota } from "./componts/NuevaNota";
import { MenuTresPuntos } from "./componts/Menu";
import { Notas } from "./componts/Notas";
import { Informacion } from './componts/Informacion';
import { Home } from "./componts/Home";
import confetti from 'canvas-confetti';
import './styles/App.css'
import { useState } from "react";



function App() {
  const [active, setActive] = useState(false);
  const [nombre, setNombre] = useState(()=>{
    return window.localStorage.getItem('user')? 
    window.localStorage.getItem('user'):
    ''
  })
  const [nuevaNota, setNuevaNota] = useState(false);
  const [notas, setNotas] = useState(()=>{
    return window.localStorage.getItem('notas')? 
    JSON.parse(window.localStorage.getItem('notas')): 
    []
  });

  
  const nombreInfo = (nom) =>{
    window.localStorage.setItem('user', nom);
    setNombre(window.localStorage.getItem('user'));
  }

  const [notificacin, setNotificacion] = useState(false)

  

  const datos = (info) =>{
    notas.push(info)
    window.localStorage.setItem('notas', JSON.stringify(notas));
    setNotas(JSON.parse(window.localStorage.getItem('notas')))
  }

  const stylosBtn =(e)=>{
    if(e.target.id === 'completada'){
      const d = notas.filter((e)=>{
        return e.hecho != false;
      })
      setNotas(d);
      setActive(true)
    }else if(e.target.id === 'todo'){
      setActive(false)
      setNotas(JSON.parse(window.localStorage.getItem('notas')))
    }
    
  }

  const btnNutevaNota = ()=>{
    setNuevaNota(!nuevaNota)
  }

  const vaciar = () =>{
    window.localStorage.removeItem('notas');
    setNotas([]);
  }

  const elimnarPerfil = () =>{
    window.localStorage.clear()
    setNombre(null)
    setNotas([])
  }
  

  const elimiarNota = (i) =>{
    
    const nueNota = notas.filter((e)=>{
      return e.id !== i
    })
    window.localStorage.setItem('notas',JSON.stringify(nueNota))
    setNotas(JSON.parse(window.localStorage.getItem('notas')))
  }
  
  const noti = () =>{
    setNotificacion(!notificacin)
  }

  const tareaHecha = (e) =>{
    const nota = notas[e]
    nota.hecho = !nota.hecho;
    setNotas(notas)
    window.localStorage.setItem('notas',JSON.stringify(notas));
    if(notas[e].hecho === true){
      confetti()
    }
    
  }
  
  return (
    <>
      {
        nombre ? 
        <>
          <Header active={btnNutevaNota} />
          <main style={nuevaNota ? opacity: null}>
            <aside className="contenido-titulo" style={notificacin?{opacity:0.5}:{opacity: 1}}>
              <div className="div-titulo">
                <h2 className='titulo-main'>Mis Notas</h2>
                <MenuTresPuntos vaciar={vaciar}  eliminar={elimnarPerfil} noti={noti} notificacin={notificacin}/>
              </div>
              <div className="div-btn-filter">
                <button id='todo' onClick={stylosBtn} style={!active ? estilos:null} >Todas</button>
                <button id='completada' onClick={stylosBtn} style={active ? estilos:null}>Completadas</button>
              </div>
              
            </aside>
            <Notas notas={notas} elimiarNota={elimiarNota} noti={notificacin} tareaHecha={tareaHecha}/>
            <Informacion infoTrue={notificacin} noti={noti}/>
          </main>
        </> : 
        <Home  nombre={nombreInfo}/>
      }
      {
        nuevaNota ? <NuevaNota cerrar={btnNutevaNota} datos={datos} />:null
      }
      
    </>
  )
}

export default App
