'use strict';
function actualizarSaludo(){
    let miInput= document.getElementById('miInput');
    let input=miInput.value;
    let mih1=document.getElementById('mih1');
    mih1.innerHTML= "Hola! "+ input;    
}
