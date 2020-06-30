let readlineSync =require("readline-sync");
let numero = readlineSync.questionInt("ingre el numero deseado");
if(numero==0){
	console.log("su numero es 0");
}else{
	if(numero%2==1){
		console.log("su numero es impar");
	}else{
		console.log("su numero es par");
	}
}