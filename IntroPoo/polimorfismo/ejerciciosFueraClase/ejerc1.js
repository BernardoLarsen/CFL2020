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
var Electrodomesticos = /** @class */ (function () {
    function Electrodomesticos(heladera_, televisor_, smarTv_, computadora_, escritorio_, notebook_) {
        this.heladera = heladera_;
        this.televisor = televisor_;
        this.smarTv = smarTv_;
        this.computadora = computadora_;
        this.escritorio = escritorio_;
        this.notebook = notebook_;
    }
    Electrodomesticos.prototype.getHeladera = function () {
        return this.heladera;
    };
    Electrodomesticos.prototype.setHeladera = function (nuevaHeladera) {
        this.heladera = nuevaHeladera;
    };
    Electrodomesticos.prototype.getTelevisor = function () {
        return this.televisor;
    };
    Electrodomesticos.prototype.setTelevisor = function (nuevoTelevisor) {
        this.televisor = nuevoTelevisor;
    };
    Electrodomesticos.prototype.getSmarTv = function () {
        return this.smarTv;
    };
    Electrodomesticos.prototype.setSmarTv = function (nuevoSmarTv) {
        this.smarTv = nuevoSmarTv;
    };
    Electrodomesticos.prototype.getComputadora = function () {
        return this.computadora;
    };
    Electrodomesticos.prototype.setComputadora = function (nuevaComputadora) {
        this.computadora = nuevaComputadora;
    };
    return Electrodomesticos;
}());
var Heladera = /** @class */ (function () {
    function Heladera(arrayBebidas, arrayLacteos, arrayFrutas, color_) {
        if (color_ === void 0) { color_ = "blanco"; }
        this.bebidas = arrayBebidas;
        this.lacteos = arrayLacteos;
        this.frutas = arrayFrutas;
        this.color = color_;
    }
    Heladera.prototype.getBebidas = function () {
        return this.bebidas;
    };
    Heladera.prototype.getLacteos = function () {
        return this.lacteos;
    };
    Heladera.prototype.getFrutas = function () {
        return this.frutas;
    };
    return Heladera;
}());
var Bebida = /** @class */ (function () {
    function Bebida(marca_, sabor_) {
        this.marca = marca_;
        this.sabor = sabor_;
    }
    return Bebida;
}());
var Lacteo = /** @class */ (function () {
    function Lacteo(nombre_) {
        this.nombre = nombre_;
    }
    return Lacteo;
}());
var Fruta = /** @class */ (function () {
    function Fruta(nombre_, paisExportador_) {
        this.nombre = nombre_;
        this.paisExportador = paisExportador_;
    }
    return Fruta;
}());
var Televisor = /** @class */ (function () {
    function Televisor(marca_, volumenActual_, brilloActual_) {
        this.marca = marca_;
        this.volumenActual = volumenActual_;
        this.brilloActual = brilloActual_;
        this.televisorEncendido = false;
        this.canalActual = 0;
    }
    Televisor.prototype.encenderApagar = function () {
        if (this.televisorEncendido) {
            this.televisorEncendido = false;
        }
        else {
            this.televisorEncendido = true;
        }
    };
    Televisor.prototype.aumentarBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Televisor.prototype.disminuirBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return Televisor;
}());
var Smartv = /** @class */ (function (_super) {
    __extends(Smartv, _super);
    function Smartv(marca_, volumenActual_, brilloActual_) {
        var _this = _super.call(this, marca_, volumenActual_, brilloActual_) || this;
        _this.aplicaciones = true;
        return _this;
    }
    Smartv.prototype.mirarNetflix = function () {
        console.log('Mirando Netflix...');
    };
    Smartv.prototype.mirarYoutube = function () {
        console.log('Mirando Youtube...');
    };
    Smartv.prototype.elegirBrillo = function (brillo) {
        this.brilloActual = brillo;
    };
    return Smartv;
}(Televisor));
var Computadora = /** @class */ (function () {
    function Computadora(marca_, volumenActual_) {
        this.marca = marca_;
        this.volumenActual = volumenActual_;
        this.velocidadActual = 5;
    }
    Computadora.prototype.getMarca = function () {
        return this.marca;
    };
    Computadora.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    Computadora.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    Computadora.prototype.getVelocidad = function () {
        return this.velocidadActual;
    };
    Computadora.prototype.navegar = function () {
        this.velocidadActual -= 3;
    };
    return Computadora;
}());
var Escritorio = /** @class */ (function (_super) {
    __extends(Escritorio, _super);
    function Escritorio(marca_, volumenActual_) {
        var _this = _super.call(this, marca_, volumenActual_) || this;
        _this.velocidadActual = 10;
        return _this;
    }
    Escritorio.prototype.navegar = function () {
        this.velocidadActual -= 2;
    };
    return Escritorio;
}(Computadora));
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook(marca_, volumenActual_) {
        var _this = _super.call(this, marca_, volumenActual_) || this;
        _this.velocidadActual = 15;
        return _this;
    }
    Notebook.prototype.navegar = function () {
        this.velocidadActual -= 1;
    };
    return Notebook;
}(Computadora));
var arrayFrutas = [], arrayBebidas = [], arrayLacteos = [];
function llenarArrays() {
    var fruta1 = new Fruta("Banana", "Ecuador");
    var fruta2 = new Fruta("Manzana", "Argentina");
    arrayFrutas = [fruta1, fruta2];
    var bebida1 = new Bebida("Coca", "Cola");
    var bebida2 = new Bebida("Sprite", "Lima");
    arrayBebidas = [bebida1, bebida2];
    var lacteo1 = new Lacteo("Queso");
    var lacteo2 = new Lacteo("Manteca");
    arrayLacteos = [lacteo1, lacteo2];
}
llenarArrays();
var heladera = new Heladera(arrayBebidas, arrayLacteos, arrayFrutas);
var televisor = new Televisor("Samsung", 0, 0);
var teleSmart = new Smartv("LG", 10, 50);
var computadora = new Computadora("Razer", 10);
var notebook = new Notebook("LG", 15);
var escritorio = new Escritorio("Philips", 20);
var electrodomesticos = new Electrodomesticos(heladera, televisor, teleSmart, computadora, escritorio, notebook);
console.log(electrodomesticos);
