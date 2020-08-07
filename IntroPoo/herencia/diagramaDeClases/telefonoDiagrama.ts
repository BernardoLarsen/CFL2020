class Telefono{
    protected estaPrendido:boolean;
    private bateriaActual:number;
    protected volumenActual:number;
    protected linternaPrendida:boolean;

    public constructor(){
        this.estaPrendido=false;
        this.bateriaActual=100;
        this.volumenActual=5;
        this.linternaPrendida=false;
    }

    public mandarMensaje(mensaje:string){
        console.log(mensaje);
    }
    public hacerLlamada(numero:number){
        console.log("llamando a:",numero);
    }
    public subirVolumen(){
        this.volumenActual=+1;
    }
    public bajarVolumen(){
        this.volumenActual=+1;
    }
    public mostrarBateriaActual():number{
        return this.bateriaActual;
    }
    public prenderApagar(){
        if(this.estaPrendido==true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    public prenderApagarLinterna(){
        if(this.linternaPrendida==true){
            this.linternaPrendida=false;
        }else{
            this.linternaPrendida=true;
        }
    }
    
}
class TelefonoConCamara extends Telefono{
    public constructor(){
        super();
    }
    public sacarFoto(){
        console.log("*sonido de captura* clase TelefonoConCamara");
    }
    public grabarVideo(){
        console.log("grabando...");
    }
    public cambiarVolumen(volumen:number){
        this.volumenActual=volumen;
    }
}
class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number;
    public constructor(){
        super();
        this.frecuenciaActual=0;
    }
    public verFrecuenciaActual():number{
        return this.frecuenciaActual;
    }
    public siguienteFrecuencia(){
        this.frecuenciaActual=+1;
    }
    public anteriorFrecuencia(){
        this.frecuenciaActual=-1;
    }
    public cambiarVolumenClaseRadio(volumen:number){
        this.volumenActual=volumen;
    }
}
class Camara extends TelefonoConCamara{
    public constructor(){
        super();
    }
    public sacarFotoCamara(){
        console.log("*sonido de captura* class Camara");
    }
}

let celularCamara:TelefonoConCamara=new TelefonoConCamara();
console.log(celularCamara);
celularCamara.prenderApagar()
celularCamara.hacerLlamada(2494556788);
celularCamara.sacarFoto();
celularCamara.subirVolumen();
celularCamara.prenderApagarLinterna();
console.log(celularCamara);

console.log("---------------------------------------");

let celularRadio:TelefonoConRadio=new TelefonoConRadio();
console.log(celularRadio);
celularRadio.prenderApagar();
celularRadio.verFrecuenciaActual();
celularRadio.siguienteFrecuencia();
console.log(celularRadio);

let nuevaCamara:Camara=new Camara();
nuevaCamara.sacarFotoCamara();