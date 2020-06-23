'use strict';
let cliente= document.getElementById("nombre");
let producto=document.getElementById("producto");
let precio=document.getElementById("precio");
let agregar=document.getElementById("agregar");
let calcular=document.getElementById("calcular");
let miDiv=document.getElementById("div");
let total=0;
//let arregloProducto=[];
//let arregloPrecio=[];

function agregarProductos(){
    // arregloProducto.push(producto.value);
    // arregloPrecio.push(precio.value);
    let nuevoP= document.createElement("p");
    nuevoP.innerHTML= "Producto: $"+ producto.value + " precio: $"+ precio.value;
    miDiv.appendChild(nuevoP);
    total+=parseInt(precio.value)  ;
}
agregar.addEventListener("click", agregarProductos);
calcular.addEventListener("click", function(e){
    let precioTotal= document.createElement("h2");
    precioTotal.innerHTML= "el total de la compra es: $"+ total;
    miDiv.appendChild(precioTotal);
});