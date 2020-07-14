import * as ReadlineSync from './node_modules/readline-sync';
class Monitor{
    private monitorEncendido: boolean;
    private brilloActual: number;
    private limpio: boolean;
    private monitorMarca: string;

    constructor(encendido:boolean,brillo:number,limpieza:boolean){
        this.monitorEncendido=encendido;
        this.brilloActual=brillo;
        this.limpio=limpieza;
    }
    encenderApagar():void{
        if(this.monitorEncendido){
            this.monitorEncendido=false;
        }else{
            this.monitorEncendido=true;
        }
    }
    aumentarBrillo():void{
        this.brilloActual= this.brilloActual+1;
    }
    disminuirBrillo():void{
        this.brilloActual=this.brilloActual-1;
    }
    monitorLimpio():void{
        if(this.limpio==false){
            console.log("el monitor ha sido limpiado");
            this.limpio=true;
        }
    }
    definirMarca(marca:string):void{
        this.monitorMarca=marca;
    }
}
let encendido:boolean= ReadlineSync.question("ingrese true si el monitor esta encendido, de lo contrario ingrese false: ");
let brillo: number= ReadlineSync.questionFloat("ingrese el brillo actual del monitor: ");
let limpieza:boolean=ReadlineSync.question("ingrese true si el monitor esta limpio, de lo contrario ingrese false: ");
let miMonitor= new Monitor(encendido,brillo,limpieza);
miMonitor.monitorLimpio();
console.log(miMonitor);
let marca: string= ReadlineSync.question("ingrese la marca del monitor: ");
miMonitor.definirMarca(marca);
console.log(miMonitor);