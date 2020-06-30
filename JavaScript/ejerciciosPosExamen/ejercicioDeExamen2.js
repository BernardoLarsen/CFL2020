let readlineSync= require("readline-sync");
let texto=readlineSync.question("ingrese un texto");
let arregloTexto= texto.toLowerCase().split(" ").join("").split("");
let vocales= ["a","e","i","o","u"];
let consonantesTexto=[];
let vocalesTexto=[];
function vocalesConsonantes(arregloTexto){
	for(let i=0;i<arregloTexto.length;i++){
		if(arregloTexto[i]=="a" ||arregloTexto[i]=="e"||arregloTexto[i]=="i"||arregloTexto[i]=="o"||arregloTexto[i]=="u" && vocalesTexto.indexOf(letra)==-1){
			vocalesTexto.push(arregloTexto[i]);
		}
		else{
			consonantesTexto.push(arregloTexto[i]);
		}
	}
}
vocalesConsonantes(arregloTexto);
console.log("las vocales son:",vocalesTexto);
console.log("las consonantes son:",consonantesTexto);