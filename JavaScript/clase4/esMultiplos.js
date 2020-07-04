let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("ingrese el primer numero");
let numero2 = readlineSync.questionInt("ingrese el segundo numero");
let esMultiplo = (numero1, numero2) => {
	if(numero1%numero2 == 0){
		return true
	}else{
		return false
	}
}
console.log(esMultiplo(numero1,numero2));

// como hacer return de una condicion?? 