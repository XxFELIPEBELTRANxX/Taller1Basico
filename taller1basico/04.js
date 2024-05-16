
let numero = parseInt(prompt("ingrese un numero"));

if(numero > 0 && numero % 3 == 0  && numero > 0 && numero % 5 == 0){
    alert(`el ${numero} es bingbong`)
}
else if (numero > 0 && numero % 3 == 0){
    alert(`el ${numero} es bing`)   
}

else if (numero > 0 && numero % 5 == 0){
    alert(`el ${numero} es bong`)   
}

else{
    alert(`${numero} no es multiplo ni de 3 ni de 5`)
}