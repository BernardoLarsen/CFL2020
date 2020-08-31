"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, color, año, modelo, cajaCambio, patente) {
        this.marca = marca;
        this.color = color;
        this.año = año;
        this.modelo = modelo;
        this.cajaCambio = cajaCambio;
        this._patente = patente;
    }
    Auto.prototype.GetPatente = function () {
        return this._patente;
    };
    Auto.prototype.SetColor = function (nuevoColor) {
        return this.color = nuevoColor;
    };
    return Auto;
}());
exports.Auto = Auto;
