class Electrodomesticos{
    private heladera:Heladera;
    private televisor:Televisor;
    private smarTv:Smartv;
    private computadora:Computadora;
    private escritorio:Escritorio;
    private notebook:Notebook;

    public constructor(heladera_:Heladera, televisor_:Televisor, smarTv_:Smartv, computadora_:Computadora,escritorio_:Escritorio, notebook_:Notebook){
        this.heladera=heladera_;
        this.televisor=televisor_;
        this.smarTv=smarTv_;
        this.computadora=computadora_;
        this.escritorio=escritorio_;
        this.notebook=notebook_;
    }
    public getHeladera():Heladera{
        return this.heladera;
    }
    public setHeladera(nuevaHeladera:Heladera):void{
        this.heladera=nuevaHeladera;
    }
    public getTelevisor():Televisor{
        return this.televisor;
    }
    public setTelevisor(nuevoTelevisor:Televisor):void{
        this.televisor=nuevoTelevisor;
    }
    public getSmarTv():Smartv{
        return this.smarTv;
    }
    public setSmarTv(nuevoSmarTv:Smartv):void{
        this.smarTv=nuevoSmarTv;
    }
    public getComputadora():Computadora{
        return this.computadora;
    }
    public setComputadora(nuevaComputadora:Computadora):void{
        this.computadora=nuevaComputadora;
    }
}

class Heladera{
    private bebidas:Bebida[];
    private lacteos:Lacteo[];
    private frutas:Fruta[];
    private color:string;

    public constructor(arrayBebidas:Bebida[], arrayLacteos:Lacteo[], arrayFrutas:Fruta[], color_:string="blanco"){
        this.bebidas=arrayBebidas;
        this.lacteos=arrayLacteos;
        this.frutas=arrayFrutas;
        this.color=color_;
    }
    public getBebidas():Bebida[]{
        return this.bebidas;
    }
    public getLacteos():Lacteo[]{
        return this.lacteos;
    }
    public getFrutas():Fruta[]{
        return this.frutas;
    }
}

class Bebida{
    private marca:string;
    private sabor:string;

    public constructor(marca_:string, sabor_:string){
        this.marca=marca_;
        this.sabor=sabor_;
    }
}

class Lacteo{
    private nombre:string;

    public constructor(nombre_:string){
        this.nombre=nombre_;
    }
}

class Fruta{
    private nombre:string;
    private paisExportador:string;

    public constructor(nombre_:string, paisExportador_:string){
        this.nombre=nombre_;
        this.paisExportador=paisExportador_;
    }
}

class Televisor{
    private marca:string;
    private televisorEncendido:boolean;
    protected volumenActual:number;
    protected brilloActual:number;
    protected canalActual: number;

    public constructor(marca_:string, volumenActual_:number, brilloActual_:number,){
        this.marca=marca_;
        this.volumenActual=volumenActual_;
        this.brilloActual=brilloActual_;
        this.televisorEncendido=false;
        this.canalActual=0;
    }
    public encenderApagar():void{
        if(this.televisorEncendido){
            this.televisorEncendido=false;
        }else{
            this.televisorEncendido=true;
        }
    }
    public aumentarBrillo():void{
        this.brilloActual= this.brilloActual+1;
    }
    public disminuirBrillo():void{
        this.brilloActual=this.brilloActual-1;
    }
    public cambiarCanal(canal: number): void {
        this.canalActual = canal;
    }
    public subirVolumen(): void {
        this.volumenActual += 1;
    }
    public bajarVolumen(): void {
        this.volumenActual -= 1;
    } 
}
class Smartv extends Televisor{
    private aplicaciones:boolean;

    public constructor(marca_:string, volumenActual_:number, brilloActual_:number){
        super(marca_, volumenActual_, brilloActual_);
        this.aplicaciones=true;
    }
    public mirarNetflix(): void {
        console.log('Mirando Netflix...');
    }
    public mirarYoutube(): void {
        console.log('Mirando Youtube...');
    }
    public elegirBrillo(brillo:number){
        this.brilloActual=brillo;
    }
}

class Computadora{
    private marca:string
    protected volumenActual:number;
    protected velocidadActual:number;

    public constructor(marca_:string, volumenActual_:number){
        this.marca=marca_;
        this.volumenActual=volumenActual_;
        this.velocidadActual=5;
    }
    public getMarca():string{
        return this.marca;
    }
    public subirVolumen(): void{
        this.volumenActual += 1;
    }
    public bajarVolumen(): void{
        this.volumenActual -= 1;
    }
    public getVelocidad():number{
        return this.velocidadActual;
    }
    public navegar(){
        this.velocidadActual-=3;
    }
}
class Escritorio extends Computadora{
    public constructor(marca_:string, volumenActual_:number){
        super(marca_,volumenActual_);
        this.velocidadActual=10;
    }
    public navegar(){
        this.velocidadActual-=2;
    }
}
class Notebook extends Computadora{
    public constructor(marca_:string, volumenActual_:number){
        super(marca_,volumenActual_);
        this.velocidadActual=15;
    }
    public navegar(){
        this.velocidadActual-=1;
    }
}
let arrayFrutas:Fruta[]=[],arrayBebidas:Bebida[]=[],arrayLacteos:Lacteo[]=[];
function llenarArrays(){
    let fruta1:Fruta=new Fruta("Banana", "Ecuador");
    let fruta2:Fruta=new Fruta("Manzana", "Argentina");
    arrayFrutas=[fruta1,fruta2];
    let bebida1:Bebida=new Bebida("Coca","Cola");
    let bebida2:Bebida=new Bebida("Sprite", "Lima");
    arrayBebidas=[bebida1,bebida2];
    let lacteo1:Lacteo=new Lacteo("Queso");
    let lacteo2:Lacteo=new Lacteo("Manteca");
    arrayLacteos=[lacteo1,lacteo2];
}
llenarArrays();
let heladera:Heladera= new Heladera(arrayBebidas, arrayLacteos, arrayFrutas);
let televisor:Televisor= new Televisor("Samsung", 0, 0);
let teleSmart:Smartv= new Smartv("LG", 10,50);
let computadora:Computadora=new Computadora("Razer", 10);
let notebook:Notebook=new Notebook("LG",15);
let escritorio:Escritorio=new Escritorio("Philips", 20);
let electrodomesticos:Electrodomesticos=new Electrodomesticos(heladera,televisor,teleSmart,computadora,escritorio,notebook);
console.log(electrodomesticos);