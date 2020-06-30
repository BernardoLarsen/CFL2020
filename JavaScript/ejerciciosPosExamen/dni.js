let readlineSync= require("readline-sync");
let dni= readlineSync.questionInt("Ingrese su dni");
let arregloLetras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
function determinarNif(dni){
	if(dni>0 && dni<99999999){
	console.log(calcularLetras(arregloLetras));
	}else{
	console.log("El dni ingresado no es valido");
	}
}
function calcularLetras(arregloLetras){
	let resultado=dni%23;
	let respuesta=0;
	for(let i=0;i<arregloLetras.length;i++){
		if(resultado==arregloLetras.indexOf(arregloLetras[i])){
			respuesta=arregloLetras[i];
		}
	}
	return ("el resto es "+resultado+ " y corresponde la letra " +respuesta);
}
determinarNif(dni);