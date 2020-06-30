let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("Ingrese el primer numero");
let numero2 = readlineSync.questionInt("Ingrese el segundo numero");
let numero3 = readlineSync.questionInt("Ingrese el tercer numero");
if(numero1>numero2 && numero1>numero3){
	console.log("el numero:",numero1,"es el mayor de los 3");
}else{
	if(numero2>numero3){
		console.log("el numero:", numero2, "es el mayor de los 3");
	}else{
		console.log("el numero:", numero3, "es el mayor de los 3");
	}
}