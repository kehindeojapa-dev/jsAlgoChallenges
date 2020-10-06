/*
Return the Highest and Lowest Numbers

    Create a function that accepts a string of space seperated numbers and returns the highest and lowest number(as a string). Examples: highLow("1 2 3 4 5") -> "5 1", ("1 2 -3 4 5") -> "5 -3", ("13") -> "13 13". Notes: there will always be one number in the input string. 
*/


/*
    convertStringToArray function takes the string and removes the space around the numbers and convert it to a string.
*/
function convertStringToArray(string) {
    let array = [];

    //Regular Expression for removing the space and collecting the numbers.
    let regExp = /\d+|-\d+/g;

    //For converting the string into an array, removing the space.
    let string2 = string.match(regExp);
    for (let item of string2) {
            array.push(Number(item));
    }
    return array;
}

/*
    sortArray function takes the converted array from convertStringToArray and sorts the number from smallest to largest.
*/
function SortArray(string) {
    let array = (convertStringToArray(string));
    
    for (let i = 0; i <= array.length; i++) {
        if(array[i] > array[array.length - 1]) {
            store = array[array.length - 1];
            array[array.length - 1] = array[i];
            array[i] = store;
        }
    }
    
    let sort = array.slice(array.length-1, array.length);
    recursedArray = array.slice(0,array.length - 1).join(' ');

    if(array.length == 1) {
        return [sort[0]];
    } else {
        return SortArray(recursedArray).concat(sort);
    }
}

/*
    highLow function takes the sorted array and returns the smallest and largest item in the array as a result.
*/
function highLow(string){
    let array = SortArray(string);
    return `${array[array.length-1]} ${array[0]}`
}


console.log(highLow("1 2 -3 -4500 5 -5000 25"))
console.log(highLow("4 5 29 54 4 0 -214 542 64 1 -3 6 -6"));
