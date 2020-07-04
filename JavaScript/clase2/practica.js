let readlinesync = require("readline-sync");
let precioLitroNafta = readlinesync.questionInt("Ingrese el precio por litro de nafta");
let litrosCargados = readlinesync.questionInt("ingrese cantidad de litros cargados");

let resultado = precioLitroNafta * litrosCargados;
console.log("el precio final es:",resultado,"pesos");