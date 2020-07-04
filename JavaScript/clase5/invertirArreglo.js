let readlineSync = require ("readline-sync");
let cantidad = readlineSync.questionInt("ingrese la dimension de su Array");
let arregloInvertido = [];
for(let indice = 0; indice < cantidad; indice++){
	arregloInvertido[indice] = readlineSync.questionInt("ingrese los numeros del Array");
}
for(let indice = cantidad-1 ; indice >= 0; indice--){
	console.log("el numero del indice", indice, "es:", arregloInvertido[indice]);
}