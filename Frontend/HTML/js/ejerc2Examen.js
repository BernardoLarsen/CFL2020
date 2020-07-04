'use strict';
let lista= document.querySelector("ol");
let input= document.getElementById("miInput");
let botonGuardar=document.getElementById("guardar");
let botonLimpiar=document.getElementById("limpiar");
function agregarTarea(){
    let nuevaTarea= document.createElement("li");
    nuevaTarea.innerHTML= input.value;
    lista.appendChild(nuevaTarea);
}
botonGuardar.addEventListener("click", agregarTarea);

function limpiarLista(){
    lista.innerHTML=("");
}
botonLimpiar.addEventListener("click", limpiarLista);