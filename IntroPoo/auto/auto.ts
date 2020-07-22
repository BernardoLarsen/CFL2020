import * as ReadlineSync from './node_modules/readline-sync';
class Auto{
    private estaPrendido: boolean;
    private velocidadActual: number;
    private estacionado: boolean;

    constructor(encendido:boolean,velocidad: number,aparcado: boolean){
        this.estaPrendido=encendido;
        this.velocidadActual=velocidad;
        this.estacionado=aparcado;
    }
    encendidoApagado():void{
        if(this.estaPrendido){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    aumentarVelocidad():void{
        this.velocidadActual=this.velocidadActual+1;
    }
    disminuirVelocidad():void{
        this.velocidadActual=this.velocidadActual-1;
    }
    estacionadoNoEstacionado():void{
        if(this.estacionado){
            this.estacionado=false;
        }else{
            this.estacionado=true;
        }
    }
    velocidadCrucero(velocidadDeseada:number):void{
        this.velocidadActual=velocidadDeseada;
    }
}
let aparcado: boolean=ReadlineSync.question("Indique true si su auto esta aparcado y false si no lo esta ");
let encedido: boolean=ReadlineSync.question("Ingrese true para el auto encendido y false para apagado ");
let velocidad: number= ReadlineSync.questionFloat("De estar encedido, indique su velocidad actual ");
let miAuto= new Auto(encedido,velocidad,aparcado);
console.log(miAuto);
let velocidadDeseada: number= ReadlineSync.questionFloat("ingrese la velocidad que desea llegar y mantener, sin tener que acelerar");
miAuto.velocidadCrucero(velocidadDeseada);
console.log(miAuto);