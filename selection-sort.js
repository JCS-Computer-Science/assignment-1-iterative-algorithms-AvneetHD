function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let smallest = array[0];
	for(let i=0; i < array.length; i++){
		var x = array[i];
		if( x < smallest){
			smallest = x;
		}

	}
	console.log(smallest);

	return array;
}

module.exports = selectionSort;

selectionSort([3, 5, 420, 69, 1]);