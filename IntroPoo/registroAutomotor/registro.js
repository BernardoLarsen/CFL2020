"use strict";
exports.__esModule = true;
var fs = require("fs");
var Auto = /** @class */ (function () {
    function Auto(marca, color, año, modelo, cajaCambio, _patente) {
        this.marca = marca;
        this.color = color;
        this.año = año;
        this.modelo = modelo;
        this.cajaCambio = cajaCambio;
        this._patente = _patente;
    }
    Auto.prototype.GetPatente = function () {
        return this._patente;
    };
    Auto.prototype.SetColor = function (nuevoColor) {
        return this.color = nuevoColor;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(array) {
        if (array == undefined || array == null) {
            this.array = [];
        }
        else {
            this.array = array;
        }
    }
    RegistroAutomotor.prototype.buscarPatente = function (patenteIngresada) {
        for (var i = 0; i < this.array.length; i++) {
            if (patenteIngresada == this.array[i].GetPatente()) {
                return i;
            }
        }
    };
    return RegistroAutomotor;
}());
var lista = fs.readFileSync("autos.txt", "utf-8");
var arrayAutos = lista.split("\r\n");
console.log(arrayAutos);
//let patenteIngresada:string=ReadlineSync.question("ingrese patente a buscar: ");
var autos = [new Auto("ford", "rojo", 2020, "focus", true, "AB 120 LO"), new Auto("ford", "rojo", 2020, "focus", true, "AB 145 JH")];
var registro = new RegistroAutomotor(autos);
console.log(registro.buscarPatente("AB 145 JH"));
// let arreglo: RegistroAutomotor[]= new RegistroAutomotor()
console.log(registro);
