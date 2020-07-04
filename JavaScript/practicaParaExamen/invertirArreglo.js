let readlineSync=require("readline-sync");
let dimension= readlineSync.questionInt("ingrese la dimension del array");
let array = new Array(dimension);
for(let i=0;i<array.length;i++){
	array[i]=readlineSync.questionInt("ingrese el numero en la posicion"+i+" ");
}
for(let i=array.length-1;i>=0;i--){
	console.log("el numero del indice", i, "es:", array[i]);
}