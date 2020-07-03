let readlineSync = require("readline-sync");
let num= readlineSync.questionFloat("ingrese un numero para multiplicar por 5: ");
function multiplicar(){
    let multiplicacion= num*5;
    return "la multiplicacion es: "+ multiplicacion;
}
console.log(multiplicar());