


export function idNotasNueva(){
  let len = window.localStorage.getItem('notas') ? JSON.parse(window.localStorage.getItem('notas')).length  + 1: 1;

  return {len}
}


