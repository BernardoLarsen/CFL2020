class Fila{
    private arrayFila:any[];
    private ubicacion:number;

    public constructor(array:any[],ubicacion_:number){
        this.arrayFila=array;
        this.ubicacion=ubicacion_;
    }
    public GetUbicacion():number{
        return this.ubicacion;
    }
    public GetContenido():any[]{
        return this.arrayFila
    }
}
class Columna{
    private columna:string;

    public constructor(descripcionColumna:string){
        this.columna=descripcionColumna;
    }
    public descripcion():string{
        return this.columna;
    }
}
class Matriz{
    private arrayDeFilas:Fila[];
    private arrayDeColumnas:Columna[];

    public constructor(array:Fila[],array2:Columna[]){
        this.arrayDeFilas=array;
        this.arrayDeColumnas=array2;
    }

    public GetElemento(fila:number,columna:string):any{
        for(let i:number=0;i<this.arrayDeFilas.length;i++){
            for(let j:number=0;j<this.arrayDeColumnas.length;j++){
                if(this.arrayDeFilas[i].GetUbicacion()==fila  && columna==this.arrayDeColumnas[j].descripcion()){
                    return this.arrayDeFilas[i].GetContenido()[j];
                }
            }
        }
    }
}
let fila0:Fila= new Fila(["bernardo",20,"masculino"],0);
let fila1:Fila= new Fila(["antonella",28,"femenino"],1);
let fila2:Fila= new Fila(["nestor", 41, "masculino"],2);
let fila3:Fila= new Fila(["debora",31,"femenino"],3);
let columna0:Columna= new Columna("nombre");
let columna1:Columna= new Columna("edad");
let columna2:Columna= new Columna("sexo");

let arrayFilas:Fila[]=[fila0,fila1,fila2,fila3];
let arrayColumnas:Columna[]=[columna0,columna1,columna2];
let matriz:Matriz= new Matriz(arrayFilas,arrayColumnas);
console.log(matriz.GetElemento(2,"edad"));
console.log(matriz.GetElemento(1,"nombre"));