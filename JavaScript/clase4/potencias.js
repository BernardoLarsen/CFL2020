let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("ingrese la base");
let exponente = readlineSync.questionInt("ingrese el exponente");
let suma = 1;
let calcularPotencia = (base, exponente) => {
	if (exponente > 0) {
		for (let i = 0; i < exponente; i++) {
			suma = suma * base;
		}
		return suma;
	} else {
		if (exponente == 0) {
			return 1
		} else {
			console.log("el valor ingresado como exponente no esta permitido");
		}
	}
}
console.log("el resultado es:", calcularPotencia(base, exponente));