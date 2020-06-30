let readlineSync =require("readline-sync");
let precioUnitario =readlineSync.questionInt("ingrese el precio unitario");
let cantidad =readlineSync.questionInt("ingrese la cantidad");
let mes =readlineSync.question("ingrese el mes de la compra").toUpperCase();
let precioFinal =precioUnitario*cantidad
if(mes=="OCTUBRE"){
	let descuento = precioFinal*0.15;
	console.log("usted tiene el 15% de descuento,por lo tanto su precio a pagar es:", precioFinal-descuento, "pesos");
}else{
	console.log("usted no tiene el 15% de descuento, por lo tanto su precio a pagar es:",precioFinal, "pesos" );
}