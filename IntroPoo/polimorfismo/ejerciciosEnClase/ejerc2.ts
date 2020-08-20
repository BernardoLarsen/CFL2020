import {Mesas} from "./mesas"
class MesaDeluz extends Mesas{
    public constructor(material_:string, cantPatas_:number, color_:string="blanco"){
        super(material_, cantPatas_, color_);
    }
    public pintar():void{
        this.color="Negro";
    }
}
class MesaDeComedor extends Mesas{
    public constructor(material_:string, cantPatas_:number, color_:string="blanco"){
        super(material_, cantPatas_, color_);
    }
    public pintar():void{
        this.color="Marron";
    }
}
let MesaDeLuz1:MesaDeluz= new MesaDeluz("madera",2);
let MesaDeComedor1:MesaDeComedor= new MesaDeComedor("madera",4,"roble");
console.log(MesaDeLuz1);    
console.log(MesaDeComedor1);
MesaDeLuz1.pintar();
MesaDeComedor1.pintar();
console.log(MesaDeLuz1);
console.log(MesaDeComedor1);