let readlineSync= require("readline-sync");
let cantidad=readlineSync.questionInt("ingrese la cantidad de personas");
let nombres= new Array(cantidad);
let años= new Array(cantidad);
let altura= new Array(cantidad);
let min,auxiliar,auxiliarNombre,auxiliarAltura;
function llenarArrays(){
	for(let i=0;i<cantidad;i++){
		nombres[i]=readlineSync.question("ingrese el nombre: ");
		años[i]=readlineSync.questionInt("ingrese edad: ");
		altura[i]=readlineSync.questionFloat("ingrese la altura: ");
	}
}
function ordenarYMostrar(){
	for(let indice=0;indice<cantidad;indice++){
		min=indice;
		for(let j=indice+1;j<cantidad;j++){
			if(años[j]<años[min]){
				min=j;
			}else if(años[j]==años[min]){
					if(altura[j]<altura[min]){
						min=j;
					}
			}
		}
		auxiliar=años[indice];
		auxiliarNombre=nombres[indice];
		auxiliarAltura=altura[indice];
		
		años[indice]=años[min];
		nombres[indice]=nombres[min];
		altura[indice]=altura[min];
		
		años[min]=auxiliar;
		nombres[min]=auxiliarNombre;
		altura[min]=auxiliarAltura;
	}
	console.log("");
	// console.log(nombres);
	// console.log(años);
	// return console.log(altura);
	for(let contador=0;contador<cantidad;contador++){
		console.log(nombres[contador],"de edad:",años[contador],"y de altura:",altura[contador]);
	}
}
llenarArrays();
ordenarYMostrar();