const apiUrl = "https://rickandmortyapi.com/api/character";

// Función para obtener los archivos desde el API
function getFilesFromApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Llamamos a la función para crear las tarjetas de personajes
      console.log(data);
      createCharacterCards(data.results);
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación fetch:", error);
    });
}

// Función para crear las tarjetas de personajes
function createCharacterCards(characters) {
  // Obtenemos el contenedor de los personajes en el HTML
  const charactersContainer = document.getElementById("charactersContainer");
  // Recorremos cada personaje y creamos su tarjeta
  characters.forEach((character) => { //. significa que vamos a ingresar a ese elemento por cada posición
    // Creamos un elemento div para la tarjeta del personaje
    const card = document.createElement("div");
    card.classList.add("character-card");
    // Creamos un elemento p para mostrar el nombre del personaje

    const nameElement = document.createElement('h1');
    nameElement.textContent = character.name;
    console.log(character.image);

    const especieElement = document.createElement('h1');
    especieElement.textContent = character.species;

    const statusElement = document.createElement('h1');
    statusElement.textContent = character.status;

    // Agregamos el nombre del personaje al div de la tarjeta
    // Agregamos la tarjeta del personaje al contenedor
    const imageElemnt = document.createElement('img'); // una constante que vamos a crear en el documento y va a ser una imagen
    imageElemnt.src = character.image; 
    charactersContainer.appendChild(card);

    card.appendChild(imageElemnt);
    card.appendChild(nameElement);
    card.appendChild(especieElement);
    card.appendChild(statusElement);
    
    card.addEventListener("click", () => {
      // Suponiendo que character.episode contiene la URL del episodio
      const episodeUrl = character.episode;
      // Redirigimos a la página del episodio en una nueva pestaña
      window.open(`./Episodio.html?nombre=${character.name}&episodio=${episodeUrl}`, '_blank');
    });
    
  });
  charactersContainer.appendChild(card);
}

window.onload=function(){
  getFilesFromApi();
};
