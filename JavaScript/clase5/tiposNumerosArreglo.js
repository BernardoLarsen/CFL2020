let readlineSync = require("readline-sync");
let cantidad = readlineSync.questionInt("ingrese la dimension de su Array");
let tiposNumeros = [];
let ceros = 0; positivos = 0; negativos = 0;
for(let indice = 0; indice < cantidad; indice++){
	tiposNumeros[indice] = readlineSync.questionInt("ingrese los numeros del Array");
	if(tiposNumeros[indice] == 0){
	ceros = ceros + 1
	}else{
		if(tiposNumeros[indice] > 0){
		positivos = positivos + 1
		}else{
		negativos = negativos + 1
		}
	}
}
for(let indice = 0; indice < cantidad; indice ++){
	console.log("el numero del indice", indice, "es:", tiposNumeros[indice]);
}
console.log(`positivos: ${positivos} negativos: ${negativos} ceros: ${ceros}`);