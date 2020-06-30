let readlineSync=require("readline-sync");
let array1= new Array(6);
let array2= new Array(6);
let resultado= new Array(6);
for(let i=0;i<array1.length;i++){
	array1[i]=readlineSync.questionInt("ingrese numero en la posicion "+ i + " del primer array: ");
	array2[i]=readlineSync.questionInt("ingrese numero en la posicion "+ i + " del segundo array: ");
}
for(let i=0;i<array1.length;i++){
	resultado[i]=array1[i]+array2[i];
}
console.log("la suma de los dos arrays es: ",resultado);