"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var Monitor = /** @class */ (function () {
    function Monitor(encendido, brillo, limpieza) {
        this.monitorEncendido = encendido;
        this.brilloActual = brillo;
        this.limpio = limpieza;
    }
    Monitor.prototype.encenderApagar = function () {
        if (this.monitorEncendido) {
            this.monitorEncendido = false;
        }
        else {
            this.monitorEncendido = true;
        }
    };
    Monitor.prototype.aumentarBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Monitor.prototype.disminuirBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.monitorLimpio = function () {
        if (this.limpio == false) {
            console.log("el monitor ha sido limpiado");
            this.limpio = true;
        }
    };
    Monitor.prototype.definirMarca = function (marca) {
        this.monitorMarca = marca;
    };
    return Monitor;
}());
var encendido = ReadlineSync.question("ingrese true si el monitor esta encendido, de lo contrario ingrese false: ");
var brillo = ReadlineSync.questionFloat("ingrese el brillo actual del monitor: ");
var limpieza = ReadlineSync.question("ingrese true si el monitor esta limpio, de lo contrario ingrese false: ");
var miMonitor = new Monitor(encendido, brillo, limpieza);
console.log(miMonitor);
var marca = ReadlineSync.question("ingrese la marca del monitor: ");
miMonitor.monitorLimpio();
miMonitor.definirMarca(marca);
console.log(miMonitor);
