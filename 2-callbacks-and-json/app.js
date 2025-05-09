
//------------------------ Tema CALLBACKS  -----------------------------


/* //Ejemplo básico de callback

function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse); */

//Función que opera dos números sin callback.
/* 
function calcular (num1, num2, tipoCalculo) {

    if (tipoCalculo === 'suma') {
        return num1+num2;
    } else if (tipoCalculo === 'multiplicación') {
        return num1*num2;
    }
}

console.log(calcular(3,5,'suma')) */

//Función que opera dos números con callback.
/* 
function sumar (a, b) {
    return a+b;
}

function multi (a, b) {
    return a*b;
}

function mensaje (a, b) {
    console.log(`Tus números son: ${a} y ${b}.`)
}

function calcular (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calcular(45, 7, mensaje)); */

/* setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000); */


//Solución con promise
/* function tarea(ms, mensaje){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(mensaje)
            resolve()
        }, ms )
    } )
}
tarea(1000, "Primera tarea completada")
.then( () => tarea(1000, "Segunda tarea completada") )
.then( () => tarea(1000, "Tercera tarea completada") )  */


//------------------------ Tema JSON --------------------------------

//Convertir un objero JSON a JS
/* const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';

const objeto = JSON.parse(jsonData);

console.log(objeto.nombre); // "Carlos"

console.log(objeto.edad);   // 25 */


//Convertir un objero JS a JSON

/* const estudiante = {

    nombre: "Ana",
  
    edad: 22,
  
    esEstudiante: true,
  
    materias: ["Historia", "Inglés", "Literatura"]
  
}
  
const jsonString = JSON.stringify(estudiante);
  
console.log(jsonString); */

// -------------------------------------------------------------------------
// Guardar datos en localStorage

const usuario = {
    nombre: "Lucía",
    edad: 30
}
  
localStorage.setItem('usuario', JSON.stringify(usuario));
  
// Recuperar datos de localStorage
  
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  
console.log(usuarioGuardado.nombre); // "Lucía"