// este export nos permite exportar hacia main.js
export const tarjeta = (datos) => {
    //plantillas de las tarjetas a mostrar//
    let plantilla = `
    <article class="tarjeta">
        <header class="header_tarjeta">
          <img src="${datos.img}">
        </header>
        <div class="tarjetabody">
          <p class="title">${datos.title} </p>
          <p class="descripcion">${datos.author} </p>
          <p class="fecha"> ${datos.releaseDay}</p>
        </div>
    </article>
     `
    return plantilla
}

export const tarjeta2 = (datos) => {
  //plantillas de llos personajes que se van a mostrar//
  //<img src="${datos.img}">
  let plantilla2 = `
  <article class="tarjeta2">
      <header class="header_tarjeta2">
       
      </header>
      <div class="tarjeta2body">
        <p class="name">Nombre: ${datos.name} </p>
        <p class="birth">Birthday: ${datos.birth} </p>
        <p class="species">Species: ${datos.species}</p>
        <p class="gender">Gender: ${datos.gender}</p>
        <p class="house">House: ${datos.house}</p>
      </div>
  </article>
   `
  return plantilla2
 }