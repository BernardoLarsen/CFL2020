var array = [1, 2, 3, 4, 5];
function sumarArray(array) {
    var suma=0;
    for (var i = 0; i < array.length; i++) {
        suma = suma +array[i];
    }
    return suma;
}
console.log(sumarArray(array));
