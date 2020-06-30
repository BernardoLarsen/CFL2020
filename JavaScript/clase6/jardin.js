let readlineSync = require("readline-sync");
let azul = new Array(40);
let verde = new Array(35);
let amarilla = new Array(30);

function asignarAulas(azul,verde,amarilla){
	let cantidad = readlineSync.questionInt("ingrese el numero de infantes");
	if(cantidad>0){
		if(cantidad<=amarilla.length){
			return ("los infantes iran a la sala amarilla");
			// console.log("los infantes iran a la sala amarilla");
		}
		if(cantidad<=verde.length){
			return ("los infantes iran a la sala verde");
			// console.log("los infantes iran a la sala verde");
		}
		if(cantidad<=azul.length){
			return ("los infantes iran a la sala azul");
			// console.log("los infantes iran a la sala azul");
		}
		else{
			return ("la cantidad de alumnos exime la capacidad de todas las aulas");
			// console.log("la cantidad de alumnos exime la capacidad de todas las aulas");
		}
	}else{
		return("el numero ingresado no es valido");
	}
}
console.log(asignarAulas(azul,verde,amarilla));