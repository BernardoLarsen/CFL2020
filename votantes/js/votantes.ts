import * as fs from 'fs';
let personas: string =fs.readFileSync("personas.txt", "utf-8");
let escuelas: string =fs.readFileSync("escuelas.txt", "utf-8");
let arregloPersonas: string[]= personas.split(",");
console.log(arregloPersonas);
let arregloEscuelas: string[]= escuelas.split(",");
console.log(arregloEscuelas);

function intercambiar(arreglo:string[], i:number, j:number){
    let aux:string;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}
function comparar(arreglo:string[], i:number, j:number):number{
    let comparacion:number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
}
function seleccion(arreglo:string){
    let i:number, j:number, posicion:number;
    for (i = 0; i < (arreglo.length-1); i++) {
        posicion = i;
        for (j = i + 1; j < arreglo.length; j++) {
            if (comparar(arregloPersonas, posicion, j) == 1) {
                posicion = j;
            }
        }
    intercambiar(arregloPersonas, i, posicion);
    }
}
seleccion(arregloPersonas);

function asignarVotantes(arregloPersonas:string,arregloEscuelas:string){
    for(let i:number=0;i<arregloPersonas.length;i++){
        if(arregloPersonas[i]>="a" && arregloPersonas[i]<"d"){
            
        }
    }
}