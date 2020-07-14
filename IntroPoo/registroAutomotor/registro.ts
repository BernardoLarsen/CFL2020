import * as fs from "fs";
let lista:string=fs.readFileSync("autos.txt", "utf-8");
let arrayAutos:string[]=lista.split("\r\n");
console.log(arrayAutos);