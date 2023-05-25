
// eslint-disable-next-line react/prop-types
export function Notas({notas, elimiarNota, noti}){
  
  return<section className="contenido-notas">
  {
    // eslint-disable-next-line react/prop-types
    notas.map((e, i)=>{
      return <div key={i} className="notas" style={noti?{opacity:0.5}: null}>
        <article>
          <h3>{e.titulo}</h3>
          <span className="contenido">{e.contenido}</span>
        </article>
        <section className="btn-notas">
          <label className="etiqueta">#{e.descripcion}</label>
          <div>
            <button>hecho</button>
            <button onClick={()=>{elimiarNota(e.id)}}>Eliminar</button>
          </div>
        </section>
        
      </div>
    })
  }
</section>
}