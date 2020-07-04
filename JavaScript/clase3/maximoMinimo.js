let readlineSync =require("readline-sync");
let num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
let nuMayor=num;
let nuMenor=num;
while(num!=0){
	if(num>=nuMayor){
		nuMayor=num;
	}else{
		if(num<nuMenor){
			nuMenor=num;
		}
	}
	num=readlineSync.questionInt("ingrese un numero (para finalizar ingrese 0)");
}
	console.log("el numero mayor es:",nuMayor);
	console.log("el numero menor es:",nuMenor);