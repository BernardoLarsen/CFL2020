console.log("coloca el brazalete bien ajustado a la altura del codo");
console.log("coloca el disco del estetoscopio boca abajo debajo del brazalete");
console.log("colocate los auriculares del estetoscopio y sosten el medidor para verlo");
console.log("aprieta la bomba rapidamente hasta que el medidor indique 30 puntos por encima de tu presion sistolica habitual");
console.log("observa la lectura cuando escuches el primer latido, esa es tu presion sistolica");
console.log("cuando ya no escuches latidos, esa es tu presion diastolica");
let readlinesync = require('readline-sync');
let presion = readlinesync.question("indique la presion de la persona");
console.log(presion);