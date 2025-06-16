
// Importación de Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    // PISTA: Define que el nombre debe ser una cadena no vacía.
    name: z.string().min(3 , "El nombre debe contener minimo 3 letras" ),
    // PISTA: Valida que el correo tenga el formato correcto.
    email: z.string().email("Correo electrónico inválido"),
    // PISTA: La contraseña debe tener al menos 6 caracteres.
    password: z.string().min(8, "Minimo 8 caracteres ").max(20, "Mpaximo 20 caracteres ").regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    'La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial')

});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Captura de los valores ingresados
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    };

    try {
    // Validación 
    registerSchema.parse(formData);
    alert("Hola");
    } catch (error) {
    // PISTA: Muestra los mensajes de error en la página.
    document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
    }
});


