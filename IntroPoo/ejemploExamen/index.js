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
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registro_1 = require("./registro");
var listaAutos = fs.readFileSync("autos.txt", "utf-8");
var arrayAutos = listaAutos.split("\r\n");
var listaMotos = fs.readFileSync("motos.txt", "utf-8");
var arrayMotos = listaMotos.split("\r\n");
var listaCamiones = fs.readFileSync("camiones.txt", "utf-8");
var arrayCamiones = listaCamiones.split("\r\n");
var arrayRegistroAuto = [];
function llenarAutos(arrayAutos) {
    for (var indice = 0; indice < arrayAutos.length; indice++) {
        var cadena = arrayAutos[indice].split(",");
        var marca = cadena[0];
        var color = cadena[1];
        var año = cadena[2];
        var modelo = cadena[3];
        var cajaCambio = cadena[4];
        var patente = cadena[5];
        arrayRegistroAuto.push(new auto_1.Auto(marca, color, año, modelo, cajaCambio, patente));
    }
    return arrayRegistroAuto;
}
var arrayRegistroMoto = [];
function llenarMotos(arrayMotos) {
    for (var indice = 0; indice < arrayMotos.length; indice++) {
        var cadena = arrayMotos[indice].split(",");
        var marca = cadena[0];
        var color = cadena[1];
        var año = cadena[2];
        var modelo = cadena[3];
        var cajaCambio = cadena[4];
        var patente = cadena[5];
        arrayRegistroMoto.push(new moto_1.Moto(marca, color, año, modelo, cajaCambio, patente));
    }
    return arrayRegistroMoto;
}
var arrayRegistroCamion = [];
function llenarCamiones(arrayCamiones) {
    for (var indice = 0; indice < arrayCamiones.length; indice++) {
        var cadena = arrayCamiones[indice].split(",");
        var marca = cadena[0];
        var color = cadena[1];
        var año = cadena[2];
        var modelo = cadena[3];
        var cajaCambio = cadena[4];
        var patente = cadena[5];
        var acomplado = cadena[6];
        arrayRegistroCamion.push(new camion_1.Camion(marca, color, año, modelo, cajaCambio, patente, acomplado));
    }
    return arrayRegistroCamion;
}
var registro = new registro_1.RegistroAutomotor(llenarAutos(arrayAutos), llenarCamiones(arrayCamiones), llenarMotos(arrayMotos));
function convertir(obj) {
    var texto = [];
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        texto.push(value);
    }
    return texto.join(',');
}
function convertirArreglos(array) {
    var autos = [];
    for (var i = 0; i < array.length; i++) {
        var item = convertir(array[i]);
        autos.push(item);
    }
    return autos;
}
function actualizarTxtAutos() {
    var buffer = Buffer.from(convertirArreglos(registro.getAuto()).join('\r\n'));
    fs.writeFile('autos.txt', buffer, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
function actualizarTxtMotos() {
    var buffer = Buffer.from(convertirArreglos(registro.getMoto()).join('\r\n'));
    fs.writeFile('motos.txt', buffer, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
function actualizarTxtCamiones() {
    var buffer = Buffer.from(convertirArreglos(registro.getCamion()).join('\r\n'));
    fs.writeFile('camiones.txt', buffer, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
var nuevaMotoAhora = new moto_1.Moto("zanella", "verde Violaseo", 1999, "zb", false, "ABF 786");
registro.agregarMoto(nuevaMotoAhora);
var nuevoAutoAhora = new auto_1.Auto("ford", "verde", 2020, "focus", true, "AB 984 HJ");
registro.agregarAuto(nuevoAutoAhora);
var nuevoCamionAhora = new camion_1.Camion("Scania", "blanco", 2020, "full", false, "DA 982 AA", true);
registro.agregarCamion(nuevoCamionAhora);
actualizarTxtMotos();
actualizarTxtAutos();
actualizarTxtCamiones();
