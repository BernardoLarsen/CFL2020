let readlineSync=require("readline-sync");
let texto = readlineSync.question("ingrese el texto para analizar ");
let arrayString= texto.split(" ").join("").split("");
let ocurrencia= new Array(arrayString.length);
let letras=[];
function analizarArray(arrayString){
	let letra;
	for(let i=0; i<arrayString.length;i++){
		letra=arrayString[i];
		ocurrencia[i]=0;
		for(let j=i; j<arrayString.length;j++){
			if(arrayString[j]==letra && arrayString.indexOf(letra)==i){
				ocurrencia[i]++;
			}
		}
	}
};
function mostrarResultado(arrayString,ocurrencia){
	for(let i=0; i<arrayString.length;i++){
		if(arrayString.indexOf(arrayString[i])==i){
			console.log("la letra "+ arrayString[i]+ " aparece "+ ocurrencia[i]+ " veces y tiene una probabilidad de ocurrencia de: "+ ocurrencia[i]/arrayString.length);
		}
	}
};
analizarArray(arrayString);
mostrarResultado(arrayString,ocurrencia);