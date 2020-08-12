"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(marca, color, año, modelo, cajaCambio, patente) {
        this.marca = marca;
        this.color = color;
        this.anio = año;
        this.modelo = modelo;
        this.cajaCambio = cajaCambio;
        this._patente = patente;
        this.velocidadActual = 0;
    }
    Auto.prototype.GetPatente = function () {
        return this._patente;
    };
    Auto.prototype.SetColor = function (nuevoColor) {
        return this.color = nuevoColor;
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, color, año, modelo, cajaCambio, patente) {
        return _super.call(this, marca, color, año, modelo, cajaCambio, patente) || this;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 40;
    };
    return AutoCarreras;
}(Auto));
var autoComun = new Auto("Ford", "negro", 2020, "Focus", true, "AI 569 MI");
var autoDeCarreras = new AutoCarreras("Ferrari", "rojo", 2020, "Full", false, "AA 258 MA");
autoComun.acelerar();
autoDeCarreras.acelerar();
console.log(autoComun);
console.log(autoDeCarreras);
