import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
interface registro{
    buscarPatente(patenteIngresada:string,array:any):any;
    eliminarAuto(patenteIngresada:string):void;
    eliminarMoto(patenteIngresada:string):void;
    eliminarCamion(patenteIngresada:string):void;
    agregarAuto(auto:Auto):void;
    agregarMoto(moto:Moto):void;
    agregarCamion(camion:Camion):void;
    getAuto():Auto[];
    getMoto():Moto[];
    getCamion():Camion[];
}

export class RegistroAutomotor implements registro{
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

    public buscarPatente(patenteIngresada:string,array:any):any{
        for(let i:number=0;i<array.length;i++){
            if(patenteIngresada==array[i].GetPatente()){
                return i;
            }
            else{
                return "la patente no existe en el registro";
            }
        }
    }
    public eliminarAuto(patenteIngresada:string):void{
        if(this.buscarPatente(patenteIngresada,this.arrayAuto)){
            this.arrayAuto.splice(this.buscarPatente(patenteIngresada,this.arrayAuto),1);
        }
    }
    public eliminarMoto(patenteIngresada:string):void{
        if(this.buscarPatente(patenteIngresada,this.arrayMoto)){
            this.arrayMoto.splice(this.buscarPatente(patenteIngresada,this.arrayMoto),1);
        }
    }
    public eliminarCamion(patenteIngresada:string):void{
        if(this.buscarPatente(patenteIngresada,this.arrayCamion)){
            this.arrayCamion.splice(this.buscarPatente(patenteIngresada,this.arrayCamion),1);
        }
    }
    public agregarAuto(auto:Auto):void{
        this.arrayAuto.push(auto);
    }
    public agregarMoto(moto:Moto):void{
        this.arrayMoto.push(moto);
    }
    public agregarCamion(camion:Camion):void{
        this.arrayCamion.push(camion);
    }
     public getAuto():Auto[]{
        return this.arrayAuto;
    }
    public getMoto():Moto[]{
        return this.arrayMoto;
    }
    public getCamion():Camion[]{
        return this.arrayCamion;
    }
}
