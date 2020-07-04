//ALGORITMO SECRETO
let rl = require('readline-sync');
let elem, arr, nro, ocu;
elem = rl.questionInt('Ingrese tamaño: ');
nro = rl.questionInt('Ingrese número: ');
arr = new Array(elem);

function cargar(v,l) {
    for (let i=0; i<l; i++)
        v[i]=Math.floor(Math.random()*100);
}
function mostrar(v,l) {
    let c="";
    for (let i=0; i<l; i++)
        c+=v[i]+" ";
    console.log(c);
}
function metodo(v,l,n) {
    let oc;
    for (let i=0; i<l; i++)
        if (v[i]==n)
            oc++
}
cargar(arr,elem);
mostrar(arr,elem);
ocu = metodo(arr,elem,nro);
console.log("El número "+nro+" ... "+ocu);
















function metodo(v,l,n) {
    let oc;
    for (let i=0; i<l; i++)
        if (v[i]==n)
            oc++
}



function metodo(arrayV,dimension,nro) {
    let oc=0
    for (let i=0; i<dimension; i++){
        if(arrayV[i]==nro)
            oc= oc+1
	}
	return oc;
}