const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ,1];
let cantUnos= 0;
for(let numero of nums){
    if(numero == 1){
        //  console.log(numero)
        cantUnos++
    }
}
console.log(cantUnos);