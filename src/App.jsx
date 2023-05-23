import {HiOutlineDotsHorizontal } from "react-icons/hi";
import { Header } from './componts/Header';
import { estilos, opacity, stylosTexarea } from "./logic/estilos";
import { NuevaNota } from "./componts/NuevaNota";
import './styles/App.css'
import { useState } from "react";



function App() {
  const [active, setActive] = useState(false);
  const [nuevaNota, setNuevaNota] = useState(false);
  const [notas, setNotas] = useState(()=>{
    return window.localStorage.getItem('notas')? 
    JSON.parse(window.localStorage.getItem('notas')): 
    []
  });
  

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

  
  
  return (
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
                  <textarea readOnly style={stylosTexarea(e.contenido)}>{e.contenido}</textarea>
                </article>
                <section className="btn-notas">
                  <label>{e.descripcion}</label>
                  <div>
                    <button>hecho</button>
                    <button>Eliminar</button>
                  </div>
                </section>
                
              </div>
            })
          }
        </section>
      </main>
      {
        nuevaNota ? <NuevaNota cerrar={btnNutevaNota} datos={datos} />:null
      }
    </>
  )
}

export default App
