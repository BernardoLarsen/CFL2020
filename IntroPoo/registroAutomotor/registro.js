"use strict";
exports.__esModule = true;
var fs = require("fs");
var lista = fs.readFileSync("autos.txt", "utf-8");
var arrayAutos = lista.split("\r\n");
console.log(arrayAutos);
