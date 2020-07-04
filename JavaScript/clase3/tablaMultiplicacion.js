let readlineSync =require("readline-sync");
let numeroDeseado=readlineSync.questionInt("ingrese el numero del que desea obtener la tabla de multiplicacion");
let numeroLimite = readlineSync.questionInt("ingrese hasta que numero se muestre la multiplicacion");
let contador,resultado;
for(contador=1;contador<=numeroLimite;contador++){
	resultado= numeroDeseado*contador
	console.log(numeroDeseado,"X",contador, "=",resultado);
}