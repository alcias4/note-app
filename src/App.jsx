import {HiOutlineDotsHorizontal } from "react-icons/hi";
import { Header } from './componts/Header';
import { estilos, opacity, stylosTexarea } from "./logic/estilos";
import { NuevaNota } from "./componts/NuevaNota";
import { Home } from "./componts/Home";
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

  

  const datos = (info) =>{
    notas.push(info)
    window.localStorage.setItem('notas', JSON.stringify(notas));
    setNotas(JSON.parse(window.localStorage.getItem('notas')))
  }

  const stylosBtn =()=>{
    setActive(!active)
    
  }

  const btnNutevaNota = ()=>{
    setNuevaNota(!nuevaNota)
  }

  

  const elimiarNota = (i) =>{
    
    const nueNota = notas.filter((e)=>{
      return e.id !== i
    })
    window.localStorage.setItem('notas',JSON.stringify(nueNota))
    setNotas(JSON.parse(window.localStorage.getItem('notas')))
  }
  
  
  
  return (
    <>
      {
        nombre ? 
        <>
          <Header active={btnNutevaNota} />
          <main style={nuevaNota? opacity: null}>
            <aside className="contenido-titulo">
              <div className="div-titulo">
                <h2 className='titulo-main'>Mis Notas</h2>
                <HiOutlineDotsHorizontal className="icon-puntos"/>
              </div>
              <div className="div-btn-filter">
                <button onClick={stylosBtn} style={!active ? estilos:null} >Todas</button>
                <button onClick={stylosBtn} style={active ? estilos:null}>Favoritos</button>
              </div>
            </aside>
            <section className="contenido-notas">
              {
                notas.map((e, i)=>{
                  return <div key={i} className="notas">
                    <article>
                      <h3>{e.titulo}</h3>
                      <textarea readOnly style={stylosTexarea(e.contenido)} value={e.contenido} />
                    </article>
                    <section className="btn-notas">
                      <label>{e.descripcion}</label>
                      <div>
                        <button>hecho</button>
                        <button onClick={()=>{elimiarNota(e.id)}}>Eliminar</button>
                      </div>
                    </section>
                    
                  </div>
                })
              }
            </section>
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
