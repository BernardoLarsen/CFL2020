// Dados estos 5 arreglos que representan las ventas semanales del primer trimentre, 
// corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina, respectivamente.
let readlineSync= require("readline-sync");
// let numeroIngresado=readlineSync.questionInt("ingrese el numero del vendedor: ");
let vendedor1= [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; 
let vendedor2= [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; 
let vendedor3= [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; 
let vendedor4= [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let vendedor5= [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];
let nombres=["Camila","Franco","Sofia","Matias","Agustina"]
let arreglos=[vendedor1,vendedor2,vendedor3,vendedor4,vendedor5];
function vendedores(){
	let numeroDeVendedor=1;
	for(let i=0;i<5;i++){
		console.log("el vendedor/la vendedora",numeroDeVendedor,"es:", nombres[i]);
		for(let j=0;j<5;j++){
			if(j==nombres.indexOf(nombres[i])){
				console.log("su venta maxima fue:",getMaxOfArray(arreglos[i]), "en la semana:", arreglos[i].indexOf(getMaxOfArray(arreglos[i]))+1);
				console.log("su venta minima fue:",getMinOfArray(arreglos[i]), "en la semana:", arreglos[i].indexOf(getMinOfArray(arreglos[i]))+1);
				if(arreglos[i].indexOf(getMaxOfArray(arreglos[i])<4)){
					console.log("esta venta fue en el mes 1");
				}
				if(arreglos[i].indexOf(getMaxOfArray(arreglos[i]))<8){
					console.log("esta venta fue en el mes 2");
				}else{
					console.log("esta venta fue en el mes 3");
				}
			}
		}
		numeroDeVendedor++;
	}
}
function getMaxOfArray(arreglos){
  return (Math.max.apply(null, arreglos));
}
function getMinOfArray(arreglos){
  return (Math.min.apply(null, arreglos));
}
// function mayorVenta(){
	// vendedores();
	// console.log("su venta maxima fue:",getMaxOfArray(arreglos[i]), "en la semana:", arreglos[i].indexOf(getMaxOfArray(arreglos[i]))+1);
		// if(arreglos[i].indexOf(getMaxOfArray(arreglos[i])<4)){
			// console.log("la venta mayor fue en el mes 1");
		// }
		// if(arreglos[i].indexOf(getMaxOfArray(arreglos[i]))<8){
			// console.log("la venta mayor fue en el mes 2");
		// }else{
			// console.log("la venta mayor fue en el mes 3");
		// }
// }
vendedores();
// let maximaVenta(){
	
// }
// mayorVenta();