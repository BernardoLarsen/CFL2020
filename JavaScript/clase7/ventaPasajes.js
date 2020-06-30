let readlineSync= require("readline-sync");
let butacas= new Array(60);
function venderPasajes(butacas){
	for(let i=0;i<butacas.length;i++){
		butacas[i]=readlineSync.questionInt("ingrese el numero de asciento que desea");
		
	}
}
//ES CON MATRICES