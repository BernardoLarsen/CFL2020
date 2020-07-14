class Decodificador{
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number

    constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirVolumen(): void {
        if (this.estaPrendido)
        this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
        if (this.estaPrendido)
        this.volumenActual = this.volumenActual - 1
    }
    subirCanal(): void {
        if (this.estaPrendido)
        this.canalActual = this.canalActual + 1
    }
    bajarCanal(): void {
        if (this.estaPrendido)
        this.canalActual = this.canalActual - 1
    }
    elegirCanal(canal: number): void {
        if (this.estaPrendido)
        this.canalActual = canal;
    }
}
class Televisor{
    private estaPrendido: boolean;
    private decodificador: Decodificador;

   public constructor(decodificador: Decodificador) {
       this.decodificador=decodificador;

    }
    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirVolumen(): void {
        if(this.estaPrendido){
            this.decodificador.subirVolumen();
        }
    }
    bajarVolumen(): void {
        if(this.estaPrendido){
            this.decodificador.bajarVolumen();
        }
        
    }
    subirCanal(): void {
        if(this.estaPrendido){
            this.decodificador.subirCanal();
        }
        
    }
    bajarCanal(): void {
        if(this.estaPrendido){
            this.decodificador.bajarCanal();
        }
        
    }
    elegirCanal(canal: number): void {
        if(this.estaPrendido){
            this.decodificador.elegirCanal(canal);
        }
    }
}

let decodificador: Decodificador= new Decodificador(0,0);
let primerTelevisor: Televisor= new Televisor(decodificador);
primerTelevisor.elegirCanal(25);
console.log(primerTelevisor);