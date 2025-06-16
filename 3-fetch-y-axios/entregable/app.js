// Referencias a los botones y contenedor
const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

// Botón para Fetch API
fetchBtn.addEventListener('click', () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      renderCharacters(data.results); // Aquí renderizamos los personajes
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Botón para Axios
axiosBtn.addEventListener('click', () => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      renderCharacters(response.data.results); // Ya viene como objeto JS
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Función que muestra a los personajes en pantalla
function renderCharacters(characters) {
  dataContainer.innerHTML = ''; // Limpiar antes de renderizar
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.style.margin = '10px';
    characterElement.style.border = '1px solid #ccc';
    characterElement.style.padding = '10px';
    characterElement.style.borderRadius = '8px';
    characterElement.style.textAlign = 'center';

    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}" width="150">
      <p><strong>Especie:</strong> ${character.species}</p>
      <p><strong>Estado:</strong> ${character.status}</p>
    `;
    dataContainer.appendChild(characterElement);
  });
}