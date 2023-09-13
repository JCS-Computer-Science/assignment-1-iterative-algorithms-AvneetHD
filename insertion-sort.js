function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	for (let i = 0; i < array.length; i++) {
		for(let x = 0; x < array.length; x++){
			var element = array.length-1-x;
			console.log(array[element]);
			if(array[element] < array[element-1]){
				var j = array[element];
				var y = array[element-1];
				array[element] = y;
				array[element-1] = j;
			}else{
				console.log("break");
				//break;
			}
		}
	}

	console.log(array);
	return array;
}

module.exports = insertionSort;


insertionSort([10, 6, -8, 489, 203, 0]);