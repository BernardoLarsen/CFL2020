'use strict';
function saludar(){
    console.log("Hola!!");
}
let contador=0;
function aumentarContador(){
    contador++;
    console.log(contador);
}
let mih1= document.querySelector("h1").innerHTML= "soy un h1 modificado en javaScript";
//mih1.innerHTML= "soy un h1 modificado en javaScript";
let img= document.getElementById("miImagen");
console.log(img.src);