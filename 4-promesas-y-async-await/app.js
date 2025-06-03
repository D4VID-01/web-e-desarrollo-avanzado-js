/* -------------------- PROMESAS ------------------------- */
 

 // Realción de tiempo de ejecución y proceso
 // Encadenamiento de promesas
 // Manejo de errores
 // Finally

 // 1. Reunir los ingredientes (3s)
 // 2. Cocinar la carne (2s)
 // 3. Calentar  el pan (1s)
 // 4. Armar 2s
 // 5. Servir 1s

/*  let tiendaAbierta = true;

const pedido = (tiempo, proceso) => {
    return new Promise ((resolve, reject) => {
        if (tiendaAbierta) {
            setTimeout(() => {
                resolve(proceso())
            }, tiempo)
        } else{
            reject( console.log( "Tienda cerrada" ));
        }
    })
}      

pedido(3000, () => console.log('Ingredientes reunndos correctamente'))

.then(() => {
    return pedido(2000, () => console.log('Hamburguesa en preparación'))
})

.then(() => {
    return pedido(2000, () => console.log('La carne ha sido cosinada'))
})

.then(() => {
    return pedido(1000, () => console.log('El pan se hacalentado correctamente'))
})

.then(() => {
    return pedido(2000, () => console.log('La Hamburguesa se ha armado'))
})

.then(() => {
    return pedido(1000, () => console.log('Hamburguesa servida'))
})

.catch(() => {
    console.log("El cliente se ha ido");
})

.finally(() => {
    console.log('Jornada finalizada');
}) */



/* ------------------ ASYNC AWAIT ------------------ */


 