let readlineSync= require("readline-sync");
let dimension=readlineSync.questionInt("ingrese la cantidad de alumnos");
let alumnos= new Array(dimension);
let nota1=[],nota2=[],nota3=[];
function cargarArrays(alumnos,nota1,nota2,nota3){
	for(let i=0;i<alumnos.length;i++){
		alumnos[i]=readlineSync.question("ingrese el alumno");
		nota1[i]=readlineSync.questionInt("ingrese la primer nota");
		nota2[i]=readlineSync.questionInt("ingrese la segunda nota");
		nota3[i]=readlineSync.questionInt("ingrese la tercer nota");
	}
}
function calcularPromedio(alumnos,nota1,nota2,nota3){
	let suma=0
	let alumnoPromedio= readlineSync.question("ingrese el alumno del que quiere conocer el promedio");
	for(let i=0;i<alumnos.length;i++){
		if(alumnoPromedio==alumnos[i]){
			suma= nota1[i]+nota2[i]+nota3[i];
			return ("el promedio del alumno: "+alumnos[i]+ " es: "+suma/3);
		}
	}
	return "el nombre del alumno no existe";
}
cargarArrays(alumnos,nota1,nota2,nota3);
console.log(calcularPromedio(alumnos,nota1,nota2,nota3));
