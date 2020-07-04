let readlineSync =require("readline-sync");
let numero=readlineSync.questionInt("ingrese un numero");
while(numero<=0){
	console.log("el numero debe ser mayor a 0");
	numero=readlineSync.questionInt("ingrese un numero");
}
if(numero%2==0){
	console.log("el numero ingresado es par");
}else{
	console.log("el numero ingresado es impar");
}

	
