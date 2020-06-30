let readlineSync = require("readline-sync");
let dimension=readlineSync.questionInt("ingrese la dimension de los arreglos");
let array1= new Array(dimension);
let array2= new Array(dimension);
let array3= new Array(dimension);
let array4= new Array(dimension);
function aleatorio(){
	return Math.floor(Math.random()*100);
}
function cargarArrays(array1,array2,array3,array4){
	for(let i = 0; i < array1.length;i++){
		array1[i]=aleatorio();
		array2[i]=aleatorio();
		array3[i]=aleatorio();
		array4[i]=array1[i]+array2[i]+array3[i];
	}
}
// function mostrarArray(array1,array2,array3,array4){
	// for(let i = 0; i < array1.length;i++){
		// console.log(array1[i]);
		// console.log(array2[i]);
		// console.log(array3[i]);
		// console.log("la suma de los 3 arrays es:", array4[i]);
	// }
// }
function mostrarArray(array1,array2,array3,array4){
		console.log(array1);
		console.log(array2);
		console.log(array3);
		console.log("la suma de los 3 arrays es:", array4);
}
cargarArrays(array1,array2,array3,array4);
mostrarArray(array1,array2,array3,array4);