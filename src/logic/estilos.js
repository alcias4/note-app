export const estilos ={
  background: "#181820",
  border: "2px solid #414052"
}


export const opacity ={
  opacity:0.5
}



export function stylosTexarea(contenido){
  

  if(contenido.length > 200 && contenido.length <= 505 ){
    const stylo = {
      height: "200px"
    }

    return stylo
  }else if(contenido.length > 505 && contenido.length <= 800){

    const stylo = {
      height: "200px"
    }

    return stylo
  }else if(contenido.length > 800){

    const stylo = {
      height: "300px"
    }

    return stylo
  }
}