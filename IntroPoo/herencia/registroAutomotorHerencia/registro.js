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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var ReadlineSync = __importStar(require("readline-sync"));
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
}(Auto));
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
}(Auto));
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(array, arrayCamion_, arrayMoto_) {
        if (array == undefined || array == null) {
            this.arrayAuto = [];
        }
        else {
            this.arrayAuto = array;
        }
        if (arrayCamion_ == undefined || arrayCamion_ == null) {
            this.arrayCamion = [];
        }
        else {
            this.arrayCamion = arrayCamion_;
        }
        if (arrayMoto_ == undefined || arrayMoto_ == null) {
            this.arrayMoto = [];
        }
        else {
            this.arrayMoto = arrayMoto_;
        }
    }
    RegistroAutomotor.prototype.buscarPatente = function (patenteIngresada) {
        for (var i = 0; i < this.arrayAuto.length; i++) {
            if (patenteIngresada == this.arrayAuto[i].GetPatente()) {
                return i;
            }
            else {
                return "la patente no existe en el registro";
            }
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patenteIngresada) {
        if (this.buscarPatente(patenteIngresada)) {
            this.arrayAuto.splice(this.buscarPatente(patenteIngresada), 1);
        }
    };
    RegistroAutomotor.prototype.agregarAuto = function () {
        marca = ReadlineSync.question("Ingrese marca: ");
        color = ReadlineSync.question("Ingrese color: ");
        año = ReadlineSync.questionInt("Ingrese año fabricacion: ");
        modelo = ReadlineSync.question("Ingrese modelo: ");
        cajaCambio = (ReadlineSync.question("Ingrese true por caja automatica o false por manual: ") == "automatica");
        patente = ReadlineSync.question("Ingrese patente: ");
        var nuevoAuto = new Auto(marca, color, año, modelo, cajaCambio, patente);
        this.arrayAuto.push(nuevoAuto);
    };
    RegistroAutomotor.prototype.actualizar = function (patenteIngresada) {
        var opcion = ReadlineSync.questionInt("ingrese 1 para cambiar de color, 0 para salir");
        while (opcion != 0) {
            var nuevoColor = ReadlineSync.question("ingrese el nuevo color del coche: ");
            if (this.buscarPatente(patenteIngresada)) {
                this.arrayAuto[this.buscarPatente(patenteIngresada)].SetColor(nuevoColor);
            }
            else {
                console.log("el auto buscado no esta");
            }
        }
        return this.arrayAuto[this.buscarPatente(patenteIngresada)];
    };
    return RegistroAutomotor;
}());
var listaAutos = fs.readFileSync("autos.txt", "utf-8");
var arrayAutos = listaAutos.split("\r\n");
var listaMotos = fs.readFileSync("motos.txt", "utf-8");
var arrayMotos = listaMotos.split("\r\n");
var listaCamiones = fs.readFileSync("camiones.txt", "utf-8");
var arrayCamiones = listaCamiones.split("\r\n");
function llenarAutos(arrayAutos) {
    var arrayRegistroAuto = [];
    for (var indice = 0; indice < arrayAutos.length; indice++) {
        var cadena = arrayAutos[indice].split(",");
        var marca_1 = cadena[0];
        var color_1 = cadena[1];
        var año_1 = cadena[2];
        var modelo_1 = cadena[3];
        var cajaCambio_1 = cadena[4];
        var patente_1 = cadena[5];
        arrayRegistroAuto.push(new Auto(marca_1, color_1, año_1, modelo_1, cajaCambio_1, patente_1));
    }
    return arrayRegistroAuto;
}
function llenarMotos(arrayMotos) {
    var arrayRegistroMoto = [];
    for (var indice = 0; indice < arrayMotos.length; indice++) {
        var cadena = arrayMotos[indice].split(",");
        var marca_2 = cadena[0];
        var color_2 = cadena[1];
        var año_2 = cadena[2];
        var modelo_2 = cadena[3];
        var cajaCambio_2 = cadena[4];
        var patente_2 = cadena[5];
        arrayRegistroMoto.push(new Moto(marca_2, color_2, año_2, modelo_2, cajaCambio_2, patente_2));
    }
    return arrayRegistroMoto;
}
function llenarCamiones(arrayCamiones) {
    var arrayRegistroCamion = [];
    for (var indice = 0; indice < arrayCamiones.length; indice++) {
        var cadena = arrayCamiones[indice].split(",");
        var marca_3 = cadena[0];
        var color_3 = cadena[1];
        var año_3 = cadena[2];
        var modelo_3 = cadena[3];
        var cajaCambio_3 = cadena[4];
        var patente_3 = cadena[5];
        var acomplado = cadena[6];
        arrayRegistroCamion.push(new Camion(marca_3, color_3, año_3, modelo_3, cajaCambio_3, patente_3, acomplado));
    }
    return arrayRegistroCamion;
}
var marca, color, año, modelo, cajaCambio, patente;
var registro = new RegistroAutomotor(llenarAutos(arrayAutos), llenarCamiones(arrayCamiones), llenarMotos(arrayMotos));
console.log(registro);
