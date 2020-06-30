let readlineSync = require('readline-sync');
let ingresoDNI = readlineSync.questionInt('Ingrese Numero de DNI:');
let arrAcomparar = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
let valorLetra = ingresoDNI % 23 ; 
                 //resto
if(ingresoDNI > 99999999 || ingresoDNI < 0){
    console.log("ingrese datos validos");
}else{
    console.log(arrAcomparar[valorLetra]);
    console.log(valorLetra);
}