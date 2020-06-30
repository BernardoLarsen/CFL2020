let readlineSync=require("readline-sync");
let sueldo=readlineSync.questionFloat("sueldo por mes");
let gastosFijos= sueldo*0.25
let ahorro=sueldo*0.3
let ocio=sueldo*0.2
let gastosVarios=sueldo*0.25
console.log("gastos fijos(luz,alquiler,etc)", gastosFijos);
console.log("ahorro/inversion", ahorro);
console.log("ocio", ocio);
console.log("gastos diarios", gastosVarios);