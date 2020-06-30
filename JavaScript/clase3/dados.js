let readlineSync=require("readline-sync");
let cantidad= readlineSync.questionInt("ingrese la cantidad de dados que desea tirar");
for(let i= 0; i < cantidad; i++){
	if(cantidad>0){
		console.log("la posibilidad de que toque 6 en:", cantidad, "dados, es de 1 en:", 6**cantidad);
	}
}
for(let i= 0; i < cantidad; i++){
	if(cantidad<=0){
		console.log("el numero de dados debe ser mayor a 0");
		cantidad= readlineSync.questionInt("ingrese la cantidad de dados que desea tirar");
		console.log("la posibilidad de que toque 6 en:", cantidad, "dados, es de 1 en:", 6**cantidad);
	}
}
// while(cantidad<0){	
	//console.log("el numero de dados debe SI O SI ser mayor a 0");
	// cantidad= readlineSync.questionInt("ingrese la cantidad de dados que desea tirar");
	// console.log("la posibilidad de que toque 6 en:", cantidad, "dados, es de 1 en:", 6**cantidad);
//}

// CORREGIR CON RODRIGO