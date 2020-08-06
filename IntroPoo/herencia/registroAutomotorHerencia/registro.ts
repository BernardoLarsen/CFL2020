import * as fs from "fs";
import * as ReadlineSync from "readline-sync";

class Auto{
    protected marca: string;
    private color: string;
    protected año: number;
    protected modelo: string;
    protected cajaCambio: boolean; // SI ES TRUE ES AUTOMATICO.. SI ES FALSE ES MANUAL
    private _patente: string;

    constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string){
        this.marca=marca;
        this.color=color;
        this.año=año;
        this.modelo=modelo;
        this.cajaCambio=cajaCambio;
        this._patente=patente;
    }
    public GetPatente():string{
        return this._patente;
    }
    public SetColor(nuevoColor:string):string{
        return this.color=nuevoColor;
    }
}
class Moto extends Auto{
    public constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string){
        super(marca,color,año,modelo,cajaCambio,patente);
        this.cajaCambio=false;
    }
    public GetAño():number{
        return this.año;
    }
    public GetMarca():string{
        return this.marca;
    }
}
class Camion extends Auto{
    private acoplado:boolean;
    public constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string,acoplado_:boolean){
        super(marca,color,año,modelo,cajaCambio,patente);
        this.acoplado=acoplado_;
    }
    public GetModelo():string{
        return this.modelo;
    }
}
class RegistroAutomotor{
    private arrayAuto:Auto[];
    private arrayCamion:Camion[];
    private arrayMoto:Moto[];

    constructor(array?:Auto[],arrayCamion_?:Camion[],arrayMoto_?:Moto[]){
        if(array==undefined||array==null){
            this.arrayAuto=[];
        }else{
            this.arrayAuto=array
        }
        if(arrayCamion_==undefined||arrayCamion_==null){
            this.arrayCamion=[];
        }else{
            this.arrayCamion=arrayCamion_;
        }
        if(arrayMoto_==undefined||arrayMoto_==null){
            this.arrayMoto=[];
        }else{
            this.arrayMoto=arrayMoto_;
        }
    }

    public buscarPatente(patenteIngresada:string):any{
        for(let i:number=0;i<this.arrayAuto.length;i++){
            if(patenteIngresada==this.arrayAuto[i].GetPatente()){
                return i;
            }
            else{
                return "la patente no existe en el registro";
            }
        }
    }
    public eliminarAuto(patenteIngresada:string){
        if(this.buscarPatente(patenteIngresada)){
            this.arrayAuto.splice(this.buscarPatente(patenteIngresada),1);
        }
    }
    public agregarAuto(){
        marca=ReadlineSync.question("Ingrese marca: ");
        color=ReadlineSync.question("Ingrese color: ");
        año=ReadlineSync.questionInt("Ingrese año fabricacion: ");
        modelo=ReadlineSync.question("Ingrese modelo: ");
        cajaCambio=(ReadlineSync.question("Ingrese true por caja automatica o false por manual: ")=="automatica");
        patente=ReadlineSync.question("Ingrese patente: ");
        let nuevoAuto:Auto= new Auto(marca,color,año,modelo,cajaCambio,patente);
        this.arrayAuto.push(nuevoAuto);
    }
    public actualizar(patenteIngresada:string):Auto{
        let opcion:number=ReadlineSync.questionInt("ingrese 1 para cambiar de color, 0 para salir")
        while(opcion!=0){
            let nuevoColor=ReadlineSync.question("ingrese el nuevo color del coche: ");
            if(this.buscarPatente(patenteIngresada)){
                this.arrayAuto[this.buscarPatente(patenteIngresada)].SetColor(nuevoColor);   
            }else{
                console.log("el auto buscado no esta");
            }
        }
        return this.arrayAuto[this.buscarPatente(patenteIngresada)];
    }
}
let listaAutos:string=fs.readFileSync("autos.txt", "utf-8");
let arrayAutos:string[]=listaAutos.split("\r\n");

let listaMotos:string=fs.readFileSync("motos.txt", "utf-8");
let arrayMotos:string[]=listaMotos.split("\r\n");

let listaCamiones:string=fs.readFileSync("camiones.txt", "utf-8");
let arrayCamiones:string[]=listaCamiones.split("\r\n");

function llenarAutos(arrayAutos:string[]):Auto[] {
    let arrayRegistroAuto:Auto[]=[];
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
function llenarMotos(arrayMotos:string[]):Moto[] {
    let arrayRegistroMoto:Moto[]=[];
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
function llenarCamiones(arrayCamiones:string[]):Camion[] {
    let arrayRegistroCamion:Camion[]=[];
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
let marca:string,color:string,año:number,modelo:string,cajaCambio:boolean,patente:string;
let registro: RegistroAutomotor= new RegistroAutomotor(llenarAutos(arrayAutos),llenarCamiones(arrayCamiones),llenarMotos(arrayMotos));
console.log(registro);