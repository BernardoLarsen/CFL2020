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
exports.Camion = void 0;
var auto_1 = require("./auto");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, color, año, modelo, cajaCambio, patente, acoplado_) {
        var _this = _super.call(this, marca, color, año, modelo, cajaCambio, patente) || this;
        _this.acoplado = acoplado_;
        return _this;
    }
    Camion.prototype.GetModelo = function () {
        return this.modelo;
    };
    return Camion;
}(auto_1.Auto));
exports.Camion = Camion;
