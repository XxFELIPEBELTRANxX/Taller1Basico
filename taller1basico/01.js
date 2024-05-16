//1. Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

let numero1 = parseInt(prompt("ingrese el primer valor :"));
let numero2 = parseInt(prompt("ingrese el segundo valor :"));
let resultado;

function suma(){
    resultado = numero1 + numero2;
    alert(`la suma del ${numero1} y ${numero2} es de:${resultado} `)    
}

suma();