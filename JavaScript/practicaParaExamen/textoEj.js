let readlineSync= require("readline-sync");
let palabra= readlineSync.question("ingrese el texto que desea ");
let arregloTexto= [];
function arreglo(palabra){
	arregloTexto=palabra.split(" ").join("").split("");
	// arregloTexto= arregloTexto.split("");
	console.log(arregloTexto);
};
function encontrarVocales(arregloTexto){
	let sumaVocales=0;
	for(let i=0;i<arregloTexto.length;i++){
		if(arregloTexto[i]=="a"||arregloTexto[i]=="e"||arregloTexto[i]=="i"||arregloTexto[i]=="o"||arregloTexto[i]=="u"){
			sumaVocales++
		}
	}
	return ("la cantidad de vocales que tiene su texto son: "+ sumaVocales);
};
arreglo(palabra);
console.log(encontrarVocales(arregloTexto));