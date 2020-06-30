'use strict';
let lista= document.querySelector("ol");
let input= document.getElementById("miInput");
let boton=document.querySelector("button");
function agregarTarea(){
    let nuevaTarea= document.createElement("li");
    nuevaTarea.innerHTML= input.value;
    lista.appendChild(nuevaTarea);
}
boton.addEventListener("click", agregarTarea);

