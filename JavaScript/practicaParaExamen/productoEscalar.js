let readlineSync= require("readline-sync");
let dimension= readlineSync.questionInt("ingrese la dimension de los arreglos");
let array1= new Array(dimension);
let array2= new Array(dimension);
function cargarArreglos(array1,array2){
	for(let i=0;i<array1.length;i++){
		array1[i]=readlineSync.questionInt("ingrese numero del primer array");
		array2[i]=readlineSync.questionInt("ingrese numero del segundo array");
	}
}
function productoEscalar(array1,array2){
	let producto=0;
	for(let i=0;i<array1.length;i++){
		producto+=array1[i]*array2[i];
	}
	return ("el producto escalar es: "+producto);
}
cargarArreglos(array1,array2);
console.log(productoEscalar(array1,array2));