let readlineSync = require("readline-sync");
let num1= readlineSync.questionFloat("ingrese el primer numero para sumar");
let num2= readlineSync.questionFloat("ingrese el segundo numero para sumar");
function sumar(){
    let suma= num1+num2;
    return "la suma de los numeros es: "+ suma;
}
console.log(sumar());