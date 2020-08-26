import {Auto} from "./auto"
export class Moto extends Auto{
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