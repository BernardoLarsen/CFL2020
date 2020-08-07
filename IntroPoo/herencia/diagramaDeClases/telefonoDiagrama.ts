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

    
}
class Camara{
    public constructor(){
    }
    public sacarFotoCamara():string{
        return "sonido de captura";
    }
}

class TelefonoConCamara extends Telefono{
    private camara: Camara;
    public constructor(){
        super();
        this.camara=new Camara;
    }
    public sacarFoto():string{
        return this.camara.sacarFotoCamara();
    }
    public grabarVideo(){
        console.log("grabando...");
    }
    public cambiarVolumen(volumen:number){
        this.volumenActual=volumen;
    }
    public prenderApagarLinterna(){
        if(this.linternaPrendida==true){
            this.linternaPrendida=false;
        }else{
            this.linternaPrendida=true;
        }
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


let celularCamara:TelefonoConCamara=new TelefonoConCamara();
console.log(celularCamara);
celularCamara.prenderApagar()
celularCamara.hacerLlamada(2494556788);
console.log(celularCamara.sacarFoto());
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
console.log(nuevaCamara.sacarFotoCamara());