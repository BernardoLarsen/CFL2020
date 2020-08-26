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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var auto_1 = require("./auto");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, color, año, modelo, cajaCambio, patente) {
        var _this = _super.call(this, marca, color, año, modelo, cajaCambio, patente) || this;
        _this.cajaCambio = false;
        return _this;
    }
    Moto.prototype.GetAño = function () {
        return this.año;
    };
    Moto.prototype.GetMarca = function () {
        return this.marca;
    };
    return Moto;
}(auto_1.Auto));
exports.Moto = Moto;
