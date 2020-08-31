import * as fs from "fs";
import {Auto} from "./auto"
import {Moto} from "./moto"
import {Camion} from "./camion"
import { RegistroAutomotor } from "./registro"

let listaAutos:string=fs.readFileSync("autos.txt", "utf-8");
let arrayAutos:string[]=listaAutos.split("\r\n");

let listaMotos:string=fs.readFileSync("motos.txt", "utf-8");
let arrayMotos:string[]=listaMotos.split("\r\n");

let listaCamiones:string=fs.readFileSync("camiones.txt", "utf-8");
let arrayCamiones:string[]=listaCamiones.split("\r\n");

let arrayRegistroAuto:Auto[]=[];
function llenarAutos(arrayAutos:string[]):Auto[] {
    for(let indice:number=0;indice<arrayAutos.length;indice++){
        let cadena:any[]=arrayAutos[indice].split(",")
        let marca:string= cadena[0];
        let color:string=cadena[1];
        let año:number=cadena[2];
        let modelo:string=cadena[3];
        let cajaCambio:boolean=cadena[4];
        let patente:string=cadena[5];
        arrayRegistroAuto.push(new Auto(marca,color,año,modelo,cajaCambio,patente));
    }
    return arrayRegistroAuto;
}
let arrayRegistroMoto:Moto[]=[];
function llenarMotos(arrayMotos:string[]):Moto[] {
    for(let indice:number=0;indice<arrayMotos.length;indice++){
        let cadena:any[]=arrayMotos[indice].split(",")
        let marca:string= cadena[0];
        let color:string=cadena[1];
        let año:number=cadena[2];
        let modelo:string=cadena[3];
        let cajaCambio:boolean=cadena[4];
        let patente:string=cadena[5];
        arrayRegistroMoto.push(new Moto(marca,color,año,modelo,cajaCambio,patente));
    }
    return arrayRegistroMoto;
}
let arrayRegistroCamion:Camion[]=[];
function llenarCamiones(arrayCamiones:string[]):Camion[] {
    for(let indice:number=0;indice<arrayCamiones.length;indice++){
        let cadena:any[]=arrayCamiones[indice].split(",")
        let marca:string= cadena[0];
        let color:string=cadena[1];
        let año:number=cadena[2];
        let modelo:string=cadena[3];
        let cajaCambio:boolean=cadena[4];
        let patente:string=cadena[5];
        let acomplado:boolean=cadena[6];
        arrayRegistroCamion.push(new Camion(marca,color,año,modelo,cajaCambio,patente,acomplado));
    }
    return arrayRegistroCamion;
}

let registro: RegistroAutomotor= new RegistroAutomotor(llenarAutos(arrayAutos),llenarCamiones(arrayCamiones),llenarMotos(arrayMotos));

function convertir(obj:Auto|Moto|Camion):string{
    let texto: string[]=[];
    for(const [key,value] of Object.entries(obj)){
        texto.push(value);
    }
    return texto.join(',');
}
function convertirArreglos(array:Auto[]|Moto[]|Camion[]):string[]{
    let autos: string[]=[];
    for(let i:number=0;i<array.length;i++){
        let item: string= convertir(array[i]);
        autos.push(item);
    }
    return autos;
}
function actualizarTxtAutos(){
    let buffer:Buffer= Buffer.from(convertirArreglos(registro.getAuto()).join('\r\n'));
    fs.writeFile('autos.txt',buffer, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
function actualizarTxtMotos(){
    let buffer:Buffer= Buffer.from(convertirArreglos(registro.getMoto()).join('\r\n'));
    fs.writeFile('motos.txt',buffer, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
function actualizarTxtCamiones(){
    let buffer:Buffer= Buffer.from(convertirArreglos(registro.getCamion()).join('\r\n'));
    fs.writeFile('camiones.txt',buffer, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
let nuevaMotoAhora:Moto=new Moto("zanella","verde Violaseo", 1999,"zb",false,"ABF 786");
registro.agregarMoto(nuevaMotoAhora);
let nuevoAutoAhora:Auto=new Auto("ford","verde",2020,"focus",true,"AB 984 HJ");
registro.agregarAuto(nuevoAutoAhora);
let nuevoCamionAhora:Camion=new Camion("Scania", "blanco", 2020, "full",false,"DA 982 AA", true);
registro.agregarCamion(nuevoCamionAhora);

actualizarTxtMotos();
actualizarTxtAutos();
actualizarTxtCamiones();