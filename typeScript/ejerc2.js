"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var arrayPalabras = [];
function insertarPalabras() {
    var cantidad = ReadlineSync.questionFloat("ingrese cantidad de elementos");
    for (var contador = 0; contador < cantidad; contador++) {
        arrayPalabras[contador] = ReadlineSync.question("ingrese una palabra y vacio para finalizar: ");
    }
}
function buscarPalabra(palabra) {
    //let buscar: string= ReadlineSync.question("ingrese la palabra a buscar: ");
    for (var i = 0; i < arrayPalabras.length; i++) {
        if (palabra == arrayPalabras[i]) {
            return i;
        }
        else if (i >= arrayPalabras.length) {
            console.log("palabra no encontrada");
            return -1;
        }
    }
}
function eliminarPalabra() {
    var eliminar = ReadlineSync.question("ingrese la palabra para eliminar: ");
    if (buscarPalabra(eliminar) > -1) {
        arrayPalabras.splice(buscarPalabra(eliminar), 1);
        console.log("la palabra fue borrada");
    }
    return arrayPalabras;
}
// function actualizarArray():string[]{
//     return arrayPalabras;
// }
insertarPalabras();
console.log("----------- Hasta ahi su arreglo -----------");
// console.log(buscarPalabra("bernardo"));
eliminarPalabra();
console.log("Su array actualizado es:");
console.log(arrayPalabras);
