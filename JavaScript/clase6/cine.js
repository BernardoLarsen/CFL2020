let readlineSync = require ("readline-sync");
let cantidadButacas = readlineSync.questionInt("ingrese la cantidad total de butacas");
let butacas = new Array (cantidadButacas);
function cargarArray(butacas){
	for(let i = 0; i < butacas.length; i++){
		butacas[i]= Math.round(Math.random());
	}
}
function butacasDesocupadas(butacas){
	let butacasVacias = 0;
	for(let i = 0; i < butacas.length; i++){
		if(!butacas[i]){
			butacasVacias++;
		}
	}
	return butacasVacias; 
}
cargarArray(butacas);
console.log(butacas);
console.log(butacasDesocupadas(butacas));

// Math.random da numeros entre 0 y 1. Y Math.round redondea si es mas de 0.5 para 1 o si es menor de 0.5 para 0.
// Los valor Booleanos (true y false) tiene valor 0 para FALSE. Y valor 1 para TRUE.
// if(!butacas[i]) Esto dice que si butaca es false hacer instrucciones. por el !
// estos comentarios son para mi, mil disculpas por escribirlos aca