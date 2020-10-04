/*
Sort an Array by String Length

    Create a function that takes an array of strings and return an array, sorted from shortest to longest. Examples: sortByLength(['Google', 'Apple','Microsoft']) -> ['Apple', 'Google', 'Microsoft'], (['Turing', 'Einstein, 'Jung']) -> ['Jung', 'Turing', 'Einstein'].  
*/

function sortByLength(array) {

    // Selection sort algorithm
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > array[array.length - 1].length) {
            let store = array[array.length - 1];
            array[array.length - 1] = array[i];
            array[i] = store;
        }
    }

    // Sorted element
    sort = array.slice(array.length-1, array.length);
    
    // Arranging sorted element
    let sort2 = [];
    sort2.unshift(sort);

    // Generating a different input for the recursive function below
    recursedArray = array.slice(0, array.length - 1);
    
    // Recursive function for runnning the sorting algoritm.
    if(array.length == 0) {
        return [];
    } else {
        return sortByLength(recursedArray).concat(sort2[0]);
    }
}

console.log(sortByLength(['Google', 'Apple','Microsoft']));
console.log(sortByLength(['Turing', 'Einstein', 'Jung']))