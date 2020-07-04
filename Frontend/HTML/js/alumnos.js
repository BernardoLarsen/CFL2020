'use strict';
class alumno{
    constructor(nombre, nota1, nota2, nota3){
        this.nombre=nombre;
        this.nota1=nota1;
        this.nota2=nota2;
        this.nota3=nota3;
    }
    mostrarAlumno=function (){
        return "Alumno "+ this.nombre+"--- Primer Nota= "+this.nota1+"-- Segunda Nota= "+this.nota2+"-- Tercer Nota= "+this.nota3;
    }
    calcularPromedio=function(){
        let total= (this.nota1+this.nota2+this.nota3)/3;
        let nuevoH=document.createElement("h2");
        nuevoH.innerHTML="El promedio del alumno: "+ alumnoPromedio.value + " es "+total;
        miDiv.appendChild(nuevoH);
    }
}
let nombreAlumno=document.querySelector(".nombre");
let primerNota=document.querySelector(".nota1");
let segundaNota=document.querySelector(".nota2");
let tercerNota=document.querySelector(".nota3");
let miDiv=document.querySelector(".div1");
let arregloAlumnos=[];
let cargar=document.getElementById("cargar");
let promedio=document.getElementById("promedio");
let alumnoPromedio=document.querySelector(".alumnoPromedio");
let lista= document.querySelector(".miUl");
let contador=0;

function cargarAlumnos(){
    arregloAlumnos.push(new alumno(nombreAlumno.value, parseInt(primerNota.value), parseInt(segundaNota.value), parseInt(tercerNota.value)));
    lista= document.querySelector(".miUl");
    let nuevoLi= document.createElement("li");
    nuevoLi.innerHTML= arregloAlumnos[arregloAlumnos.length-1].mostrarAlumno();
    lista.appendChild(nuevoLi);
    nombreAlumno.value="";
    primerNota.value="";
    segundaNota.value="";
    tercerNota.value="";
    contador++;
}
cargar.addEventListener("click", cargarAlumnos);

promedio.addEventListener("click", function(e){
    for(let i=0; i<arregloAlumnos.length;i++){
        if(alumnoPromedio.value===arregloAlumnos[i].nombre){
            arregloAlumnos[i].calcularPromedio();
        }
        else{
          alert("El Alumno no existe");
        }
    }
});
//let quitar=document.querySelector(".quitar");
//quitar.addEventListener("click", ()=>{
    //arregloAlumnos.pop();
    //lista.removeChild(lista.childNodes[]);

//})