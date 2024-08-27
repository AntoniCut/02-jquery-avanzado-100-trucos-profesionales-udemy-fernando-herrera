//  *****************************************************************  
//  **********  /02-curso-jquery-avanzado/asset/js/071.js  **********  
//  *****************************************************************  

function saludar(nombre) {
    console.log('Hola ' + nombre);
}
var persona = {
    nombre: 'Antonio',
    edad: 48,
    sexo: 'M',
    direccion: {}
};

// var persona = 'Fernando';
saludar(persona.nombre);
