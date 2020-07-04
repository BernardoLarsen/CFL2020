let readlineSync= require("readline-sync");
let texto=readlineSync.question("ingrese un texto");
let vocales= ["a","e","i","o","u"];
let consonantes=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
let consonantesTexto=[];
let vocalesTexto=[];
let arregloTexto= texto.toLowerCase().split(" ").join("").split("");
function encontrarConsonantes(consonantes,letra){
	for(let i=0;i<consonantes.length;i++){
		if(letra==consonantes[i] && consonantesTexto.indexOf(letra)==-1)
			consonantesTexto.push(letra);
	}
}
function encontrarVocales(vocales,letra){
	for(let i=0;i<vocales.length;i++){
		if(letra==vocales[i]&& vocalesTexto.indexOf(letra)==-1)
			vocalesTexto.push(letra);
	}
}
function arreglo(arregloTexto){
	let letra;
	for(let i=0;i<arregloTexto.length;i++){
		letra=arregloTexto[i];
		encontrarConsonantes(consonantes,letra);
		encontrarVocales(vocales,letra);
	}
	console.log(consonantesTexto)
	console.log(vocalesTexto)
}
console.log(arregloTexto);
arreglo(arregloTexto);