let readlineSync= require("readline-sync");
let n= readlineSync.questionInt("ingrese un numero");
function fibonacci(n){
	let resultado=1;
	if(n<2){
		resultado=n;
	}else{
		resultado=fibonacci(n-1)+fibonacci(n-2);
	}
	return resultado;
}

console.log("el fibonacci de:",n, "es:",fibonacci(n));