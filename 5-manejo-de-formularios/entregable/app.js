
document.getElementById('registroEvento').addEventListener('change', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validaciones básicas
    if (nombre && correo && telefono && intereses.length !== 0 && horario && fecha && hora) {
        document.getElementById('btn').removeAttribute("disabled");
        document.getElementById('registroEvento').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío automático del formulario 
            // Si todo está bien
            alert('Registro exitoso. ¡Gracias por registrarte!');
        });
    }
        
});

