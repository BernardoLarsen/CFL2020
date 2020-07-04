let readlineSync= require("readline-sync");
let diasAño=365;
let dia= readlineSync.questionInt("ingrese un dia");
let mes= readlineSync.questionInt("ingrese un mes");
let año= readlineSync.questionInt("ingrese un año");
let diasMeses=[31,28,31,30,31,30,31,31,30,31,30,31]
function esBisiesto(año){
	if((año%4==0)&&(año%100!=0)||(año%400==0)){
		return true;
	}
}
if(esBisiesto(año)==true){
	diasAño=366;
	diasMeses[1]=29;
}
function contarDias(dia,mes){
	let suma=0;
	for(let i=0;i<mes-1;i++){
		suma=suma+diasMeses[i];
	}
	suma=suma+dia;
	return suma;
}
esBisiesto(año);
console.log("la cantidad de dias que faltan hasta fin de año son:",diasAño-contarDias(dia,mes));