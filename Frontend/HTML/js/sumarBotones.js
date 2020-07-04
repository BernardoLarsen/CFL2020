'use strict';
//InputElemento es mi contador
let inputElemento= 0;
function modificarElemento(){
    let elemento1= document.getElementById('elemento');
    inputElemento=elemento1.value;
    let miP=document.getElementById('primerElemento');
    miP.innerHTML= "Su numero es: "+ inputElemento;
}
function sumar(){
    inputElemento++;
    let miP2=document.getElementById('segundoElemento');
    miP2.innerHTML= "Ahora su numero es: "+ inputElemento;
}
function restar(){
    inputElemento--;
    let miP2=document.getElementById('segundoElemento');
    miP2.innerHTML= "Ahora su numero es: "+ inputElemento;
}
function sumarElemento(){
    let elemento2= document.getElementById('sumarInput').value;
    inputElemento= parseInt(inputElemento) + parseInt(elemento2);
    let miP2=document.getElementById('segundoElemento');
    miP2.innerHTML= "Ahora su numero es: "+ inputElemento;
}