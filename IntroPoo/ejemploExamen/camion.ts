import {Auto} from "./auto"
export class Camion extends Auto{
    private acoplado:boolean;
    public constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string,acoplado_:boolean){
        super(marca,color,año,modelo,cajaCambio,patente);
        this.acoplado=acoplado_;
    }
    public GetModelo():string{
        return this.modelo;
    }
}