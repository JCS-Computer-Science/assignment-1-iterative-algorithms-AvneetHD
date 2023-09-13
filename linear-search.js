function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	for(let i=0; i< array.length; i++){
		if(array[i] == searchTerm){
			return i;

		}
	}

	return null;
}

module.exports = linearSearch;

console.log(linearSearch([1,2,3,4,5,6,7,8,9,0], 4));