let readlineSync = require("readline-sync");
// let dimension = readlineSync.questionInt("ingrese la dimension de los arrays");
// let array1 = new Array (dimension);
// let array2 = new Array (dimension);
// let array3 = new Array (dimension);
let v1= [1,2,3], v2= [4,5,6], v3= [2,1,2], v4= [1,2,1], arraysMultiplicados= [1,1,1];
function cargarArreglos(array1,array2){
	for(let i=0;i< array1.length;i++){
		array1[i]=readlineSync.questionInt("ingrese numero del primer array");
		array2[i]=readlineSync.questionInt("ingrese numero del segundo array");
	}
}
function multiplicarArreglos(array1,array2,array3){
	for(let i=0;i< array1.length;i++){
		arraysMultiplicados[i]=arraysMultiplicados[i]*array1[i]*array2[i];
	}
	return array3;
}
// cargarArreglos(array1,array2);
// console.log(multiplicarArreglos(array1,array2,array3));

// ME FUE CONFUSA LA CONSIGNA, ESTO ES LO QUE ENTENDI QUE HABIA QUE HACER...

multiplicarArreglos(v1,v2,arraysMultiplicados);
console.log("el resultado de la multiplicacion es ", multiplicarArreglos(v3,v4,arraysMultiplicados));
