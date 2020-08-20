class Auto{
    private marca: string;
    private color: string;
    private anio: number;
    private modelo: string;
    private cajaCambio: boolean; // SI ES TRUE ES AUTOMATICO.. SI ES FALSE ES MANUAL
    private _patente: string;
    protected velocidadActual:number;

   public constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string){
        this.marca=marca;
        this.color=color;
        this.anio=año;
        this.modelo=modelo;
        this.cajaCambio=cajaCambio;
        this._patente=patente;
        this.velocidadActual=0;
    }
    public GetPatente():string{
        return this._patente;
    }
    public SetColor(nuevoColor:string):string{
        return this.color=nuevoColor;
    }
    public acelerar():void{
        this.velocidadActual+=10;
    }
}
class AutoCarreras extends Auto{
    public constructor(marca:string,color:string,año:number,modelo:string,cajaCambio:boolean, patente:string){
        super(marca,color,año,modelo,cajaCambio,patente);
    }
    public acelerar():void{
        this.velocidadActual+=40;
    }
}
let autoComun:Auto =new Auto("Ford","negro",2020,"Focus",true,"AI 569 MI");
let autoDeCarreras:AutoCarreras=new AutoCarreras("Ferrari","rojo",2020,"Full",false,"AA 258 MA");

autoComun.acelerar();
autoDeCarreras.acelerar();
console.log(autoComun);
console.log(autoDeCarreras);