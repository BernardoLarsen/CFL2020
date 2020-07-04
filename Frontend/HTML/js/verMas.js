'use strict';
function cambiar(i){
    let misDivs= document.getElementsByClassName("div");
    misDivs[i].classList.toggle("hide");
}
let botones= document.getElementsByClassName("miBoton");
for(let i=0; i<botones.length;i++){
    botones[i].addEventListener("click", function(e){
        cambiar(i)
    });
}