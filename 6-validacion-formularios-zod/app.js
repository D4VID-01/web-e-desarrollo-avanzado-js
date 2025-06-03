import z from "zod";
/* 
//Crear esquema de validación 
const nombreSquema = z.string();
const edadSquema = z.number();
const nbooleanSquema = z.boolean();

//Pasar información 
const useredad = 24;

// Validación
let mensaje = edadSquema.parse(useredad);
console.log(mensaje); */

// -------------------------------------------------------------------------

//Esquema basado en objeto

// 1. Crear esquema de validación 

/* const userSchema = z.object({
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    email: z.string().email(),
    phone: z.number().int().positive('La edad debe ser un número positivo')
})

//2. Pasar información 

const userData = {
    nombre: 'Pepe',
    email: 'david@gmail.com',
    phone: 343353345656
}


//3. Validación 
const mensaje = userSchema.parse(userData);
console.log(mensaje);
 */


//Arrays en zod

/* //1. Esquema de validación 
const textoArraySchema = z.array(z.string());

//2. Pasar información 
textoArraySchema.parse(['1', '2', '3'])  */

// Si se quisiera validar un array de objetos como ej. Un array de usuarios

// 1.

const userSchema = z.object({
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    email: z.string().email(),
    phone: z.number().int().positive('La edad debe ser un número positivo')
})

const usersSchema = z.array(userSchema);

// 2.

const userData = [
    {
        nombre: 'Pepe',
        email: 'david@gmail.com',
        phone: 343353345656
    },
    {
        nombre: 'Pepe',
        email: 'david@gmail.com',
        phone: 343353345656
    },
    {
        nombre: 'Pepe',
        email: 'david@gmail.com',
        phone: 343353345656
    }

]


// 3. 

const mensaje = usersSchema.safeParse(userData);
console.log(mensaje);