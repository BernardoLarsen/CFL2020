class Televisor {
    protected canalActual: number;
    protected volumenActual: number;
    private estaPrendido: boolean;
    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    public cambiarCanal(canal: number): void {
        this.canalActual = canal;
    }
    public cambiarVolumen(volumen: number): void {
        this.volumenActual = volumen;
    }
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
}
 
 class SmartTV extends Televisor {
    public constructor() {
        super();
        this.canalActual = 0;
        this.volumenActual=0;
    }
    public mirarNetflix(): void {
        console.log('Mirando Netflix...');
    }
    public subirVolumen(): void {
        this.volumenActual += 1;
    }
    public bajarVolumen(): void {
        this.volumenActual -= 1;
    }
}
let nuevoTele:SmartTV=new SmartTV;
console.log(nuevoTele);
nuevoTele.prenderApagar();
nuevoTele.subirVolumen();
nuevoTele.cambiarVolumen(25);
nuevoTele.cambiarCanal(24);
console.log(nuevoTele);
nuevoTele.mirarNetflix();