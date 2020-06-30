let readlineSync= require("readline-sync");
let texto= readlineSync.question("ingrese un texto ");
let arregloTexto= texto.toLowerCase().split(" ").join("").split("");
function esCapicua(){
	let fin=arregloTexto.length-1;
	for (let i=0;i<fin;i++){
		if(arregloTexto[i]!=arregloTexto[fin]){
			return false;
		}
		fin--;
	}
	return true;
}
console.log(arregloTexto);
console.log(esCapicua());