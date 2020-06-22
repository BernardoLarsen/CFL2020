'use strict';
let miBoton=document.getElementById("myButton");
let miDiv=document.querySelector("div");
function tirarDados (){
    let contar7=0;
    for(let i=0; i<1000;i++){
        let dado1= Math.floor(Math.random() * (7 - 1)) + 1;
        let dado2=Math.floor(Math.random() * (7 - 1)) + 1;
        let suma=dado1+dado2;
        if(suma===7){
            contar7++;
        }
    }
    let miP= document.createElement("p");
    miP.innerHTML="El numero 7 salio: "+contar7+" veces de 1000";
    miDiv.appendChild(miP);
}
miBoton.addEventListener("click", tirarDados);