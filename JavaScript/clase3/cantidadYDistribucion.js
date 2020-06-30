let readlineSync =require("readline-sync");
let num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
let suma=0
let positivo=0
let negativo=0
let porcentaje;
while(num!=0){
	if(num>0){
		positivo=positivo+1
	}else{
		negativo=negativo+1
	}
	num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
}
suma=positivo+negativo
porcentaje=positivo*100
console.log(positivo,"Positivos",porcentaje/suma,"%del total"); 