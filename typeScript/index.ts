//import * as ReadlineSync from './node_modules/readline-sync';

let array :number[] = [1,2,3,4,5];
function sumarArray(array: number[]): number{
    let suma: number=0;
    for(let i:number =0; i< array.length;i++){
        suma+=array[i];
    }
    return suma;
}
console.log(sumarArray(array));