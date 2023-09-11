function bubbleSort(array) {
	let finalArray_theSecond = array.length;
    let sorted = false;

    while(!sorted){
        if(finalArray_theSecond > 0){
            for(let i=1; i <array.length; i++){
                if(array[i] >= array[i-1]){
                    console.log("sorted");
                    sorted = true
                }else if(array[i] < array[i-1]){
                    console.log("unsorted");
                    var x = array[i];
                    var y = array[i-1];
                    array[i-1] = x;
                    array[i] = y;
                    sorted = false
                    break;
                }
            }
        }else{
            sorted = true;
        }
    }

	return array;
}
module.exports = bubbleSort;


/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

console.log(bubbleSort([1, 2, 3, 4, 6, 7, 8, 9, 10, 14, 21, 32, 33, 34, 4000]));