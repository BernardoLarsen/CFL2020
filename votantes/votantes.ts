import * as fs from 'fs';
let personas: string =fs.readFileSync("personas.txt", "utf-8");
let escuelas: string =fs.readFileSync("escuelas.txt", "utf-8");
let arregloPersonas: string[]= personas.split(",");
console.log(arregloPersonas);
let arregloEscuelas: string[]= escuelas.split(",");
console.log(arregloEscuelas);

function intercambiar(arreglo, i, j){
    let aux;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}
function comparar(arreglo, i, j){
    let comparacion;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
}
function seleccion(arreglo){
    let i, j, posicion;
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
console.log("arreglo ordenado:" ,arregloPersonas);