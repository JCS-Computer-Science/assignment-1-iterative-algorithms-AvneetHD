const { run } = require("jest");

function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	const run_number = array.length;
	let sortedArray =[];
	for(let i =0; i < run_number; i++){
		let smallest = array[0];
		for(let i=0; i < array.length; i++){
			var x = array[i];
			if( x < smallest){
				smallest = x;
			}
		}
		sortedArray[i] = smallest;
		array.splice(array.indexOf(smallest), 1);
	}
	console.log(sortedArray);
	return sortedArray;
}

module.exports = selectionSort;

selectionSort([1, 17, 44, 96, 127, -8, 9, 88, 1]);