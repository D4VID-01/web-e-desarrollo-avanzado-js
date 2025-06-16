// Simulando una base de datos de mesas
let mesasDisponibles = 5; // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`¡Hay suficientes mesas! Reservando ${mesasSolicitadas}.`);
      } else {
        reject(`No hay suficientes mesas. Solo quedan ${mesasDisponibles}.`);
      }
    }, 2000); // Simula retraso de 2 segundos
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
      if (exito) {
        resolve(`Correo enviado a ${nombreCliente}. ¡Reserva confirmada!`);
      } else {
        reject("Error al enviar el correo de confirmación.");
      }
    }, 1500); // Simula retraso de 1.5 segundos
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const mensajeDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(mensajeDisponibilidad);

    // Actualizamos las mesas disponibles
    mesasDisponibles -= mesasSolicitadas;

    console.log("Enviando correo de confirmación...");
    const mensajeCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeCorreo);

  } catch (error) {
    console.log("Error:", error);
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);
hacerReserva("David Perez", 6);