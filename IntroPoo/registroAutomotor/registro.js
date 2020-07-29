"use strict";
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
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(array) {
        if (array == undefined || array == null) {
            this.array = [];
        }
        else {
            this.array = array;
        }
    }
    RegistroAutomotor.prototype.buscarPatente = function (patenteIngresada) {
        for (var i = 0; i < this.array.length; i++) {
            if (patenteIngresada == this.array[i].GetPatente()) {
                return i;
            }
            else {
                return "la patente no existe en el registro";
            }
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patenteIngresada) {
        if (this.buscarPatente(patenteIngresada)) {
            this.array.splice(this.buscarPatente(patenteIngresada), 1);
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
        this.array.push(nuevoAuto);
    };
    RegistroAutomotor.prototype.actualizar = function (patenteIngresada) {
        var opcion = ReadlineSync.questionInt("ingrese 1 para cambiar de color, 0 para salir");
        while (opcion != 0) {
            var nuevoColor = ReadlineSync.question("ingrese el nuevo color del coche: ");
            if (this.buscarPatente(patenteIngresada)) {
                this.array[this.buscarPatente(patenteIngresada)].SetColor(nuevoColor);
            }
            else {
                console.log("el auto buscado no esta");
            }
        }
        return this.array[this.buscarPatente(patenteIngresada)];
    };
    return RegistroAutomotor;
}());
var lista = fs.readFileSync("autos.txt", "utf-8");
var arrayAutos = lista.split("\r\n");
function llenarArreglos(array) {
    var arrayRegistro = [];
    for (var indice = 0; indice < arrayAutos.length; indice++) {
        var cadena = arrayAutos[indice].split(",");
        var marca_1 = cadena[0];
        var color_1 = cadena[1];
        var año_1 = cadena[2];
        var modelo_1 = cadena[3];
        var cajaCambio_1 = cadena[4];
        var patente_1 = cadena[5];
        arrayRegistro.push(new Auto(marca_1, color_1, año_1, modelo_1, cajaCambio_1, patente_1));
    }
    return arrayRegistro;
}
var marca, color, año, modelo, cajaCambio, patente;
var registro = new RegistroAutomotor(llenarArreglos(arrayAutos));
console.log(registro);
