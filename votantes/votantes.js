"use strict";
exports.__esModule = true;
var fs = require("fs");
var personas = fs.readFileSync("personas.txt", "utf-8");
var escuelas = fs.readFileSync("escuelas.txt", "utf-8");
var arregloPersonas = personas.split(",");
console.log(arregloPersonas);
var arregloEscuelas = escuelas.split(",");
console.log(arregloEscuelas);
function intercambiar(arreglo, i, j) {
    var aux;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}
function comparar(arreglo, i, j) {
    var comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    }
    else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    }
    else {
        comparacion = 1;
    }
    return comparacion;
}
function seleccion(arreglo) {
    var i, j, posicion;
    for (i = 0; i < (arreglo.length - 1); i++) {
        posicion = i;
        for (j = i + 1; j < arreglo.length; j++) {
            if (comparar(arregloPersonas, posicion, j) == 1) {
                posicion = j;
            }
        }
        intercambiar(arregloPersonas, i, posicion);
    }
}
seleccion(arregloPersonas);
