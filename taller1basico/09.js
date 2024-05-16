
function crearRango(){
    let numeros = []

    let numero = parseInt(prompt('ingrese un numero'));

    for(let i =  1; i <= numero; i++) // i recorre los numeros quee estan dentro 
        numeros.push(i) 
    
    console.log(numeros)

    numeros.splice(1, 1)
    console.log(numeros)
}
crearRango();