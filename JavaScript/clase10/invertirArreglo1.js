let readlineSync=require("readline-sync");
let array=[1,2,3,4,5,6,7]
//let ArrayInv=[];
let invertido=[];
function invertir(array,i,j){
    if(i<=array.length-1){
        // return invertido;
        return invertido.push(array[j]) , invertir(array,i+1,j-1);      
    }else{
        return invertido;
        // i++;
        // j--;
        // return invertido[i]= array[j], invertir(array);
        //array[i].push(array[j]);     
    }
}
console.log(invertir(array,0,array.length-1));