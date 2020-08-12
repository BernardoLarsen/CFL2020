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
var mesas_1 = require("./mesas");
var MesaDeluz = /** @class */ (function (_super) {
    __extends(MesaDeluz, _super);
    function MesaDeluz(material_, cantPatas_, color_) {
        if (color_ === void 0) { color_ = "blanco"; }
        return _super.call(this, material_, cantPatas_, color_) || this;
    }
    MesaDeluz.prototype.pintar = function () {
        this.color = "Negro";
    };
    return MesaDeluz;
}(mesas_1.Mesas));
var MesaDeComedor = /** @class */ (function (_super) {
    __extends(MesaDeComedor, _super);
    function MesaDeComedor(material_, cantPatas_, color_) {
        if (color_ === void 0) { color_ = "blanco"; }
        return _super.call(this, material_, cantPatas_, color_) || this;
    }
    MesaDeComedor.prototype.pintar = function () {
        this.color = "Marron";
    };
    return MesaDeComedor;
}(mesas_1.Mesas));
var MesaDeLuz1 = new MesaDeluz("madera", 2);
var MesaDeComedor1 = new MesaDeComedor("madera", 4, "roble");
console.log(MesaDeLuz1);
console.log(MesaDeComedor1);
MesaDeLuz1.pintar();
MesaDeComedor1.pintar();
console.log(MesaDeLuz1);
console.log(MesaDeComedor1);
