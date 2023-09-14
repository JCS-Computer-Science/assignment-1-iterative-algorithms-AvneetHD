function binarySearch(array, searchTerm) {
	let sorted = false;
	let start = 0;
	let end = array.length - 1;
	let arrayHalved = Math.floor((start + end) / 2);
	let counter = 0;

	while(!sorted && counter < 100){
		arrayHalved = Math.round((start + end) / 2);
		console.log(arrayHalved);

		if(array[arrayHalved] == searchTerm){
			console.log("searchterm is at index: "+ arrayHalved);
			sorted = true;
		}else if(array[arrayHalved] < searchTerm){
			console.log("look at top half");
			start = arrayHalved + 1;
		}else if(array[arrayHalved] > searchTerm){
			console.log("look at bottom half");
			end = arrayHalved - 1;
		}
		counter++;
	}
	return arrayHalved;
}

module.exports = binarySearch;

binarySearch([1], 1)
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
