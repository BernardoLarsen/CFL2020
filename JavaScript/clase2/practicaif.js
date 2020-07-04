let readlineSync = require("readline-sync");
let edad = readlineSync.questionInt("ingrese su edad");
let altura = readlineSync.questionInt("ingrese su altura");
console.log(edad>18);
console.log(altura==180);
console.log (edad>18 && altura==180);
if(edad>18 && altura==180){
    console.log("puede pasar");
}else{
    console.log("no puede pasar");
}