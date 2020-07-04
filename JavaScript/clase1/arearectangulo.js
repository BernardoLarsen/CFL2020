let readlineSync= require('readline-Sync');
let base = readlineSync.questionInt("indicar base");
console.log (base)
let altura = readlineSync.questionInt("indicar altura");
console.log (altura)
let area = (base * altura)
console.log("el area del rectangulo es",area);