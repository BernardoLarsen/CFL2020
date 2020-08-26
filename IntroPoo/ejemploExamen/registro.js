"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
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
    RegistroAutomotor.prototype.buscarPatente = function (patenteIngresada, array) {
        for (var i = 0; i < array.length; i++) {
            if (patenteIngresada == array[i].GetPatente()) {
                return i;
            }
            else {
                return "la patente no existe en el registro";
            }
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patenteIngresada) {
        if (this.buscarPatente(patenteIngresada, this.arrayAuto)) {
            this.arrayAuto.splice(this.buscarPatente(patenteIngresada, this.arrayAuto), 1);
        }
    };
    RegistroAutomotor.prototype.eliminarMoto = function (patenteIngresada) {
        if (this.buscarPatente(patenteIngresada, this.arrayMoto)) {
            this.arrayMoto.splice(this.buscarPatente(patenteIngresada, this.arrayMoto), 1);
        }
    };
    RegistroAutomotor.prototype.eliminarCamion = function (patenteIngresada) {
        if (this.buscarPatente(patenteIngresada, this.arrayCamion)) {
            this.arrayCamion.splice(this.buscarPatente(patenteIngresada, this.arrayCamion), 1);
        }
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.arrayAuto.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.arrayMoto.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.arrayCamion.push(camion);
    };
    RegistroAutomotor.prototype.getAuto = function () {
        return this.arrayAuto;
    };
    RegistroAutomotor.prototype.getMoto = function () {
        return this.arrayMoto;
    };
    RegistroAutomotor.prototype.getCamion = function () {
        return this.arrayCamion;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
