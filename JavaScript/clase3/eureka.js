let readlineSync = require("readline-sync");
let contador = 1;
let palabraClave;
while(contador <= 3 && palabraClave!= "eureka"){
	palabraClave =readlineSync.question("ingrese su palabra clave");
	if(palabraClave=="eureka"){
		console.log("usted acerto la palabra");
	}else{	
		console.log("incorrecto, ingrese nuevamente");
	}
	contador = contador + 1
}
if(palabraClave!= "eureka"){
	console.log("se te acabaron las oportunidades");
}