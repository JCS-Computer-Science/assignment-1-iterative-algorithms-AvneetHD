function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	for (let i = 0; i < array.length; i++) {
		var element = array[i];
		for(let x = i+1; x < array.length; x++){
			if(element > array[x]){
				var j = array[x];
				var y = array[x-1];
				array[x-1] = j;
				array[x] = y;
			}else{
				break;
			}
		}
	}

	console.log(array);
	return array;
}

module.exports = insertionSort;


insertionSort([4, 6, 2, 8, 23]);