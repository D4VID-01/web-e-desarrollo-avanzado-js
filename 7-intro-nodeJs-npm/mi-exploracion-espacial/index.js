import { planetas } from "./planetas.js";
import cowsay from 'cowsay';


planetas.forEach(planeta => {
    console.log(`¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`Descripción:  ${planeta.descripcion}.`);
    console.log(`Descubierto en:  ${planeta.descubiertoEn}.`);
    console.log( cowsay.say({
        text: 'Vaca del planeta', e:planeta.ojos, T:planeta.lengua
    }));
    console.log('-----------------------------------------------');
    
   
});