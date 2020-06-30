let readlineSync= require('readline-Sync');
let vuelta1= readlineSync.questionFloat("ingrese la vuelta 1");
let vuelta2= readlineSync.questionFloat("ingrese la vuelta 2");
let vuelta3= readlineSync.questionFloat("ingrese la vuelta 3");
let vuelta4= readlineSync.questionFloat("ingrese la vuelta 4");
let tiempoTotal= vuelta1+vuelta2+vuelta3+vuelta4
console.log("tiempo total",tiempoTotal);
console.log("promedio de vuelta:",tiempoTotal/4);