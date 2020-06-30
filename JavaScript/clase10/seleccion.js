let array=[5,9,8,2,-1];
let pos,min;
function seleccion(array){
	for(let i=0;i<array.length-1;i++){
	min=i;
		for(let j=i+1;j<array.length;j++){
			if(array[j]<array[min]){
				min=j;
				// pos=j;
			}
		}
		let aux=array[i];
		array[i]=array[min];
		array[min]=aux;
	}
	return array;
}
console.log(seleccion(array));