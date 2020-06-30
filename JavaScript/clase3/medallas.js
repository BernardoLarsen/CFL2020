let readlineSync = require("readline-sync");
let posicionLlegada = readlineSync.questionInt("indicar posicion de llegada del competidor");
switch(posicionLlegada){
	case 1:
		console.log("Entregar medalla de oro");
		break;
	case 2:
		console.log("Entregar medalla de plata");
		break;
	case 3:
		console.log("Entregar medalla de bronce");
		break;
	default:
		console.log("Entregar mencion de participacion");
}