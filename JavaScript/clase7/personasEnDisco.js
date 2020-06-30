let edades = new Array(270);
let menores=0, mayores=0, total=0;
function Aleatorio(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}
function cargarArreglo(edades){
	for(let i= 0;i<edades.length;i++){
		edades[i]= Aleatorio(18,40);
		if(edades[i]<21){
			menores++
		}
		if(edades[i]>=21){
			mayores++
		}
		total++
	}
}
function mostrarArreglo(edades){
	for(let i= 0;i<edades.length;i++){
		edades[i];
	}
	console.log("las personas menores de 21 son: ", menores);
	console.log("las personas mayores o igual de 21 son: ", mayores);
	return ("el total de las personas son: "+ total);
}
cargarArreglo(edades);
console.log(mostrarArreglo(edades));
// para poder ver si es correcta la asignacion a menores o mayores, se hace un console.log en la funcion de mostrar arreglo en: console.log(edades[i])