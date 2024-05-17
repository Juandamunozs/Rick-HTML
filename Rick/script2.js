// Ruta del archivo JSON local
const jsonUrl = "datospersonales.json";

document.addEventListener("DOMContentLoaded", getDataAndDisplayInHtml);

// Función para obtener los datos desde el archivo JSON y mostrarlos en HTML
function getDataAndDisplayInHtml() {
  fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Llamamos a la función para mostrar los datos en HTML
      mostrarDatosEnHTML(data);
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación fetch:", error);
    });
}

// Función para mostrar los datos en HTML
function mostrarDatosEnHTML(data) {
    const charactersContainer = document.getElementById("contenedor-datos");
  
    // Iteramos sobre cada animal en el JSON y creamos tarjetas HTML para mostrar la información
    data.forEach((yo) => {
      // Creamos un elemento div para la tarjeta del animal
      const card = document.createElement("div");
      card.classList.add("character-cardyo");
  
      // Creamos elementos para mostrar la información del animal
      const nameElement = document.createElement('p');
      nameElement.textContent = "Nombre: " +yo.nombre;

      const edadElement = document.createElement('p');
      edadElement.textContent = "Edad: " +yo.edad;
      
      const identificacionElement = document.createElement('p');
      identificacionElement.textContent = "Identificación: " +yo.identificacion;
      
      const correoElement = document.createElement('p');
      correoElement.textContent = "Correo: " +yo.correo;

      const telefonoElement = document.createElement('p');
      telefonoElement.textContent = "Telefono: " +yo.telefono;
     
      const calleElement = document.createElement('p');
      calleElement.textContent = "Calle: " +yo.calle;

      const ciudadElement = document.createElement('p');
      ciudadElement.textContent = "Ciudad: " +yo.ciudad;

      const estadocivilElement = document.createElement('p');
      estadocivilElement.textContent = "Estado civil: " +yo.estadocivil;

      const nacionalidadElement = document.createElement('p');
      nacionalidadElement.textContent = "Nacionalidad: " +yo.nacionalidad;
      // Agregamos los elementos a la tarjeta del animal
      card.appendChild(nameElement);
      card.appendChild(edadElement);
      card.appendChild(identificacionElement);
      card.appendChild(correoElement);
      card.appendChild(telefonoElement);
      card.appendChild(calleElement);
      card.appendChild(ciudadElement);
      card.appendChild(estadocivilElement);
      card.appendChild(nacionalidadElement);
  
      // Agregamos la tarjeta del animal al contenedor
      charactersContainer.appendChild(card);
    });
  }