import * as ReadlineSync from './node_modules/readline-sync';
let arrayPalabras: string[]=[];
function insertarPalabras (){
    let cantidad:number=ReadlineSync.questionFloat("ingrese cantidad de elementos");
    for(let contador:number=0;contador<cantidad;contador++){
        arrayPalabras[contador]= ReadlineSync.question("ingrese una palabra y vacio para finalizar: ")
    }
}
function buscarPalabra (palabra:string): number{
    for(let i:number=0;i<arrayPalabras.length;i++){
        if(palabra==arrayPalabras[i]){
            return i;
        }else if (i >= arrayPalabras.length){
            console.log("palabra no encontrada");
            return -1;
        }
    }
}
function eliminarPalabra ():string[]{
    let eliminar: string = ReadlineSync.question("ingrese la palabra para eliminar: ");
    if(buscarPalabra(eliminar)>-1){
        arrayPalabras.splice(buscarPalabra(eliminar),1);
        console.log("la palabra fue borrada");
    }
    return arrayPalabras;
}
insertarPalabras();
console.log("----------- Hasta ahi su arreglo -----------");
eliminarPalabra();
console.log("Su array actualizado es:");
console.log(arrayPalabras);