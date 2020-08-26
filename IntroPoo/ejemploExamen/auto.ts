export class Auto{
    protected marca: string;
    private color: string;
    protected año: number;
    protected modelo: string;
    protected cajaCambio: boolean; // SI ES TRUE ES AUTOMATICO.. SI ES FALSE ES MANUAL
    protected _patente: string;

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