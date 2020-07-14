"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var Auto = /** @class */ (function () {
    function Auto(encendido, velocidad, aparcado) {
        this.estaPrendido = encendido;
        this.velocidadActual = velocidad;
        this.estacionado = aparcado;
    }
    Auto.prototype.encendidoApagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.aumentarVelocidad = function () {
        this.velocidadActual = this.velocidadActual + 1;
    };
    Auto.prototype.disminuirVelocidad = function () {
        this.velocidadActual = this.velocidadActual - 1;
    };
    Auto.prototype.estacionadoNoEstacionado = function () {
        if (this.estacionado) {
            this.estacionado = false;
        }
        else {
            this.estacionado = true;
        }
    };
    Auto.prototype.velocidadCrucero = function (velocidadDeseada) {
        this.velocidadActual = velocidadDeseada;
    };
    return Auto;
}());
var aparcado = ReadlineSync.question("Indique true si su auto esta aparcado y false si no lo esta ");
var encedido = ReadlineSync.question("Ingrese true para el auto encendido y false para apagado ");
var velocidad = ReadlineSync.questionFloat("De estar encedido, indique su velocidad actual ");
var miAuto = new Auto(encedido, velocidad, aparcado);
console.log(miAuto);
var velocidadDeseada = ReadlineSync.questionFloat("ingrese la velocidad que desea llegar y mantener, sin tener que acelerar");
miAuto.velocidadCrucero(velocidadDeseada);
console.log(miAuto);
