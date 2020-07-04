let readlineSync =require("readline-sync");
let salarioActual =readlineSync.questionFloat("ingrese su salario actual");
if(salarioActual<=15000){
	console.log("su porcentaje de aumento es del 20%");
	console.log("su aumento es de:", salarioActual*0.20);
	console.log("por lo tanto su salario aumentara a:",salarioActual+salarioActual*0.20);
}else{
	if(salarioActual>15000 && salarioActual<=20000){
		console.log("su porcentaje de aumento es del 10%");
		console.log("su aumento es de:", salarioActual*0.10);
		console.log("por lo tanto su salario aumentara a:", salarioActual+salarioActual*0.10);
	}else{
		if(salarioActual>20000 && salarioActual<=25000){
			console.log("su porcentaje de aumento es del 5%");
			console.log("su aumento es de:", salarioActual*0.05);
			console.log("por lo tanto su salario aumentara a:", salarioActual+salarioActual*0.05);		
		}else{
			if(salarioActual>25000){
				console.log("usted no tiene aumento");
			}
	
		}
	
	}
	
}