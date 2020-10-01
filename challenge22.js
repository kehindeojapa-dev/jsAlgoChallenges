/*
Sort Numbers in Ascending Order

    Create a function that takes an array of numbers and returns a new array, sorted in ascending order(smallest to biggest).
    - Sort numbers array in ascending order.
    - If the function's argument is null, an empty array, or undefined; return an empty array.
    - Return a new array of sorted number.
Examples: sortNumAscend([1,2,10,50,5]) -> [1,2,5,10,50], [80,29,4,-95,-24,85] -> [-95,-24,4,29,80,85], (null) -> [], ([]) -> []. 
*/

function sortNumAscend(array) {
    if (array == null | array == undefined | array == 0) {
        return [];
    }

    // Checking for the largest item between ith element and  n-1th element, and swapping them.
    for(let i = 0; i < array.length; i++) {
        if (array[i] > array[array.length - 1]) {
            store = array[array.length - 1];
            array[array.length-1] = array[i];
            array[i] = store;
        }
    }
    // To enable recursive function, the array is reduced to provide the function with different inputs when invoked.
    recursedArray = array.slice(0,array.length-1);
    // Storage for the sorted numbers
    sort = array.slice(array.length-1, array.length);
    let sort2 = [];
    sort2.unshift(sort);
   
    // Recursive function for sorting the numbers
    if (array.length == 0 ) {
        return [];
    } else {
        return sortNumAscend(recursedArray).concat(sort2[0]);
    } 
}

console.log(sortNumAscend([3,6,5,20,7,2,-10,5]))
console.log(sortNumAscend([80,29,4,-95,-24,85]));