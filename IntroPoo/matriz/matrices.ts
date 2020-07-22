let arrayMatriz:string[][];
class Matriz{
    private arrayMatriz:string[][];

    constructor(array:string[][]){
        this.arrayMatriz=array;
    }

    public GetElemento(x:number,y:number):string{
        return this.arrayMatriz[x][y];
    }
}
let arrayLleno:string[][]=[["amarillo","rojo","azul"],["verde","violeta","naranja"],["rojo violáceo", "rojo anaranjado", "amarillo anaranjado"]];

let objetoMatriz:Matriz= new Matriz(arrayLleno);
console.log(objetoMatriz.GetElemento(0,1));