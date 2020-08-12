export class Mesas{
    private material:string;
    private cantPatas:number;
    protected color:string;

    public constructor(material_:string, cantPatas_:number, color_:string="blanco"){
        this.material=material_;
        this.cantPatas=cantPatas_;
        this.color=color_;
    }
    public getMaterial():string{
        return this.material;
    }
    public getPatas():number{
        return this.cantPatas;
    }
    public getColor():string{
        return this.color;
    }
    public pintar(nuevoColor:string):void{
        this.color=nuevoColor;
    }
}