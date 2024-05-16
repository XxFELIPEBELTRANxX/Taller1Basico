// 5. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

let frase = prompt("ingresa tu frase:")

for(let i =0; i< 10 ; i++){
    console.log(`${i + 1}. ${frase}`)
}