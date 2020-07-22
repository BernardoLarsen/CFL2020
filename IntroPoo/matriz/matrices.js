"use strict";
var arrayMatriz;
var Matriz = /** @class */ (function () {
    function Matriz(array) {
        this.arrayMatriz = array;
    }
    Matriz.prototype.GetElemento = function (x, y) {
        return this.arrayMatriz[x][y];
    };
    return Matriz;
}());
var arrayLleno = [["amarillo", "rojo", "azul"], ["verde", "violeta", "naranja"], ["rojo violáceo", "rojo anaranjado", "amarillo anaranjado"]];
var objetoMatriz = new Matriz(arrayLleno);
console.log(objetoMatriz.GetElemento(0, 1));
