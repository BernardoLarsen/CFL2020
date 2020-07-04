let readlineSync= require("readline-sync");
function fibonacci(n){
	let resultado=1;
	if(n==1){
		resultado=1;
	}else{
		resultado= resultado*fibonachi(n-1)+fibonachi(n-2);
		console.log(resultado)
	}
	return resultado;
}
let n= readlineSync.questionInt("ingrese un numero");
console.log(fibonacci(n));