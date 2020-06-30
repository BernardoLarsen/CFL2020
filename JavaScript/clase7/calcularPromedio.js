let readlineSync = require("readline-sync");
let cantidad = readlineSync.questionInt("ingrese la cantidad de niños");
let niños = new Array(cantidad);
function Aleatorio(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}
function cargarArreglo(niños){
	for(let i=0; i<niños.length; i++){
		niños[i]= Aleatorio(3,7);
	}
}
function mostrarArreglo(niños){
	for(let i=0; i<niños.length; i++){
		console.log(niños[i]);
	}
}
function promedio(niños,cantidad){
	let suma=0;
	for(let i=0; i<niños.length; i++){
		suma=suma+niños[i];
	}
	return ("el promedio de edad entre los alumnos es: "+ suma/cantidad);
}
cargarArreglo(niños);
mostrarArreglo(niños);
console.log(promedio(niños,cantidad));