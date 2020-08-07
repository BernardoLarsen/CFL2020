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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.volumenActual = 5;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        console.log(mensaje);
    };
    Telefono.prototype.hacerLlamada = function (numero) {
        console.log("llamando a:", numero);
    };
    Telefono.prototype.subirVolumen = function () {
        this.volumenActual = +1;
    };
    Telefono.prototype.bajarVolumen = function () {
        this.volumenActual = +1;
    };
    Telefono.prototype.mostrarBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Telefono;
}());
var Camara = /** @class */ (function () {
    function Camara() {
    }
    Camara.prototype.sacarFotoCamara = function () {
        return "sonido de captura";
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        return this.camara.sacarFotoCamara();
    };
    TelefonoConCamara.prototype.grabarVideo = function () {
        console.log("grabando...");
    };
    TelefonoConCamara.prototype.cambiarVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    TelefonoConCamara.prototype.prenderApagarLinterna = function () {
        if (this.linternaPrendida == true) {
            this.linternaPrendida = false;
        }
        else {
            this.linternaPrendida = true;
        }
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 0;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    TelefonoConRadio.prototype.siguienteFrecuencia = function () {
        this.frecuenciaActual = +1;
    };
    TelefonoConRadio.prototype.anteriorFrecuencia = function () {
        this.frecuenciaActual = -1;
    };
    TelefonoConRadio.prototype.cambiarVolumenClaseRadio = function (volumen) {
        this.volumenActual = volumen;
    };
    return TelefonoConRadio;
}(Telefono));
var celularCamara = new TelefonoConCamara();
console.log(celularCamara);
celularCamara.prenderApagar();
celularCamara.hacerLlamada(2494556788);
console.log(celularCamara.sacarFoto());
celularCamara.subirVolumen();
celularCamara.prenderApagarLinterna();
console.log(celularCamara);
console.log("---------------------------------------");
var celularRadio = new TelefonoConRadio();
console.log(celularRadio);
celularRadio.prenderApagar();
celularRadio.verFrecuenciaActual();
celularRadio.siguienteFrecuencia();
console.log(celularRadio);
var nuevaCamara = new Camara();
console.log(nuevaCamara.sacarFotoCamara());
