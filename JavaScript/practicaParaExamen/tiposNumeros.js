let readlineSync=require("readline-sync");
let dimension = readlineSync.questionInt("ingrese la dimension del arreglo");
let array = new Array(dimension);
let ceros=0, positivos = 0, negativos=0;
for(let i=0;i<array.length;i++){
	array[i]=readlineSync.questionInt("ingrese el numero en la posicion " + i + " ");
	if(array[i]==0){
		ceros++
	}
	if(array[i]>0){
		positivos++
	}
	if(array[i]<0){
		negativos++
	}
}
console.log("en el arreglo hay ", ceros, "ceros", positivos, " numeros positivos", negativos, "numeros negativos");