let readlineSync = require('readline-sync');
let longitud = readlineSync.questionInt("ingrese la longitud de su Array");
let numeros = new Array(longitud);
let resultado = 0;
for(let indice = 0; indice < numeros.length; indice ++){
	numeros[indice]= readlineSync.questionInt("ingrese un numero");
	resultado= resultado + numeros[indice];
}
for(let indice = 0; indice < longitud; indice ++){
	console.log("el numero del indice", indice, "es:", numeros[indice]);
}
console.log("el resultado de la suma de los elementos es:",resultado);