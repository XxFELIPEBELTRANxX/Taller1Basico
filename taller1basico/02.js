//2. Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

let nombre = prompt("ingrese su nombre");
let añoNacimiento = prompt("ingrese su año de nacimiento")
let resultado ;
let añoActual = 2024
function edad(){
    resultado = añoActual - añoNacimiento;
    
    alert(`hola ${nombre}, grandioso tienes ${resultado}`)

}

edad();