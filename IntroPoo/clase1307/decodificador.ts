import * as ReadlineSync from './node_modules/readline-sync';
class Decodificador{
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    public constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
    public subirVolumen(): void {
        if (this.estaPrendido)
        this.volumenActual = this.volumenActual + 1;
    }
    public bajarVolumen(): void {
        if (this.estaPrendido)
        this.volumenActual = this.volumenActual - 1;
    }
    public  subirCanal(): void {
        if (this.estaPrendido)
        this.canalActual = this.canalActual + 1;
    }
    public bajarCanal(): void {
        if (this.estaPrendido)
        this.canalActual = this.canalActual - 1;
    }
    public elegirCanal(canal: number): void {
        if (this.estaPrendido)
        this.canalActual = canal;
    }
    public verCanalActual(): number {
        return this.canalActual;
    }
}
class Televisor{
    private estaPrendido: boolean;
    private decodificador: Decodificador;

   public constructor(decodificador: Decodificador) {
       this.decodificador=decodificador;

    }
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
        decodificador.prenderApagar();
    }
    public subirVolumen(): void {
        if(this.estaPrendido){
            this.decodificador.subirVolumen();
        }
    }
    public bajarVolumen(): void {
        if(this.estaPrendido){
            this.decodificador.bajarVolumen();
        }
    }
    public subirCanal(): void {
        if(this.estaPrendido){
            this.decodificador.subirCanal();
        }
    }
    public bajarCanal(): void {
        if(this.estaPrendido){
            this.decodificador.bajarCanal();
        }
    }
    public elegirCanal(canal: number): void {
        if(this.estaPrendido){
            this.decodificador.elegirCanal(canal);
        }
    }
    public verCanalActual(): number {
        return this.decodificador.verCanalActual();
        }
}

let decodificador: Decodificador= new Decodificador(0,0);
let primerTelevisor: Televisor= new Televisor(decodificador);
let canal:number=ReadlineSync.questionInt("ingrese el canal deseado: ");
primerTelevisor.prenderApagar();
primerTelevisor.subirVolumen();
primerTelevisor.elegirCanal(canal);
console.log(primerTelevisor);