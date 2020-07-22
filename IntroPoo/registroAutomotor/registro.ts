import * as fs from "fs";
import * as ReadlineSync from './node_modules/readline-sync';

class Auto{
    private marca: string;
    private color: string;
    private año: number;
    private modelo: string;
    private cajaCambio: boolean; // SI ES TRUE ES AUTOMATICO.. SI ES FALSE ES MANUAL
    private _patente: string;

    constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, _patente:string){
        this.marca=marca;
        this.color=color;
        this.año=año;
        this.modelo=modelo;
        this.cajaCambio=cajaCambio;
        this._patente=_patente;
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

    public buscarPatente(patenteIngresada:string): number{
        for(let i:number=0;i<this.array.length;i++){
            if(patenteIngresada==this.array[i].GetPatente()){
                return i;
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
        cajaCambio=ReadlineSync.question("Ingrese true por caja automatica o false por manual: ");
        patente=ReadlineSync.question("Ingrese patente: ");
        let nuevoAuto:Auto= new Auto(marca,color,año,modelo,cajaCambio,patente);
        arrayRegistro=nuevoAuto.split("");
    }
    public actualizar():string[]{
        let opcion:number=ReadlineSync.questionInt("ingrese 1 para cambiar de color, 0 para salir")
        while(opcion!=0){
            let nuevoColor=ReadlineSync.question("ingrese el nuevo color del coche: ");
            if(this.buscarPatente(patenteIngresada)){
                this.arrayRegistro[this.buscarPatente(patenteIngresada)].SetColor(nuevoColor);   
            }else{
                console.log("el auto buscado no esta");
            }
        }
        return registro[this.buscarPatente(patenteIngresada)];
    }
}

function llenarArreglos(){
    let lista:string=fs.readFileSync("autos.txt", "utf-8");
    let arrayAutos:string[]=lista("\r\n");
    for(let indice:number=0;indice<arrayAutos;indice++){

    }
    let arrayRegistro:string[]=arrayAutos.split(",");
    for(let i:number=0;i<arrayAutos.length;i++){
        let registro: Auto = new Auto(arrayRegistro[i]);
    }
}

let marca:string,color:string,año:number,modelo:string,cajaCambio:boolean,patente:string;
let patenteIngresada:string=ReadlineSync.question("ingrese patente a buscar: ");
//let autos=[new Auto("ford","rojo",2020,"focus",true,"AB 120 LO"),new Auto("ford","rojo",2020,"focus",true,"AB 145 JH")];
//let registro: RegistroAutomotor= new RegistroAutomotor(autos);
//console.log(registro.buscarPatente("AB 145 JH"));
// let arreglo: RegistroAutomotor[]= new RegistroAutomotor()
//console.log(registro);