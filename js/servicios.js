const cardContainer = document.querySelector('#card-container')

async function cargarServicios() {
  try {

    // Esto sirve para hacer un 'loader', mientras no haya respuesta de la API, aparece esto:
    if (!cardContainer) return
    cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Cocinando los datos, por favor espera...</p>
            </div>
        `
    // fin loader

    const response = await fetch(
      'https://tp3-nodejs-050626-1.onrender.com/servicios'
    )
    const data = await response.json()

    cardContainer.innerHTML = ` ` // Elimina el 'loader' y deja el espacio disponible.

    console.log(response)
    console.log(data)

    data.forEach((servicio) => {
      const div = document.createElement('div')
      div.classList.add('card')

      div.innerHTML = `
        <div class="card-img">
              <img
                src="../assets/img/cupcake-servicios.png"
                alt="Imagen de cupcakes personalizados"
              />
            </div>
            <div class="card-valor"><h3>$ ${servicio.precio}</h3></div>
            <div class="card-descripcion">
              <h3>${servicio.desc}</h3>
          </div>
      `

      cardContainer.append(div)
    })
  } catch (error) {
    console.log(
      `Error, no se puedieron traer los datos de los servicios. ${error}`
    )
  }
}

cargarServicios() // En ves de añadir un 'EventListener', llamamos a la función ni bien carga el HTML de este apartado 
