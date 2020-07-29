"use strict";
var Fila = /** @class */ (function () {
    function Fila(array, ubicacion_) {
        this.arrayFila = array;
        this.ubicacion = ubicacion_;
    }
    Fila.prototype.GetUbicacion = function () {
        return this.ubicacion;
    };
    Fila.prototype.GetContenido = function () {
        return this.arrayFila;
    };
    return Fila;
}());
var Columna = /** @class */ (function () {
    function Columna(descripcionColumna) {
        this.columna = descripcionColumna;
    }
    Columna.prototype.descripcion = function () {
        return this.columna;
    };
    return Columna;
}());
var Matriz = /** @class */ (function () {
    function Matriz(array, array2) {
        this.arrayDeFilas = array;
        this.arrayDeColumnas = array2;
    }
    Matriz.prototype.GetElemento = function (fila, columna) {
        for (var i = 0; i < this.arrayDeFilas.length; i++) {
            for (var j = 0; j < this.arrayDeColumnas.length; j++) {
                if (this.arrayDeFilas[i].GetUbicacion() == fila && columna == this.arrayDeColumnas[j].descripcion()) {
                    return this.arrayDeFilas[i].GetContenido()[j];
                }
            }
        }
    };
    return Matriz;
}());
var fila0 = new Fila(["bernardo", 20, "masculino"], 0);
var fila1 = new Fila(["antonella", 28, "femenino"], 1);
var fila2 = new Fila(["nestor", 41, "masculino"], 2);
var fila3 = new Fila(["debora", 31, "femenino"], 3);
var columna0 = new Columna("nombre");
var columna1 = new Columna("edad");
var columna2 = new Columna("sexo");
var arrayFilas = [fila0, fila1, fila2, fila3];
var arrayColumnas = [columna0, columna1, columna2];
var matriz = new Matriz(arrayFilas, arrayColumnas);
console.log(matriz.GetElemento(2, "edad"));
console.log(matriz.GetElemento(1, "nombre"));