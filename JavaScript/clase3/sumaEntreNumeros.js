let readlineSync = require("readline-sync");
let suma, contador, resultado;
let numero1 = readlineSync.questionInt("Ingrese el primer numero");
let numero2 = readlineSync.questionInt("Ingrese el segundo numero");
suma = 0
for(contador=numero1;contador<=numero2;contador++){
	suma+=contador
}
console.log("primer numero:", numero1);
console.log("segundo numero:", numero2);
console.log("la suma es:", suma);