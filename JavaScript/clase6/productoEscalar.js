let readlineSync = require('readline-sync');
let cantidad;
let array1 = []
let array2 = []
let cargarArreglos = (cantidad) => {
	for(let i = 0; i < cantidad ; i ++){
		array1[i]= readlineSync.questionInt ("ingrese un valor numerico para 1");
		array2[i]= readlineSync.questionInt ("ingrese un valor numerico para 2");
	}
}
let calcularProductoEscalar = (array1, array2) => {
	let productoEscalar = 0;
	for(let i = 0; i < cantidad; i++){
		productoEscalar = productoEscalar + array1[i] * array2[i];
	}
		return productoEscalar
}
let mostrarArray = (array, cantidad) => {
	for(let i = 0; i < cantidad; i++){
		console.log("array :", array[i]);
	}
}
cantidad = readlineSync.questionInt("ingrese la dimension de su arreglo");
cargarArreglos(cantidad);
mostrarArray(array1, cantidad);
mostrarArray(array2, cantidad);
console.log(calcularProductoEscalar(array1, array2));