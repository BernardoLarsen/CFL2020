"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesas = void 0;
var Mesas = /** @class */ (function () {
    function Mesas(material_, cantPatas_, color_) {
        if (color_ === void 0) { color_ = "blanco"; }
        this.material = material_;
        this.cantPatas = cantPatas_;
        this.color = color_;
    }
    Mesas.prototype.getMaterial = function () {
        return this.material;
    };
    Mesas.prototype.getPatas = function () {
        return this.cantPatas;
    };
    Mesas.prototype.getColor = function () {
        return this.color;
    };
    Mesas.prototype.pintar = function (nuevoColor) {
        this.color = nuevoColor;
    };
    return Mesas;
}());
exports.Mesas = Mesas;
