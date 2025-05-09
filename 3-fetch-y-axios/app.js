
//fetch
/* fetch("https://rickandmortyapi.com/api/character/")
    .then(respuesta => {

        if (!respuesta.ok) {
            throw new Error(`Error HTTP Status: ${respuesta.status}`)
        }
        return respuesta.json()
    })
    .then(data => console.log(data.results))
    .catch(error => console.error("El error es: ", error)) */

    //Fetch con async and wait

   /*  async function mostrarDatos() {
        try {
            const respuesta = await fetch("")
        } catch (error) {

        }
    } */


//---------------------------------------------------------------

//AXIOS

/* axios.get('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => {
        console.log(respuesta.data);
    })
    .catch( err => {
        console.log(`Error: ${err}`);
    })
 */
//AXIOS con Async Await

/* async function nostrarUsuarios(params) {
    
} */

