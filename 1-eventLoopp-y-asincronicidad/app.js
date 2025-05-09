//Ejemplo de cód

/* console.log('Inicio');

setTimeout(() => {
  console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin'); */
/* 
fetch(""); */

function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

saludar('María', () => {
  console.log('Callback ejecutado.');
});

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado));

async function obtenerDatos() {
  const respuesta = await fetch('https://api.example.com/data');
  const datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();