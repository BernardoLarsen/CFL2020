let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("ingrese un numero");
let esMultiplo = (numero1, numero2) => {
	if(numero1%numero2 == 0){
		return true
	}else{
		return false
	}
}
let cantidadDeDivisores = (numero) => {
	let suma = 0;
	for (let i = numero; i >= 0; i--){
		if(esMultiplo(numero,i)){
			suma++;
		}
	}
		return suma;
}
console.log("la cantidad de divisores de:"+ numero +"son:" + cantidadDeDivisores(numero));
