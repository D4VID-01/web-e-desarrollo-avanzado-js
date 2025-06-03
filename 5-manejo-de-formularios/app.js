const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío automático del formulario
  
  const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        intereses: document.querySelector('input[type="checkbox"]'),
        genero: document.querySelector('input[name="genero"]:checked')
    };
    console.log(data.intereses.checked); // true o false
    console.log(checkbox.value)
    console.log(data.genero.value); // "masculino", "femenino" o "otro"

  if (!email.includes('@')) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }
  
  console.log(`Nombre: ${name}, Correo: ${email}`);
});