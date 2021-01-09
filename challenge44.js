/**
    Challenge44: Special Arrays

    An array is special if every even index contains 
    an even number and every odd index contains an 
    odd number. 
    Create a function that returns true if an array
     is special, and false otherwise.

Examples:
isSpecialArray([2,7,4,9,6,1,6,3]) -> true
isSpecialArray([2,7,9,1,6,1,6,3]) -> false
// Index 2 has an odd number 9.
    
 */

const isSpecialArray = arr => {
    let i = 0; //counter for original array
    let isEven = 0; //counter for 
    let isOdd = 0;
    let evenIndexArray = [];
    let oddIndexArray = [];

    //Split array into even and odd index arrays
    arr.forEach(item => {
        if(i % 2 == 0) {
            evenIndexArray.push(item);    
        } else {
            oddIndexArray.push(item);
        }
        i++
    })

    ///Check if each item in array is even
    evenIndexArray.forEach(item => {
        if(item % 2 == 0) {
            isEven++;
        } else {
            isEven--;
        }
    })

    ///Check if each item in array is odd
    oddIndexArray.forEach(item => {
        if(item % 2 == 1) {
            isOdd++;
        } else {
            isOdd--;
        }
    })

    //Check if total item in the array is even and odd
    if((isEven == evenIndexArray.length) && (isOdd == oddIndexArray.length)) {
        return true;
    } else {
        return false;
    }
}


// run below to test code
// console.log(isSpecialArray([2,7,4,9,6,1,6,3]));
// console.log(isSpecialArray([2,7,9,1,6,1,6,3]));
