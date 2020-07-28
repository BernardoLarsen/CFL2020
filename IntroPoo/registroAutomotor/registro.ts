import * as fs from "fs";
import * as ReadlineSync from "readline-sync";

class Auto{
    private marca: string;
    private color: string;
    private año: number;
    private modelo: string;
    private cajaCambio: boolean; // SI ES TRUE ES AUTOMATICO.. SI ES FALSE ES MANUAL
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
class RegistroAutomotor{
    private array:Auto[];

    constructor(array?:Auto[]){
        if(array==undefined||array==null){
            this.array=[];
        }else{
            this.array=array
        }
    }

    public buscarPatente(patenteIngresada:string):any{
        for(let i:number=0;i<this.array.length;i++){
            if(patenteIngresada==this.array[i].GetPatente()){
                return i;
            }
            else{
                return "la patente no existe en el registro";
            }
        }
    }
    public eliminarAuto(patenteIngresada:string){
        if(this.buscarPatente(patenteIngresada)){
            this.array.splice(this.buscarPatente(patenteIngresada),1);
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
        this.array.push(nuevoAuto);
    }
    public actualizar(patenteIngresada:string):Auto{
        let opcion:number=ReadlineSync.questionInt("ingrese 1 para cambiar de color, 0 para salir")
        while(opcion!=0){
            let nuevoColor=ReadlineSync.question("ingrese el nuevo color del coche: ");
            if(this.buscarPatente(patenteIngresada)){
                this.array[this.buscarPatente(patenteIngresada)].SetColor(nuevoColor);   
            }else{
                console.log("el auto buscado no esta");
            }
        }
        return this.array[this.buscarPatente(patenteIngresada)];
    }
}
let lista:string=fs.readFileSync("autos.txt", "utf-8");
let arrayAutos:string[]=lista.split("\r\n");

function llenarArreglos(array:string[]):Auto[] {
    let arrayRegistro:Auto[]=[];
    for(let indice:number=0;indice<arrayAutos.length;indice++){
        let cadena:any[]=arrayAutos[indice].split(",")
        let marca:string= cadena[0];
        let color:string=cadena[1];
        let año:number=cadena[2];
        let modelo:string=cadena[3];
        let cajaCambio:boolean=cadena[4];
        let patente:string=cadena[5];
        arrayRegistro.push(new Auto(marca,color,año,modelo,cajaCambio,patente));
    }
    return arrayRegistro;
}

let marca:string,color:string,año:number,modelo:string,cajaCambio:boolean,patente:string;
let registro: RegistroAutomotor= new RegistroAutomotor(llenarArreglos(arrayAutos))
console.log(registro);