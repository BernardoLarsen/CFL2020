let readlineSync = require("readline-sync");
let cantidad = readlineSync.questionInt("ingrese la cantidad de alumnos");
let alumnos = new Array(cantidad);
let nota1 = [], nota2 = [], nota3 = [];
function cargarArreglos (alumnos,nota1,nota2,nota3){
	for (let i = 0; i < alumnos.length; i++){
		alumnos[i]= readlineSync.question("ingrese el nombre del alumno");
		nota1[i]= readlineSync.questionInt("ingrese la primer nota");
		nota2[i]= readlineSync.questionInt("ingrese la segunda nota");
		nota3[i]= readlineSync.questionInt("ingrese la tercer nota");
	}
}
function calcularPromedio (alumnos,nota1,nota2,nota3){
	let promedio= 0;
	let alumnoPromedio= readlineSync.question("ingrese el nombre del alumno que desea obtener el promedio");
	for(let i=0; i < alumnos.length; i++){
		if(alumnos[i]== alumnoPromedio){
			promedio= nota1[i]+nota2[i]+nota3[i];
			return ("el promedio del alumno es "+ promedio/3);
		}
	}
	return "el nombre del alumno no existe";
}
cargarArreglos(alumnos,nota1,nota2,nota3);
console.log(calcularPromedio (alumnos,nota1,nota2,nota3));