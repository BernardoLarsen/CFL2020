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
		//nombre del vendedor/ra
		console.log("el vendedor/la vendedora",numeroDeVendedor,"es:", nombres[i]);
		for(let j=0;j<5;j++){
			if(j==nombres.indexOf(nombres[i])){
				//Mayor y menor venta de cada vendedor
				console.log("su venta maxima fue:",getMaxOfArray(arreglos[i]), "en la semana:", arreglos[i].indexOf(getMaxOfArray(arreglos[i]))+1);
				console.log("su venta minima fue:",getMinOfArray(arreglos[i]), "en la semana:", arreglos[i].indexOf(getMinOfArray(arreglos[i]))+1);
				//Meses de las ventas
				if(arreglos[i].indexOf(getMaxOfArray(arreglos[i]))+1<4|| arreglos[i].indexOf(getMinOfArray(arreglos[i]))+1<4){
					console.log("ventas en el mes 1");
				}
				if(arreglos[i].indexOf(getMaxOfArray(arreglos[i]))+1<8|| arreglos[i].indexOf(getMinOfArray(arreglos[i]))+1<8){
					console.log("ventas en el mes 2");
				}else{
					console.log("ventas en el mes 3");
				}
			}
		}
		// Promedio Semanal de ventas
		let sumaSemana=0;
		let arregloConcatenado=[];
		arregloConcatenado= arregloConcatenado.concat(arreglos[i]);
		for(let m=0;m<vendedor1.length;m++){
			sumaSemana=sumaSemana+arregloConcatenado[m];
		}
		console.log("el promedio semanal es de:",sumaSemana/vendedor1.length);
		//Promedio de ventas del primer mes
		let sumaMes1=0;
		for(let n=0;n<4;n++){
			sumaMes1=sumaMes1+arregloConcatenado[n];
		}
		console.log("el promedio del primer mes es de:",sumaMes1/4);
		//Promedio de ventas del segundo mes
		let sumaMes2=0;
		for(let b=4;b<8;b++){
			sumaMes2=sumaMes2+arregloConcatenado[b];
		}
		console.log("el promedio del segundo mes es de:",sumaMes2/4);
		//Promedio de ventas del tercer mes
		let sumaMes3=0;
		for(let a=8;a<12;a++){
			sumaMes3=sumaMes2+arregloConcatenado[a];
		}
		console.log("el promedio del tercer mes es de:",sumaMes3/4);
		//espacio vacio para separar a los vendedores
		console.log("");
		numeroDeVendedor++;
	}
}
//funciones para encontrar el maximo y el minimo
function getMaxOfArray(arreglos){
  return (Math.max.apply(null, arreglos));
}
function getMinOfArray(arreglos){
  return (Math.min.apply(null, arreglos));
}
//llamo a la funcion principal vendedores
vendedores();