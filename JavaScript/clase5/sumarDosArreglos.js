let readlineSync = require("readline-sync");
let numerosArreglo1 = new Array (6);
let numerosArreglo2 = new Array (6);
let resultadoArreglos = new Array (6);
console.log("ingrese los numeros del primer Array");
for(let indice = 0; indice < numerosArreglo1.length; indice ++){
	numerosArreglo1[indice]= readlineSync.questionInt("ingrese un numero");
}
console.log("ingrese los numeros del segundo Array");
for(let indice = 0; indice < numerosArreglo2.length; indice ++){
	numerosArreglo2[indice]= readlineSync.questionInt("ingrese un numero");
}
for(let indice = 0; indice < resultadoArreglos.length; indice ++){
	resultadoArreglos[indice] = numerosArreglo1[indice] + numerosArreglo2[indice];
}
console.log("la suma de ambos Array en sus respectivas posiciones es:", resultadoArreglos);


//for(let indice = 0; indice < numerosArreglo1.length; indice ++){
//	numerosArreglo1[indice]= readlineSync.questionInt("ingrese un numero");
//	numerosArreglo2[indice]= readlineSync.questionInt("ingrese un numero");
//	resultadoArreglos[indice] = numerosArreglo1[indice] + numerosArreglo2[indice];
//}
// console.log("la suma de ambos Array en sus respectivas posiciones es:", resultadoArreglos);