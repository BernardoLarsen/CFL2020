let readlineSync =require("readline-sync");
let num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
let nuMayor=num;
let nuMenor=num;
let cantidad=0
let suma=0
while(num!=0){
	if(num>=nuMayor){
		nuMayor=num;
		cantidad=cantidad+1
	}else{
		if(num<nuMenor){
			nuMenor=num;
			cantidad=cantidad+1
		}
	}
		suma=suma+num
		num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
}
console.log("el numero mayor es:",nuMayor);
console.log("el numero menor es:",nuMenor);
console.log("el promedio de los numeros es", suma/cantidad);