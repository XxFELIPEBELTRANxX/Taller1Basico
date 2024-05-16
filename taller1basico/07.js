// 7. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

let numero1 = parseInt(prompt("ingrse el primer valor"));
let numero2 = parseInt(prompt("ingrse el segundo valor"));

if (numero1<=numero2){
    for(let i = numero1; i<=numero2;i++){ // si esta condicion, va a incrementar de 1 en 1 hasta el rango del valor 2 
        console.log(i);
    }
}
else{
    for(let i = numero1; i>=numero2;i--){ // si la condicion anterior nose cumple va decrementar de 1 en 1 
        console.log(i)
    }
}