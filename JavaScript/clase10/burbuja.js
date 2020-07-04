let readlineSync=require("readline-sync");
let array=new Array(5);
let desorden=true;
for(let indice=0;indice<array.length;indice++){
	array[indice]=readlineSync.questionInt("ingrese un numero");
}
function burbuja(array){
	while(desorden){
		// console.log("entro al while");
		desorden=false;
		for(let posArray=0;posArray<array.length-1;posArray++){
			if(array[posArray]>array[posArray+1]){
				// console.log("entro al if");
				let auxiliar=array[posArray];
				array[posArray]=array[posArray+1];
				array[posArray+1]=auxiliar;
				desorden=true
			}
		}
	}
	return array;
}
// for(let i=0;i<array.length;i++){
	// for(let posArray=0;posArray<array.length-1;posArray++){
		// if(array[posArray]>array[posArray+1]){
			// let auxiliar=array[posArray];
			// array[posArray]=array[posArray+1];
			// array[posArray+1]=auxiliar;
		// }
	// }
// }
console.log(burbuja(array));