// Ruta del archivo JSON local
const jsonUrl = "temalibre.json";

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
    const charactersContainer = document.getElementById("charactersContainer");
  
    // Iteramos sobre cada animal en el JSON y creamos tarjetas HTML para mostrar la información
    data.forEach((animal) => {
      // Creamos un elemento div para la tarjeta del animal
      const card = document.createElement("div");
      card.classList.add("character-cardanimals");
  
      // Creamos elementos para mostrar la información del animal
      const nameElement = document.createElement('h1');
      nameElement.textContent = animal.nombre;
      nameElement.classList.add('animal-name')
  
      const especieElement = document.createElement('p');
      especieElement.textContent = "Especie: " + animal.especie;
  
      const imageElement = document.createElement('img');
      imageElement.src = animal.imagen;
      imageElement.alt = animal.nombre; // Añadimos un atributo 'alt' para accesibilidad
      imageElement.classList.add('animal-image'); // Agregamos una clase a la imagen
  
      const pesoElement = document.createElement('p');
      pesoElement.textContent = "Peso: " + animal.peso + " kg";

      const alturaElement = document.createElement('p');
      alturaElement.textContent = "Altura: " + animal.altura + " cm";
  
      const extintoElement = document.createElement('p');
      extintoElement.textContent = "Extinto: " + animal.extinto;
     
      // Agregamos los elementos a la tarjeta del animal
      card.appendChild(nameElement);
      card.appendChild(imageElement);
      card.appendChild(especieElement);
      card.appendChild(pesoElement);
      card.appendChild(alturaElement);
      card.appendChild(extintoElement);

  
      // Agregamos la tarjeta del animal al contenedor
      charactersContainer.appendChild(card);
    });
  }